"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiCloudRain,
  FiMapPin,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiAlertTriangle,
  FiCheckCircle,
  FiPlayCircle,
  FiArrowRight,
  FiEye,
  FiHome,
  FiClock,
  FiActivity,
  FiDatabase,
  FiSend,
} from "react-icons/fi";

export default function StormTrackingPage() {
  const features = [
    {
      icon: <FiCloudRain className="w-8 h-8" />,
      title: "Real-time Storm Tracking",
      description:
        "Monitor live weather events, hail storms, and severe weather patterns across your coverage area",
      details: [
        "Live weather data integration",
        "Hail event detection",
        "Storm path tracking",
        "Severity assessment",
      ],
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Convective Outlook",
      description:
        "Visualize storm predictions and convective outlook for proactive planning",
      details: [
        "Storm prediction models",
        "Convective outlook visualization",
        "Risk level mapping",
        "Forecast accuracy tracking",
      ],
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "Geographic Analysis",
      description:
        "Identify affected areas with precise mapping and property impact assessment",
      details: [
        "Interactive storm maps",
        "Property impact zones",
        "Damage radius estimation",
        "Geographic boundary tools",
      ],
    },
    {
      icon: <FiHome className="w-8 h-8" />,
      title: "Commercial Risk Assessment",
      description:
        "Assess commercial building risks and identify high-value opportunities",
      details: [
        "Commercial property identification",
        "Risk score calculation",
        "Building value estimation",
        "Priority ranking system",
      ],
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Lead Generation",
      description:
        "Automatically generate qualified leads from storm-affected properties",
      details: [
        "Automated lead creation",
        "Property owner identification",
        "Contact information lookup",
        "Lead scoring algorithms",
      ],
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Historical Data Analysis",
      description:
        "Analyze historical storm patterns and damage trends for better planning",
      details: [
        "Historical storm database",
        "Pattern recognition",
        "Seasonal trend analysis",
        "Damage correlation data",
      ],
    },
  ];

  const stormTypes = [
    {
      title: "Hail Events",
      description: "Track hail size, intensity, and impact areas",
      icon: <FiCloudRain className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "High Winds",
      description: "Monitor wind speeds and structural damage potential",
      icon: <FiActivity className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Tornadoes",
      description: "Track tornado paths and damage assessment",
      icon: <FiTarget className="w-6 h-6" />,
      color: "from-red-600 to-red-400",
    },
    {
      title: "Severe Thunderstorms",
      description: "Monitor complex storm systems and their impacts",
      icon: <FiAlertTriangle className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
  ];

  const stats = [
    {
      label: "Storm Events Tracked",
      value: "15,000+",
      icon: <FiCloudRain className="w-5 h-5" />,
    },
    {
      label: "Properties Analyzed",
      value: "2.3M",
      icon: <FiHome className="w-5 h-5" />,
    },
    {
      label: "Lead Accuracy",
      value: "94%",
      icon: <FiTarget className="w-5 h-5" />,
    },
    {
      label: "Response Time",
      value: "< 2 hours",
      icon: <FiClock className="w-5 h-5" />,
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Storm Detection",
      description:
        "Monitor weather patterns and detect storm events in real-time",
      icon: <FiCloudRain className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Impact Analysis",
      description:
        "Analyze affected areas and assess property damage potential",
      icon: <FiMapPin className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Lead Generation",
      description: "Automatically identify and qualify potential customers",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Campaign Launch",
      description: "Trigger marketing campaigns and sales outreach",
      icon: <FiSend className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-sky-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 mb-8">
                <FiCloudRain className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Storm </span>
                <span className="gradient-text from-sky-400 to-sky-600">
                  Tracking
                </span>
                <span className="text-white"> System</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-time storm monitoring and lead generation for restoration
                companies. Track weather events, analyze property damage, and
                automatically generate qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiCloudRain className="w-5 h-5 mr-2" />
                  Track Storms
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Storm Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track, analyze, and act on weather events with our advanced storm
              monitoring system
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-sky-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storm Types Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Track All Weather Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor various types of severe weather events that can damage
              properties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stormTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center`}
                  >
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automated Storm Response
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From storm detection to lead generation in real-time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-sky-400 font-bold mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and automate your storm response
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Google Maps",
                description: "Interactive mapping",
                icon: <FiMapPin className="w-6 h-6" />,
              },
              {
                name: "Weather APIs",
                description: "Real-time data",
                icon: <FiCloudRain className="w-6 h-6" />,
              },
              {
                name: "CRM Systems",
                description: "Lead management",
                icon: <FiUsers className="w-6 h-6" />,
              },
              {
                name: "Campaign Tools",
                description: "Marketing automation",
                icon: <FiSend className="w-6 h-6" />,
              },
            ].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-sky-600 to-sky-400 mb-4">
                  {integration.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Storm Tracking Matters
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the competitive edge with real-time storm intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "First to Market",
                description:
                  "Be the first to reach storm-affected properties with real-time alerts",
                icon: <FiClock className="w-8 h-8" />,
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Higher Conversion",
                description:
                  "Target the most promising leads with intelligent scoring",
                icon: <FiTrendingUp className="w-8 h-8" />,
                color: "from-green-600 to-green-400",
              },
              {
                title: "Better ROI",
                description:
                  "Focus resources on areas with highest damage potential",
                icon: <FiTarget className="w-8 h-8" />,
                color: "from-purple-600 to-purple-400",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-sky-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Track Your Next Storm?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join restoration companies using storm tracking to identify
              opportunities, generate leads, and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn btn-primary">
                <FiPlayCircle className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <Link href="/features" className="btn btn-secondary">
                <FiArrowRight className="w-5 h-5 mr-2" />
                View All Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
