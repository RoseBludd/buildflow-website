"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
  FiFileText,
  FiDollarSign,
  FiTarget,
  FiEdit3,
  FiCloudRain,
  FiSearch,
  FiMap,
  FiVideo,
  FiMail,
  FiShield,
  FiSettings,
  FiTrendingUp,
  FiCalendar,
  FiUsers as FiTeam,
  FiSmartphone,
  FiCloud,
  FiCamera,
  FiHeadphones,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

export default function FeaturesPage() {
  const featureCategories = [
    {
      id: "lead-generation",
      title: "Lead Generation & Acquisition",
      description:
        "Identify, track, and convert leads with AI-powered automation",
      icon: <FiTarget className="w-8 h-8" />,
      color: "from-blue-600 to-blue-400",
      features: [
        {
          name: "Storm Lead Engine",
          description:
            "Automatically identify leads in storm-affected areas using AI damage detection",
          icon: <FiUsers className="w-6 h-6" />,
          link: "/features/storm-lead-engine",
        },
        {
          name: "AI Voice Calling System",
          description:
            "Automated outreach with realistic AI voices for lead qualification",
          icon: <FiPhone className="w-6 h-6" />,
          link: "/features/ai-voice-calling",
        },
        {
          name: "Property Contact Finder",
          description: "Automatically find property owner contact information",
          icon: <FiSearch className="w-6 h-6" />,
          link: "/features/property-contact-finder",
        },
        {
          name: "Storm Tracking",
          description:
            "Real-time storm monitoring and lead generation from weather events",
          icon: <FiCloudRain className="w-6 h-6" />,
          link: "/features/storm-tracking",
        },
      ],
    },
    {
      id: "sales-management",
      title: "Sales & Pipeline Management",
      description:
        "Convert leads to customers with streamlined sales processes",
      icon: <FiBarChart2 className="w-8 h-8" />,
      color: "from-purple-600 to-purple-400",
      features: [
        {
          name: "Sales Pipeline",
          description:
            "Visual pipeline management with automated follow-up sequences",
          icon: <FiBarChart2 className="w-6 h-6" />,
          link: "/features/sales-pipeline",
        },
        {
          name: "Campaign Management",
          description:
            "Multi-channel marketing campaigns with automated storm response",
          icon: <FiTarget className="w-6 h-6" />,
          link: "/features/campaign-management",
        },
        {
          name: "AI Estimator",
          description: "Intelligent cost estimation and proposal generation",
          icon: <FiDollarSign className="w-6 h-6" />,
          link: "/features/ai-estimator",
        },
        {
          name: "Document Management",
          description: "Create, send, sign, and track all sales documents",
          icon: <FiFileText className="w-6 h-6" />,
          link: "/features/document-management",
        },
      ],
    },
    {
      id: "communication",
      title: "Communication & Collaboration",
      description: "Keep teams and customers connected throughout projects",
      icon: <FiMessageSquare className="w-8 h-8" />,
      color: "from-green-600 to-green-400",
      features: [
        {
          name: "Unified Messaging",
          description: "SMS, email, and in-app messaging in one platform",
          icon: <FiMessageSquare className="w-6 h-6" />,
          link: "/features/unified-messaging",
        },
        {
          name: "Customer Portal",
          description: "Self-service portal for project tracking and payments",
          icon: <FiAward className="w-6 h-6" />,
          link: "/features/customer-portal",
        },
        {
          name: "Team Collaboration",
          description: "Internal messaging with job tagging and notifications",
          icon: <FiTeam className="w-6 h-6" />,
          link: "/features/team-collaboration",
        },
      ],
    },
    {
      id: "field-operations",
      title: "Field Operations & Inspections",
      description: "Streamline field work with mobile-first tools",
      icon: <FiMap className="w-8 h-8" />,
      color: "from-yellow-600 to-yellow-400",
      features: [
        {
          name: "Field Inspector App",
          description: "Mobile property inspection with photo documentation",
          icon: <FiCamera className="w-6 h-6" />,
          link: "/features/field-inspector",
        },
        {
          name: "Image Analyzer",
          description: "AI-powered damage detection and material estimation",
          icon: <FiImage className="w-6 h-6" />,
          link: "/features/image-analyzer",
        },
        {
          name: "GPS Time Tracking",
          description: "Location-verified time tracking for field workers",
          icon: <FiClock className="w-6 h-6" />,
          link: "/features/gps-time-tracking",
        },
      ],
    },
    {
      id: "project-management",
      title: "Project & Job Management",
      description:
        "Manage projects from start to finish with complete oversight",
      icon: <FiBriefcase className="w-8 h-8" />,
      color: "from-red-600 to-red-400",
      features: [
        {
          name: "Job Management",
          description: "End-to-end job management with scheduling and tracking",
          icon: <FiBriefcase className="w-6 h-6" />,
          link: "/features/job-management",
        },
        {
          name: "Change Orders System",
          description: "Streamlined change order management with approvals",
          icon: <FiEdit3 className="w-6 h-6" />,
          link: "/features/change-orders",
        },
        {
          name: "Vendor Management",
          description:
            "Subcontractor scheduling, payments, and performance tracking",
          icon: <FiTruck className="w-6 h-6" />,
          link: "/features/vendor-management",
        },
      ],
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Business Intelligence",
      description: "Data-driven insights for better decision making",
      icon: <FiDatabase className="w-8 h-8" />,
      color: "from-indigo-600 to-indigo-400",
      features: [
        {
          name: "AI Dashboard Notifier",
          description: "Natural language reporting with automated delivery",
          icon: <FiDatabase className="w-6 h-6" />,
          link: "/features/dashboard-notifier",
        },
        {
          name: "Performance Analytics",
          description: "Comprehensive business metrics and KPI tracking",
          icon: <FiTrendingUp className="w-6 h-6" />,
          link: "/features/performance-analytics",
        },
      ],
    },
  ];

  const fadeInVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Complete </span>
              <span className="gradient-text primary-gradient">BuildFlow</span>
              <span className="text-white"> Features</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Everything your storm restoration company needs in one powerful
              platform. Replace dozens of tools with BuildFlow's integrated
              AI-powered system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#features" className="btn btn-primary">
                Explore Features
              </Link>
              <Link href="/demo" className="btn btn-secondary">
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Six Pillars of Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              BuildFlow organizes all your business needs into six comprehensive
              categories, each designed to work seamlessly with the others.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featureCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.features.map((feature, featureIndex) => (
                    <Link
                      key={featureIndex}
                      href={feature.link}
                      className="group p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {feature.name}
                          </h4>
                          <p className="text-gray-400 text-sm">
                            {feature.description}
                          </p>
                        </div>
                        <FiArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Built for </span>
              <span className="gradient-text primary-gradient">
                Integration
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              BuildFlow seamlessly integrates with your existing CRM, project
              management, accounting, and communication tools. Replace scattered
              systems with one unified platform that works with what you already
              have.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                {
                  name: "CRM Systems",
                  description: "Salesforce, HubSpot, Pipedrive",
                },
                { name: "Project Tools", description: "Monday, Asana, Trello" },
                { name: "Accounting", description: "QuickBooks, Xero, Sage" },
                { name: "Communication", description: "Twilio, Slack, Teams" },
              ].map((integration, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-3 flex items-center justify-center">
                    <FiCheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-1">
                    {integration.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of storm restoration companies already using
                BuildFlow to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  Schedule Demo
                </Link>
                <Link href="/pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
