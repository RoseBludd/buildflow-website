import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiImage,
  FiZoomIn,
  FiLayers,
  FiCheckSquare,
  FiCamera,
} from "react-icons/fi";

export default function ImageAnalyzerPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 to-pink-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-red-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-red-950/40 rounded-full px-3 py-1 text-sm text-red-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Image </span>
                  <span className="gradient-text primary-gradient">
                    Analyzer
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  AI-powered image analysis to detect damage types, estimate
                  materials, and document projects with precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-red-500 to-pink-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Image Analyzer UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Header with tabs */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-md bg-red-600/70 flex items-center justify-center">
                                <FiImage className="text-white" size={16} />
                              </div>
                              <div className="text-white font-medium">
                                Damage Analysis
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                Upload
                              </div>
                              <div className="px-2 py-1 bg-red-600/30 rounded text-xs text-red-300">
                                Analysis
                              </div>
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                Report
                              </div>
                            </div>
                          </div>

                          {/* Main content */}
                          <div className="flex-1 flex overflow-hidden">
                            {/* Image view */}
                            <div className="w-3/5 pr-3">
                              <div className="h-full bg-gray-800/50 rounded-lg overflow-hidden relative">
                                {/* Roof image placeholder with overlay annotations */}
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/0 to-gray-900/80"></div>

                                {/* Image annotation markers */}
                                <div className="absolute top-1/4 left-1/3 w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                </div>
                                <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                </div>
                                <div className="absolute bottom-1/3 left-1/2 w-10 h-10 rounded-full border-2 border-green-500 flex items-center justify-center">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Analysis tools overlay */}
                                <div className="absolute bottom-3 left-3 right-3 bg-gray-900/80 rounded-lg p-2 flex justify-between">
                                  <div className="flex space-x-2">
                                    <div className="w-7 h-7 rounded bg-gray-800 flex items-center justify-center">
                                      <FiZoomIn
                                        className="text-gray-400"
                                        size={14}
                                      />
                                    </div>
                                    <div className="w-7 h-7 rounded bg-gray-800 flex items-center justify-center">
                                      <FiLayers
                                        className="text-gray-400"
                                        size={14}
                                      />
                                    </div>
                                    <div className="w-7 h-7 rounded bg-red-900/50 flex items-center justify-center">
                                      <FiCamera
                                        className="text-red-400"
                                        size={14}
                                      />
                                    </div>
                                  </div>
                                  <div className="px-2 py-1 bg-red-600/30 text-red-300 text-xs rounded">
                                    AI Analysis Active
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Analysis panel */}
                            <div className="w-2/5 pl-2 flex flex-col">
                              <div className="bg-gray-800/60 rounded-md p-2 mb-3">
                                <div className="text-xs font-medium text-white">
                                  Damage Detection Results
                                </div>
                              </div>

                              <div className="flex-1 bg-gray-800/30 rounded-md p-3 space-y-3 mb-3 overflow-y-auto">
                                {/* Result item 1 */}
                                <div className="bg-gray-800/60 rounded-md p-2 border border-red-500/30">
                                  <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center">
                                      <div className="h-6 w-6 rounded-full bg-red-900/40 mr-2 flex items-center justify-center">
                                        <FiCheckSquare
                                          className="text-red-400"
                                          size={12}
                                        />
                                      </div>
                                      <div className="text-sm font-medium text-white">
                                        Shingle Damage
                                      </div>
                                    </div>
                                    <div className="text-xs text-red-400">
                                      98% confidence
                                    </div>
                                  </div>
                                  <div className="text-xs text-gray-400 mt-1">
                                    Detected 12 areas with missing or damaged
                                    shingles
                                  </div>
                                </div>

                                {/* Result item 2 */}
                                <div className="bg-gray-800/60 rounded-md p-2">
                                  <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center">
                                      <div className="h-6 w-6 rounded-full bg-yellow-900/40 mr-2 flex items-center justify-center">
                                        <FiCheckSquare
                                          className="text-yellow-400"
                                          size={12}
                                        />
                                      </div>
                                      <div className="text-sm font-medium text-white">
                                        Hail Impact
                                      </div>
                                    </div>
                                    <div className="text-xs text-yellow-400">
                                      87% confidence
                                    </div>
                                  </div>
                                  <div className="text-xs text-gray-400 mt-1">
                                    Estimated 23 hail impact points across 15 sq
                                    ft
                                  </div>
                                </div>

                                {/* Result item 3 */}
                                <div className="bg-gray-800/60 rounded-md p-2">
                                  <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center">
                                      <div className="h-6 w-6 rounded-full bg-green-900/40 mr-2 flex items-center justify-center">
                                        <FiCheckSquare
                                          className="text-green-400"
                                          size={12}
                                        />
                                      </div>
                                      <div className="text-sm font-medium text-white">
                                        Flashing Issue
                                      </div>
                                    </div>
                                    <div className="text-xs text-green-400">
                                      91% confidence
                                    </div>
                                  </div>
                                  <div className="text-xs text-gray-400 mt-1">
                                    Detected separation at chimney flashing, 3.2
                                    linear ft
                                  </div>
                                </div>
                              </div>

                              {/* Materials estimation */}
                              <div className="bg-gray-800/60 rounded-md p-2">
                                <div className="text-xs font-medium text-white mb-2">
                                  Materials Estimation
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div className="bg-gray-800/50 rounded p-1.5">
                                    <div className="text-gray-400">
                                      Shingles
                                    </div>
                                    <div className="text-white">4 bundles</div>
                                  </div>
                                  <div className="bg-gray-800/50 rounded p-1.5">
                                    <div className="text-gray-400">
                                      Flashing
                                    </div>
                                    <div className="text-white">
                                      5 linear ft
                                    </div>
                                  </div>
                                  <div className="bg-gray-800/50 rounded p-1.5">
                                    <div className="text-gray-400">Labor</div>
                                    <div className="text-white">8-10 hours</div>
                                  </div>
                                  <div className="bg-red-900/20 rounded p-1.5 border border-red-500/20">
                                    <div className="text-red-400">
                                      Est. Cost
                                    </div>
                                    <div className="text-white">$2,450</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Intelligent </span>
                <span className="gradient-text primary-gradient">
                  Image Analysis
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered Image Analyzer detects damage, estimates
                materials, and helps document projects with unprecedented
                accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-red-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-800/30 transition-colors">
                  <FiImage size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Roof and Property Damage Detection
                </h3>
                <p className="text-gray-400">
                  Accurately identify and categorize different types of property
                  damage with our advanced computer vision algorithms.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Shingle, tile, and metal roof damage detection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Hail and wind damage identification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Water and structural damage analysis
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-red-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-800/30 transition-colors">
                  <FiZoomIn size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automated Measurements from Images
                </h3>
                <p className="text-gray-400">
                  Extract precise measurements directly from photos, eliminating
                  the need for manual measuring in many situations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Accurate area and distance calculations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Pitch and angle detection for roofing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      3D modeling from multiple 2D images
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-red-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-800/30 transition-colors">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Material Estimation and Takeoffs
                </h3>
                <p className="text-gray-400">
                  Generate accurate material requirements based on detected
                  damage and measurements to streamline your estimating process.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Detailed material quantities and costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Labor and time estimates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Waste factor calculations
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-red-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-800/30 transition-colors">
                  <FiCamera size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Before/After Comparison Tools
                </h3>
                <p className="text-gray-400">
                  Document project progress with powerful comparison tools that
                  showcase the transformation from damage to repair.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Side-by-side visual comparisons
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Slider overlay for interactive viewing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Progress documentation for clients
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-red-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-800/30 transition-colors">
                  <FiCheckSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Detailed Damage Reports
                </h3>
                <p className="text-gray-400">
                  Generate comprehensive reports with AI-detected damage,
                  measurements, material requirements, and cost estimates.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Professional PDF reports for clients
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Insurance-friendly documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Annotated images with damage highlights
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-red-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-red-900/30 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-800/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M9 9h6v6H9z" />
                    <path d="M15 4v2" />
                    <path d="M15 18v2" />
                    <path d="M4 15h2" />
                    <path d="M18 15h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Integration with Project Management
                </h3>
                <p className="text-gray-400">
                  Seamlessly connect image analysis results with your project
                  management workflow for end-to-end efficiency.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Direct integration with BuildFlow platform
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      API access for custom integrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-red-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Workflow automation triggers
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Real-World </span>
                <span className="gradient-text primary-gradient">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how contractors are transforming their damage assessment and
                estimation process with BuildFlow&apos;s Image Analyzer.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  72%
                </div>
                <div className="text-gray-400">Faster damage assessment</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  96%
                </div>
                <div className="text-gray-400">Damage detection accuracy</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  3.4h
                </div>
                <div className="text-gray-400">Time saved per project</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  42%
                </div>
                <div className="text-gray-400">
                  Improvement in estimate accuracy
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-red-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-red-900/50 flex items-center justify-center text-white text-2xl font-bold">
                      JS
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-red-400 flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl text-white italic mb-6">
                    &quot;The Image Analyzer completely transformed how we
                    assess and estimate roof damage. What used to take hours of
                    manual measurements and guesswork now happens in minutes
                    with incredible accuracy. The material estimation feature
                    alone has saved us thousands in wasted materials.&quot;
                  </blockquote>
                  <div className="text-white font-bold">James Sullivan</div>
                  <div className="text-gray-400">
                    Owner, Sullivan Roofing & Restoration
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transform Your Damage Assessment Process
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                  Schedule a Demo
                </button>
                <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
