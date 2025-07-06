"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Circle,
} from "@react-google-maps/api";

// Define map type explicitly
type GoogleMapInstance = google.maps.Map;

// Define map container styles outside component to prevent re-renders
const mapContainerStyle = { width: "100%", height: "100%" };

// Hook to ensure components only render fully on the client side
function useClientOnly() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

export default function HeroSection() {
  const isClient = useClientOnly();

  // Pre-generate random values once for consistent rendering
  const [randomValues, setRandomValues] = useState({
    cloudWidths: [] as number[],
    cloudHeights: [] as number[],
    cloudTops: [] as number[],
    cloudXValues: [] as number[],
    cloudYValues: [] as number[],
    cloudZIndices: [] as number[],
    cloudDelays: [] as number[],
    particlePositions: [] as { top: string; left: string }[],
    particleXMovements: [] as number[],
    particleYMovements: [] as number[],
    particleDurations: [] as number[],
  });

  // Generate all random values once on client side
  useEffect(() => {
    if (!isClient) return;

    // Generate cloud random values
    const cloudWidths = Array(8)
      .fill(0)
      .map(() => 150 + Math.random() * 150);
    const cloudHeights = Array(8)
      .fill(0)
      .map(() => 100 + Math.random() * 80);
    const cloudTops = Array(8)
      .fill(0)
      .map(() => 5 + Math.random() * 40);
    const cloudZIndices = Array(8)
      .fill(0)
      .map(() => Math.floor(Math.random() * 10));
    const cloudDelays = Array(8)
      .fill(0)
      .map(() => Math.random() * 12);
    const cloudXValues = Array(8)
      .fill(0)
      .map(() => Math.random() * 40 - 20);
    const cloudYValues = Array(8)
      .fill(0)
      .map(() => Math.random() * 80 - 40);

    // Generate particle positions
    const particlePositions = Array(10)
      .fill(0)
      .map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }));
    const particleXMovements = Array(10)
      .fill(0)
      .map(() => Math.random() * 80 - 40);
    const particleYMovements = Array(10)
      .fill(0)
      .map(() => Math.random() * 80 - 40);
    const particleDurations = Array(10)
      .fill(0)
      .map(() => 25 + Math.random() * 15);

    setRandomValues({
      cloudWidths,
      cloudHeights,
      cloudTops,
      cloudXValues,
      cloudYValues,
      cloudZIndices,
      cloudDelays,
      particlePositions,
      particleXMovements,
      particleYMovements,
      particleDurations,
    });
  }, [isClient]);

  // Google Maps API configuration with proper error handling
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    // Add libraries to improve map performance
    libraries: ["visualization"],
  });

  // US centered coordinates - adjusted to focus more on southeast/storm area
  const center = { lat: 33.0, lng: -87.0 };

  // Storm path coordinates (more visible path across southern US)
  const stormPath = useMemo(
    () => [
      { lat: 30.5, lng: -97.0 }, // Austin area
      { lat: 30.2, lng: -93.5 }, // Lake Charles area
      { lat: 30.4, lng: -90.1 }, // New Orleans area
      { lat: 30.7, lng: -87.2 }, // Mobile area
      { lat: 31.2, lng: -84.5 }, // Southwest GA
      { lat: 32.5, lng: -81.5 }, // Central GA
      { lat: 33.8, lng: -78.9 }, // Myrtle Beach area
    ],
    []
  );

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    clickableIcons: false, // Disable POI clickability
    gestureHandling: "none", // Prevent map interactions for better performance
    keyboardShortcuts: false, // Disable keyboard shortcuts
    // Initial zoom level adjusted
    zoom: 5,
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [{ color: "#0f172a" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#0c4a6e" }],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#64748b" }, { weight: 1 }],
      },
      {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{ color: "#94a3b8" }, { weight: 1 }],
      },
      {
        featureType: "administrative.province",
        elementType: "geometry.stroke",
        stylers: [{ color: "#64748b" }, { weight: 0.8 }],
      },
      {
        featureType: "administrative.locality",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#475569" }, { visibility: "simplified" }],
      },
      // Reduce detail for better performance
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        stylers: [{ visibility: "off" }],
      },
    ],
  };

  // Storm animation
  const [stormPosition, setStormPosition] = useState(0);
  // Store both circles to prevent re-renders - increased size for better visibility
  const [stormRadius, impactRadius] = [80000, 160000];
  // Store storm options to prevent re-renders - increased opacity for better visibility
  const stormOptions = {
    strokeColor: "#ef4444",
    strokeOpacity: 0.9,
    strokeWeight: 2,
    fillColor: "#ef4444",
    fillOpacity: 0.4,
  };

  const impactOptions = {
    strokeColor: "#f97316",
    strokeOpacity: 0.7,
    strokeWeight: 1,
    fillColor: "#f97316",
    fillOpacity: 0.25,
  };

  // Use refs for persistent values across renders
  const stormPath_ref = useRef(stormPath);
  stormPath_ref.current = stormPath;

  // Map instances reference for Google Maps API
  const mapRef = useRef<GoogleMapInstance | null>(null);

  const onMapLoad = useCallback(
    (map: GoogleMapInstance) => {
      // Store reference to map
      mapRef.current = map;

      // Optimize map settings after loading
      map.setOptions({
        maxZoom: 6,
        minZoom: 4,
      });

      // Fit to bounds with padding immediately - add less padding for better visibility
      const bounds = new google.maps.LatLngBounds();
      stormPath.forEach((point) =>
        bounds.extend(new google.maps.LatLng(point.lat, point.lng))
      );

      // Add padding to show more context around the path
      bounds.extend(new google.maps.LatLng(28.0, -100.0)); // Southwest padding
      bounds.extend(new google.maps.LatLng(36.0, -75.0)); // Northeast padding

      map.fitBounds(bounds, 20);

      // Disable unnecessary map features for better performance
      map.setTilt(0);
    },
    [stormPath]
  );

  const onMapUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  // Smoother animation with requestAnimationFrame
  useEffect(() => {
    if (!isClient) return; // Only run on client side

    if (isLoaded && !loadError) {
      let animationFrameId: number;
      let lastTimestamp = 0;

      const animateStorm = (timestamp: number) => {
        // Throttle updates for smoother animation
        if (timestamp - lastTimestamp > 150) {
          // Increased from 50 to 150ms for slower movement
          setStormPosition(
            (prev) => (prev >= stormPath.length - 1 ? 0 : prev + 0.01) // Reduced from 0.03 to 0.01 for much slower movement
          );
          lastTimestamp = timestamp;
        }

        animationFrameId = requestAnimationFrame(animateStorm);
      };

      animationFrameId = requestAnimationFrame(animateStorm);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isLoaded, loadError, isClient, stormPath.length]);

  // Memoize the current storm position to prevent recalculations
  const currentStormPosition = useCallback(() => {
    const index = Math.floor(stormPosition);
    const remainder = stormPosition - index;

    if (index >= stormPath.length - 1) return stormPath[stormPath.length - 1];

    return {
      lat:
        stormPath[index].lat +
        (stormPath[index + 1].lat - stormPath[index].lat) * remainder,
      lng:
        stormPath[index].lng +
        (stormPath[index + 1].lng - stormPath[index].lng) * remainder,
    };
  }, [stormPosition, stormPath]);

  // Memoize map to prevent re-renders
  const memoizedMap = useCallback(() => {
    if (!isClient) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[10px] text-cyan-300">Loading map...</div>
        </div>
      );
    }

    if (loadError) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[10px] text-red-300">
            Map error: Please check API key
          </div>
        </div>
      );
    }

    if (!isLoaded) {
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[10px] text-cyan-300">Loading map...</div>
        </div>
      );
    }

    const position = currentStormPosition();

    return (
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={5}
          options={mapOptions}
          onLoad={onMapLoad}
          onUnmount={onMapUnmount}
        >
          {/* Storm path with improved visibility */}
          <Polyline
            path={stormPath_ref.current}
            options={{
              strokeColor: "#ef4444",
              strokeOpacity: 0.9,
              strokeWeight: 3,
              icons: [
                {
                  icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    scale: 2,
                  },
                  offset: "100%",
                  repeat: "100px",
                },
              ],
            }}
          />

          {/* Current storm position */}
          <Circle
            center={position}
            radius={stormRadius}
            options={{
              ...stormOptions,
              zIndex: 3, // Ensure it's on top
            }}
          />

          {/* Impact radius */}
          <Circle
            center={position}
            radius={impactRadius}
            options={{
              ...impactOptions,
              zIndex: 2, // Ensure proper layering
            }}
          />
        </GoogleMap>
      </div>
    );
  }, [
    isLoaded,
    loadError,
    center,
    onMapLoad,
    onMapUnmount,
    isClient,
    currentStormPosition,
    mapOptions,
    stormOptions,
    stormRadius,
    impactOptions,
    impactRadius,
  ]);

  // Render the actual map only once loaded
  const renderMap = useMemo(() => memoizedMap(), [memoizedMap]);

  // Reduce number of floating particles
  const numParticles = 10; // Reduced from 20

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Animated background - only render on client */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

          {/* Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Storm cloud to dashboard transformation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* More prominent storm clouds - using pre-generated random values */}
            <div className="absolute w-full h-full">
              {isClient &&
                randomValues.cloudWidths.length > 0 &&
                [...Array(8)].map((_, i) => (
                  <motion.div
                    key={`cloud-${i}`}
                    className="absolute rounded-full bg-gradient-to-b from-slate-600/40 to-slate-800/50 backdrop-blur-sm"
                    style={{
                      width: `${randomValues.cloudWidths[i]}px`,
                      height: `${randomValues.cloudHeights[i]}px`,
                      top: `${randomValues.cloudTops[i]}%`,
                      left: `${(i * 12) % 100}%`,
                      filter: "blur(6px)",
                      zIndex: randomValues.cloudZIndices[i],
                    }}
                    initial={{
                      opacity: 0.95,
                      scale: 1,
                    }}
                    animate={{
                      opacity: [0.95, 0.8, 0.4, 0],
                      scale: [1, 1.1, 0.9],
                      x: [
                        0,
                        randomValues.cloudXValues[i],
                        randomValues.cloudYValues[i],
                      ],
                      y: [0, 30, 180],
                    }}
                    transition={{
                      duration: 60,
                      delay: i * 6,
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: randomValues.cloudDelays[i],
                    }}
                  />
                ))}

              {/* Darker storm overlay - extremely slowed down */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 45, // Significantly increased from 24 to 45
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 15, // Significantly increased from 6 to 15
                }}
              />

              {/* Lightning flashes - extremely slowed down */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`lightning-${i}`}
                  className="absolute bg-blue-100"
                  style={{
                    width: i % 2 === 0 ? "3px" : "2px",
                    height: `${50 + Math.random() * 150}px`,
                    top: `${15 + Math.random() * 25}%`,
                    left: `${10 + ((i * 18) % 80)}%`,
                    transform: `rotate(${Math.random() * 40 - 20}deg)`,
                    boxShadow: "0 0 10px 2px rgba(191, 219, 254, 0.8)",
                    zIndex: 5,
                  }}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    scaleY: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.6, // Slightly increased from 0.4 to 0.6
                    delay: 1 + i * 15, // Tripled from 5 to 15
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 25 + Math.random() * 20, // Significantly increased from 10+12 to 25+20
                  }}
                />
              ))}

              {/* Lightning branches - extremely slowed down */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`branch-${i}`}
                  className="absolute"
                  style={{
                    top: `${20 + Math.random() * 20}%`,
                    left: `${20 + ((i * 25) % 70)}%`,
                    zIndex: 5,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.9, 0] }}
                  transition={{
                    duration: 1.2, // Increased from 0.8 to 1.2
                    delay: 10 + i * 15, // Increased from 6+7 to 10+15
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 30, // Nearly doubled from 16 to 30
                  }}
                >
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <motion.path
                      d="M50,0 L45,35 L60,40 L30,100 L40,50 L25,45 L50,0"
                      stroke="rgba(219, 234, 254, 0.8)"
                      strokeWidth="2"
                      fill="rgba(219, 234, 254, 0.3)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.0, delay: 0.3 }} // Increased from 0.6,0.2 to 1.0,0.3
                    />
                  </svg>
                </motion.div>
              ))}

              {/* Hail animation - extremely slowed down */}
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={`hail-${i}`}
                  className="absolute rounded-full bg-blue-100/70"
                  style={{
                    width: `${3 + Math.random() * 7}px`,
                    height: `${3 + Math.random() * 7}px`,
                    top: `-5%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: "0 0 3px 1px rgba(191, 219, 254, 0.5)",
                  }}
                  initial={{
                    opacity: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: [0, 200],
                  }}
                  transition={{
                    duration: 10 + Math.random() * 10, // Significantly increased from 4+4 to 10+10
                    delay: 20 + i * 0.8, // Increased from 12+0.4 to 20+0.8
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 15 + Math.random() * 20, // Significantly increased from 6+8 to 15+20
                    ease: "easeIn",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Dashboard elements emerging from storms */}
          <div className="absolute w-full h-full">
            {/* Storm impact map - slowed down */}
            <motion.div
              key="storm-map"
              className="absolute rounded-lg overflow-hidden border border-blue-500/40"
              style={{
                width: "240px",
                height: "160px",
                top: "25%",
                left: "15%",
                zIndex: 7,
              }}
              initial={{
                opacity: 0,
                y: -50,
                scale: 0.5,
              }}
              animate={{
                opacity: [0, 0.9, 0.9, 0],
                y: [30, 50, 70, 150],
                scale: [0.5, 1, 1, 0.8],
              }}
              transition={{
                duration: 24, // Doubled from 12 to 24
                delay: 15, // Increased from 8 to 15
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-950/90 p-2">
                <div className="text-blue-300 text-xs mb-1">
                  Storm Impact Map
                </div>
                <div className="relative h-[calc(100%-20px)] w-full bg-blue-950/50 rounded-sm overflow-hidden">
                  {/* Map background */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]"></div>
                    <div className="absolute w-full h-[1px] bg-blue-500/20 top-1/4"></div>
                    <div className="absolute w-full h-[1px] bg-blue-500/20 top-2/4"></div>
                    <div className="absolute w-full h-[1px] bg-blue-500/20 top-3/4"></div>
                    <div className="absolute h-full w-[1px] bg-blue-500/20 left-1/4"></div>
                    <div className="absolute h-full w-[1px] bg-blue-500/20 left-2/4"></div>
                    <div className="absolute h-full w-[1px] bg-blue-500/20 left-3/4"></div>
                  </div>

                  {/* Storm radar animation */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.8, 0.8, 0] }}
                    transition={{
                      duration: 3,
                      delay: 8.5,
                      repeat: Infinity,
                      repeatDelay: 8,
                    }}
                  >
                    <div className="absolute top-[40%] left-[35%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-red-500/40 to-red-700/10 blur-[2px]"></div>
                    <div className="absolute top-[30%] left-[25%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-700/5 blur-[3px]"></div>
                    <div className="absolute top-[20%] left-[15%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/5 blur-[4px]"></div>
                  </motion.div>

                  {/* Affected homes markers */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`marker-${i}`}
                      className="absolute w-1.5 h-1.5 rounded-full bg-red-500"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1, 1],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: 9 + i * 0.3,
                        repeat: Infinity,
                        repeatDelay: 10,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Claims processing dashboard */}
            <motion.div
              key="claims-dashboard"
              className="absolute rounded-lg border border-purple-500/30 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-3"
              style={{
                width: "220px",
                height: "140px",
                top: "35%",
                left: "40%",
                zIndex: 7,
              }}
              initial={{
                opacity: 0,
                y: -30,
                rotateZ: -5,
              }}
              animate={{
                opacity: [0, 0.95, 0],
                y: [0, 30, 80],
                rotateZ: [-5, 0, 3],
              }}
              transition={{
                duration: 10,
                delay: 10,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 4,
              }}
            >
              <div className="text-purple-300 text-xs mb-2">
                Claims Processing
              </div>
              <div className="grid grid-cols-1 gap-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="flex-1 h-4 bg-purple-800/30 rounded-sm"></div>
                  <div className="text-[10px] text-green-400">86%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="flex-1 h-4 bg-purple-800/30 rounded-sm"></div>
                  <div className="text-[10px] text-yellow-400">62%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <div className="flex-1 h-4 bg-purple-800/30 rounded-sm"></div>
                  <div className="text-[10px] text-blue-400">45%</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="flex-1 h-4 bg-purple-800/30 rounded-sm"></div>
                  <div className="text-[10px] text-red-400">23%</div>
                </div>
                <div className="mt-1 flex justify-between">
                  <div className="text-[9px] text-gray-400">
                    Updated: Today 2:45PM
                  </div>
                  <div className="text-[9px] text-purple-400">
                    Auto-refresh: ON
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Damage report UI element */}
            <motion.div
              className="absolute rounded-xl border border-blue-600/40 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-3"
              style={{
                width: "250px",
                height: "180px",
                top: "45%",
                right: "15%",
                zIndex: 8,
              }}
              initial={{ opacity: 0, x: 30, rotateY: 40 }}
              animate={{
                opacity: [0, 0.95, 0],
                x: [30, 0, -30],
                rotateY: [40, 0, -10],
              }}
              transition={{
                duration: 10,
                delay: 12,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
              }}
            >
              <div className="text-blue-300 text-xs mb-2">
                Roof Damage Report
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 bg-blue-950/30 rounded-lg h-20 overflow-hidden relative">
                  {/* Roof image placeholder with damage markers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-900/50"></div>
                  <motion.div
                    className="absolute w-3 h-3 border-2 border-red-500 rounded-full top-1/4 left-1/3"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 12.5 }}
                  />
                  <motion.div
                    className="absolute w-3 h-3 border-2 border-red-500 rounded-full top-1/2 left-2/3"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 13 }}
                  />
                  <motion.div
                    className="absolute w-4 h-4 border-2 border-yellow-500 rounded-full bottom-1/4 right-1/4"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 13.5 }}
                  />
                </div>
                <div className="col-span-1 flex flex-col space-y-1">
                  <div className="bg-green-500/20 rounded-md h-6 flex items-center px-1">
                    <span className="text-[9px] text-green-300">Good</span>
                  </div>
                  <div className="bg-yellow-500/20 rounded-md h-6 flex items-center px-1">
                    <span className="text-[9px] text-yellow-300">Minor</span>
                  </div>
                  <div className="bg-red-500/20 rounded-md h-6 flex items-center px-1">
                    <span className="text-[9px] text-red-300">Severe</span>
                  </div>
                </div>
                <div className="col-span-3 bg-gray-800/50 rounded-lg h-6 mt-2 flex items-center justify-between px-2">
                  <span className="text-[9px] text-gray-300">Confidence:</span>
                  <span className="text-[9px] text-blue-300">89%</span>
                </div>
                <div className="col-span-3 flex justify-between mt-2">
                  <motion.div
                    className="bg-blue-600/30 rounded-md w-16 h-5 flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.5)" }}
                  >
                    <span className="text-[9px] text-blue-300">
                      View Report
                    </span>
                  </motion.div>
                  <motion.div
                    className="bg-purple-600/30 rounded-md w-16 h-5 flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(147, 51, 234, 0.5)" }}
                  >
                    <span className="text-[9px] text-purple-300">Share</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Crew Assignment */}
            <motion.div
              key="crew-assignment"
              className="absolute rounded-lg overflow-hidden border border-teal-500/30"
              style={{
                width: "180px",
                height: "120px",
                bottom: "15%",
                left: "28%",
                zIndex: 7,
              }}
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.7,
              }}
              animate={{
                opacity: [0, 0.9, 0],
                y: [0, 20, 60],
                scale: [0.7, 1, 0.8],
              }}
              transition={{
                duration: 9,
                delay: 14,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 6,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-2">
                <div className="text-teal-300 text-xs mb-1">
                  Crew Assignment
                </div>
                <div className="space-y-2 mt-2">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={`crew-${i}`}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 14.5 + i * 0.2 }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i < 2 ? "bg-teal-500" : "bg-gray-500"
                        }`}
                      ></div>
                      <div className="flex-1 h-3 bg-teal-900/30 rounded-sm"></div>
                      <div className="text-[9px] text-teal-400">
                        {["A1", "B3", "C2", "D4"][i]}
                      </div>
                    </motion.div>
                  ))}
                  <motion.div
                    className="mt-3 bg-teal-700/30 rounded-sm h-5 flex items-center justify-center"
                    whileHover={{ backgroundColor: "rgba(15, 118, 110, 0.5)" }}
                  >
                    <span className="text-[9px] text-teal-300">
                      Optimize Routes
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Data points and connections */}
            <motion.div
              className="absolute top-[45%] left-[40%] w-[300px] h-[200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{
                duration: 12,
                delay: 10,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`datapoint-${i}`}
                  className="absolute w-3 h-3 rounded-full bg-purple-500/70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    boxShadow: "0 0 5px rgba(168, 85, 247, 0.5)",
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 1],
                    opacity: [0, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    delay: 10 + i * 0.3,
                    repeat: Infinity,
                    repeatDelay: 13,
                  }}
                />
              ))}
              <svg className="absolute inset-0 w-full h-full">
                <motion.path
                  d="M50,100 Q100,50 150,100 T250,100"
                  stroke="rgba(168, 85, 247, 0.5)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    delay: 10.5,
                    repeat: Infinity,
                    repeatDelay: 12,
                  }}
                />
              </svg>
            </motion.div>

            {/* Updated Storm damage tracker with Google Maps */}
            <motion.div
              className="absolute bg-black/30 rounded-lg p-3 h-1/2 relative overflow-hidden"
              style={{
                width: "240px",
                height: "160px",
                top: "45%",
                left: "15%",
                zIndex: 7,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{
                duration: 10,
                delay: 12,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 5,
              }}
            >
              <div className="h-5 w-2/3 bg-gradient-to-r from-cyan-700/70 to-cyan-600/50 rounded mb-4 flex items-center">
                <span className="text-xs font-semibold text-white pl-2">
                  Storm Damage Tracker
                </span>
              </div>

              {/* Google Maps visualization */}
              {isClient && (
                <div className="absolute inset-0 mt-10 mx-4">
                  <div className="w-full h-full relative">
                    {renderMap}

                    {/* Data overlay */}
                    <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded">
                      <div className="text-[8px] text-cyan-300">
                        Potential Impact
                      </div>
                      <div className="text-[10px] font-bold text-white">
                        23 Properties
                      </div>
                      <div className="text-[8px] text-cyan-200 mt-1">
                        +28% vs Last Month
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {/* Animated particles - using pre-generated random values */}
      <div className="absolute inset-0">
        {isClient &&
          randomValues.particlePositions.length > 0 &&
          Array.from({ length: numParticles }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-blue-500/80"
              style={{
                top: randomValues.particlePositions[i].top,
                left: randomValues.particlePositions[i].left,
              }}
              animate={{
                x: [0, randomValues.particleXMovements[i]],
                y: [0, randomValues.particleYMovements[i]],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: randomValues.particleDurations[i],
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Storm Response Management for </span>
              <span className="gradient-text primary-gradient">
                Construction Success
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            BuildFlow delivers real-time storm tracking, automated lead
            generation, and crew coordination in one powerful platform that
            helps construction companies maximize profits from every weather
            event.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <Link
              href="/demo"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              See it in action <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/features"
              className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              Explore features
            </Link>
          </motion.div>

          {/* Dashboard mock visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative mt-16 mx-auto max-w-4xl mb-20"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl shadow-2xl">
              <div className="bg-gray-900 rounded-lg p-3">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3 px-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-800 rounded-full px-3 py-1 text-xs text-gray-400">
                    buildflow.app/dashboard
                  </div>
                </div>
                <div className="aspect-[16/9] bg-gray-800 rounded-lg mt-3 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                    <div className="grid grid-cols-12 gap-4 h-full">
                      <div className="col-span-3 bg-black/30 rounded-lg p-3">
                        <div className="h-5 w-3/4 bg-gradient-to-r from-blue-700/70 to-blue-600/50 rounded mb-4 flex items-center">
                          <span className="text-xs font-semibold text-white pl-2">
                            Project Dashboard
                          </span>
                        </div>
                        <div className="space-y-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`flex items-center space-x-2 ${
                                i < 2 ? "bg-blue-900/20 rounded" : ""
                              }`}
                            >
                              <div
                                className={`w-4 h-4 ${
                                  i < 2 ? "bg-blue-500/80" : "bg-gray-700/80"
                                } rounded-sm flex items-center justify-center`}
                              >
                                {i < 2 && (
                                  <span className="text-[8px] text-white">
                                    ✓
                                  </span>
                                )}
                              </div>
                              <div className="h-3 bg-gray-700/80 rounded w-full relative">
                                {i === 0 && (
                                  <span className="absolute text-[9px] text-blue-200 left-2 top-[1px]">
                                    Storm Damage #1082
                                  </span>
                                )}
                                {i === 1 && (
                                  <span className="absolute text-[9px] text-blue-200 left-2 top-[1px]">
                                    Roof Replacement #1093
                                  </span>
                                )}
                                {i === 2 && (
                                  <span className="absolute text-[9px] text-gray-400 left-2 top-[1px]">
                                    Siding Repair #1105
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="h-5 w-full bg-gradient-to-r from-emerald-700/50 to-emerald-600/30 rounded mt-6 mb-2 flex items-center">
                          <span className="text-xs font-semibold text-white pl-2">
                            Today&apos;s Schedule
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between bg-emerald-900/20 rounded p-1">
                            <span className="text-[8px] text-emerald-300">
                              Site Visit
                            </span>
                            <span className="text-[8px] text-gray-400">
                              9:30 AM
                            </span>
                          </div>
                          <div className="flex items-center justify-between bg-emerald-900/20 rounded p-1">
                            <span className="text-[8px] text-emerald-300">
                              Material Delivery
                            </span>
                            <span className="text-[8px] text-gray-400">
                              1:15 PM
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-9 space-y-4">
                        <div className="bg-black/30 rounded-lg p-3 h-1/2">
                          <div className="h-5 w-2/3 bg-gradient-to-r from-purple-700/70 to-purple-600/50 rounded mb-4 flex items-center">
                            <span className="text-xs font-semibold text-white pl-2">
                              Active Projects by Phase
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-3 h-5/6">
                            <div className="bg-blue-900/30 rounded-lg flex flex-col justify-between p-2 border border-blue-700/30">
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] text-blue-300">
                                  Lead Generation
                                </span>
                                <span className="text-[8px] px-1.5 py-0.5 bg-blue-800/50 rounded-full text-blue-200">
                                  +4 Today
                                </span>
                              </div>
                              <span className="text-sm font-bold text-white">
                                18 Properties
                              </span>
                              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="bg-purple-900/30 rounded-lg flex flex-col justify-between p-2 border border-purple-700/30">
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] text-purple-300">
                                  In Progress
                                </span>
                                <span className="text-[8px] px-1.5 py-0.5 bg-purple-800/50 rounded-full text-purple-200">
                                  3 Crews
                                </span>
                              </div>
                              <span className="text-sm font-bold text-white">
                                12 Projects
                              </span>
                              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-purple-500 rounded-full"
                                  style={{ width: "80%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="bg-green-900/30 rounded-lg flex flex-col justify-between p-2 border border-green-700/30">
                              <div className="flex justify-between items-center">
                                <span className="text-[9px] text-green-300">
                                  Completed
                                </span>
                                <span className="text-[8px] px-1.5 py-0.5 bg-green-800/50 rounded-full text-green-200">
                                  +2 This Week
                                </span>
                              </div>
                              <span className="text-sm font-bold text-white">
                                7 This Month
                              </span>
                              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-green-500 rounded-full"
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-black/30 rounded-lg p-3 h-1/2 relative overflow-hidden">
                          <div className="h-5 w-2/3 bg-gradient-to-r from-cyan-700/70 to-cyan-600/50 rounded mb-4 flex items-center">
                            <span className="text-xs font-semibold text-white pl-2">
                              Storm Damage Tracker
                            </span>
                          </div>

                          {/* Google Maps in the dashboard display */}
                          {isClient && (
                            <div className="absolute inset-0 mt-10 mx-4">
                              <div className="w-full h-full relative">
                                {renderMap}

                                {/* Data overlay */}
                                <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm p-1.5 rounded">
                                  <div className="text-[8px] text-cyan-300">
                                    Potential Impact
                                  </div>
                                  <div className="text-[10px] font-bold text-white">
                                    23 Properties
                                  </div>
                                  <div className="text-[8px] text-cyan-200 mt-1">
                                    +28% vs Last Month
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-300 font-medium bg-gradient-to-r from-blue-900/80 via-purple-900/80 to-blue-900/80 px-6 py-2 rounded-full border border-purple-800/60 backdrop-blur-sm z-10 w-auto whitespace-nowrap">
              Complete construction management for every storm, every project,
              every team
            </div>

            {/* Fix for Today&apos;s Schedule apostrophe */}
            <div className="hidden">Today&apos;s Schedule</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
