"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiUsers,
  FiBarChart2,
  FiMessageSquare,
  FiTruck,
  FiImage,
  FiDatabase,
  FiAward,
  FiBriefcase,
  FiPhone,
  FiClock,
  FiCamera,
  FiFileText,
  FiTarget,
  FiEdit3,
  FiCloudRain,
  FiSearch,
} from "react-icons/fi";

export default function FeaturesOverview() {
  const [activeFeature, setActiveFeature] = useState("stormLeads");

  const features = [
    {
      id: "stormLeads",
      name: "Storm Lead Engine",
      description:
        "Automatically identify and prioritize leads in storm-affected areas using AI-powered damage detection.",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
      url: "/features/storm-lead-engine",
      details: [
        "Real-time storm tracking integration",
        "Aerial imagery damage assessment",
        "Automated lead scoring and prioritization",
        "Geographic clustering for efficient routing",
      ],
    },
    {
      id: "aiVoiceCalling",
      name: "AI Voice Calling",
      description:
        "Automated outreach with realistic AI voices for lead qualification and follow-up calls.",
      icon: <FiPhone className="w-6 h-6" />,
      color: "from-emerald-600 to-emerald-400",
      url: "/features/ai-voice-calling",
      details: [
        "Human-like AI voice generation",
        "Automated call scheduling",
        "Smart conversation handling",
        "Call performance analytics",
      ],
    },
    {
      id: "salesPipeline",
      name: "Sales Pipeline",
      description:
        "Track and optimize your entire sales process from lead to signed contract with built-in analytics.",
      icon: <FiBarChart2 className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
      url: "/features/sales-pipeline",
      details: [
        "Visual pipeline management",
        "Automated follow-up sequences",
        "Contract generation and e-signatures",
        "Sales performance analytics",
      ],
    },
    {
      id: "campaignManagement",
      name: "Campaign Management",
      description:
        "Multi-channel marketing campaigns with automated storm response and A/B testing.",
      icon: <FiTarget className="w-6 h-6" />,
      color: "from-orange-600 to-orange-400",
      url: "/features/campaign-management",
      details: [
        "Email and SMS campaigns",
        "Weather-triggered automation",
        "A/B testing with analytics",
        "Lead nurturing sequences",
      ],
    },
    {
      id: "messaging",
      name: "Unified Messaging",
      description:
        "Keep all client and team communications in one place with SMS, email, and in-app messaging.",
      icon: <FiMessageSquare className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
      url: "/features/unified-messaging",
      details: [
        "Two-way SMS & email messaging",
        "Automated appointment reminders",
        "Team collaboration tools",
        "Message templates and scheduling",
      ],
    },
    {
      id: "fieldInspector",
      name: "Field Inspector",
      description:
        "Mobile property inspection app with GPS tracking, photo documentation, and offline sync.",
      icon: <FiCamera className="w-6 h-6" />,
      color: "from-cyan-600 to-cyan-400",
      url: "/features/field-inspector",
      details: [
        "GPS-enabled property mapping",
        "Photo and video documentation",
        "Offline data collection",
        "Automated report generation",
      ],
    },
    {
      id: "imageAnalyzer",
      name: "Image Analyzer",
      description:
        "AI-powered image analysis to detect damage types, estimate materials, and document projects.",
      icon: <FiImage className="w-6 h-6" />,
      color: "from-red-600 to-red-400",
      url: "/features/image-analyzer",
      details: [
        "Roof and property damage detection",
        "Automated measurements from images",
        "Material estimation and takeoffs",
        "Before/after comparison tools",
      ],
    },
    {
      id: "timeTracking",
      name: "GPS Time Tracking",
      description:
        "Location-verified time tracking for contractors with geofencing and mobile apps.",
      icon: <FiClock className="w-6 h-6" />,
      color: "from-amber-600 to-amber-400",
      url: "/features/gps-time-tracking",
      details: [
        "GPS geofencing validation",
        "Real-time location tracking",
        "Mobile clock-in/out apps",
        "Automated payroll integration",
      ],
    },
    {
      id: "jobManagement",
      name: "Job Management",
      description:
        "End-to-end job management from initial assessment to final inspection and warranty.",
      icon: <FiBriefcase className="w-6 h-6" />,
      color: "from-pink-600 to-pink-400",
      url: "/features/job-management",
      details: [
        "Interactive job scheduling",
        "Material ordering and tracking",
        "Quality control checklists",
        "Warranty management",
      ],
    },
    {
      id: "changeOrders",
      name: "Change Orders",
      description:
        "Streamlined change order management with digital approvals and cost tracking.",
      icon: <FiEdit3 className="w-6 h-6" />,
      color: "from-violet-600 to-violet-400",
      url: "/features/change-orders",
      details: [
        "Digital change order forms",
        "Automated approval workflows",
        "Cost impact calculations",
        "Customer notification system",
      ],
    },
    {
      id: "vendorManagement",
      name: "Vendor Management",
      description:
        "Streamline subcontractor scheduling, payments, and performance tracking in one system.",
      icon: <FiTruck className="w-6 h-6" />,
      color: "from-yellow-600 to-yellow-400",
      url: "/features/vendor-management",
      details: [
        "Subcontractor onboarding and verification",
        "Automated scheduling and dispatching",
        "Digital work orders and approvals",
        "Contractor performance metrics",
      ],
    },
    {
      id: "documentManagement",
      name: "Document Management",
      description:
        "Create, send, sign, and track all business documents with automated workflows.",
      icon: <FiFileText className="w-6 h-6" />,
      color: "from-slate-600 to-slate-400",
      url: "/features/document-management",
      details: [
        "Template-based document creation",
        "Electronic signature workflows",
        "Document status tracking",
        "Automated delivery and reminders",
      ],
    },
    {
      id: "customerPortal",
      name: "Customer Portal",
      description:
        "Provide clients with a self-service portal to view project status, submit requests, and pay invoices.",
      icon: <FiAward className="w-6 h-6" />,
      color: "from-teal-600 to-teal-400",
      url: "/features/customer-portal",
      details: [
        "Real-time project tracking",
        "Document sharing and approval",
        "Secure payment processing",
        "Custom branding options",
      ],
    },
    {
      id: "stormTracking",
      name: "Storm Tracking",
      description:
        "Real-time storm monitoring with automated lead generation from weather events.",
      icon: <FiCloudRain className="w-6 h-6" />,
      color: "from-sky-600 to-sky-400",
      url: "/features/storm-tracking",
      details: [
        "Live weather monitoring",
        "Hail and wind damage tracking",
        "Automated lead generation",
        "Geographic impact mapping",
      ],
    },
    {
      id: "contactFinder",
      name: "Property Contact Finder",
      description:
        "Automatically find property owner contact information for targeted outreach.",
      icon: <FiSearch className="w-6 h-6" />,
      color: "from-rose-600 to-rose-400",
      url: "/features/property-contact-finder",
      details: [
        "Property owner database lookup",
        "Phone and email discovery",
        "Batch processing capabilities",
        "Data export and integration",
      ],
    },
    {
      id: "aiDashboards",
      name: "AI Dashboard Notifier",
      description:
        "Ask Claude to create custom business intelligence reports and schedule automated delivery to your team.",
      icon: <FiDatabase className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-400",
      url: "/features/dashboard-notifier",
      details: [
        "Natural language data queries",
        "Automated reporting schedules",
        "Customizable dashboard views",
        "Predictive analytics and forecasting",
      ],
    },
  ];

  const selectedFeature =
    features.find((f) => f.id === activeFeature) || features[0];

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-3xl -top-20 -right-20" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-3xl bottom-0 left-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-white">Introducing </span>
              <span className="gradient-text primary-gradient">BuildFlow</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              The complete AI-powered platform replacing your scattered tools
              with an intelligent, connected system built specifically for storm
              restoration and construction companies.
            </p>
          </motion.div>

          {/* Feature selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 mb-8 sm:mb-10">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-3 sm:p-4 rounded-xl transition-all duration-300 flex flex-col items-center text-center gap-2 min-h-[44px] ${
                  activeFeature === feature.id
                    ? `bg-gradient-to-br ${feature.color} text-white shadow-lg scale-105`
                    : "bg-gray-800/50 hover:bg-gray-800 text-gray-300"
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                    activeFeature === feature.id
                      ? "bg-white/20"
                      : `bg-gradient-to-br ${feature.color} bg-opacity-10`
                  }`}
                >
                  {feature.icon}
                </div>
                <span className="font-medium text-xs sm:text-sm">
                  {feature.name}
                </span>
              </button>
            ))}
          </div>

          {/* Feature details */}
          <motion.div
            key={selectedFeature.id}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeInVariants}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden relative mobile-card"
          >
            <div
              className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r rounded-t-2xl opacity-40"
              style={{
                backgroundImage: `linear-gradient(to right, ${selectedFeature.color
                  .replace("from-", "")
                  .replace(" to-", ", ")})`,
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${selectedFeature.color} mb-6`}
                >
                  {selectedFeature.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  {selectedFeature.name}
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  {selectedFeature.description}
                </p>

                <ul className="space-y-3">
                  {selectedFeature.details.map((detail, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.3 }}
                      className="flex items-start"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center mt-1 mr-3`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-black/40 rounded-xl p-4 border border-gray-800 h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
                {/* Feature Visualization Placeholder */}
                <div
                  className="absolute inset-0 opacity-30 bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${selectedFeature.color
                      .replace("from-", "")
                      .replace(" to-", ", ")})`,
                  }}
                />

                <div className="relative z-10 text-center p-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${selectedFeature.color} flex items-center justify-center mb-4`}
                  >
                    {selectedFeature.icon}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">
                    {selectedFeature.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    Interactive demo available in product walkthrough
                  </div>

                  <Link
                    href={selectedFeature.url}
                    className="mt-6 px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white text-sm inline-block"
                  >
                    See in action
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
