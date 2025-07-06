"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiCamera,
  FiMapPin,
  FiSmartphone,
  FiUsers,
  FiClipboard,
  FiWifi,
  FiCloud,
  FiCheckCircle,
  FiPlayCircle,
  FiArrowRight,
  FiNavigation,
  FiFileText,
  FiHome,
  FiTarget,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";

export default function FieldInspectorPage() {
  const features = [
    {
      icon: <FiCamera className="w-8 h-8" />,
      title: "Photo & Video Documentation",
      description:
        "Capture high-quality photos and videos with automatic metadata and GPS tagging",
      details: [
        "HD photo and video capture",
        "Automatic GPS and timestamp tagging",
        "Multiple file format support",
        "Cloud sync and storage",
      ],
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "GPS Location Services",
      description:
        "Precise location tracking with property mapping and pin dropping capabilities",
      details: [
        "Real-time GPS coordinates",
        "Property boundary mapping",
        "Pin dropping for specific damage",
        "Google Maps integration",
      ],
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Contact Information Collection",
      description:
        "Gather and organize property owner and contact details efficiently",
      details: [
        "Owner contact forms",
        "Insurance information capture",
        "Emergency contact details",
        "Digital signature collection",
      ],
    },
    {
      icon: <FiWifi className="w-8 h-8" />,
      title: "Offline Capabilities",
      description:
        "Work without internet connection with automatic sync when connected",
      details: [
        "Complete offline functionality",
        "Local data storage",
        "Automatic sync when online",
        "No data loss protection",
      ],
    },
    {
      icon: <FiClipboard className="w-8 h-8" />,
      title: "Inspection Reports",
      description:
        "Generate comprehensive inspection reports with photos, notes, and recommendations",
      details: [
        "Customizable report templates",
        "Photo integration",
        "Voice-to-text notes",
        "PDF export capabilities",
      ],
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Progress Tracking",
      description:
        "Monitor inspection progress with submission lists and search functionality",
      details: [
        "Inspection status tracking",
        "Search and filter capabilities",
        "Progress analytics",
        "Team performance metrics",
      ],
    },
  ];

  const workflow = [
    {
      title: "Property Assessment",
      description: "Document property damage with photos and detailed notes",
      icon: <FiHome className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "GPS Mapping",
      description: "Pin exact damage locations with GPS coordinates",
      icon: <FiMapPin className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Contact Collection",
      description: "Gather owner information and insurance details",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Report Generation",
      description: "Create comprehensive inspection reports instantly",
      icon: <FiFileText className="w-6 h-6" />,
      color: "from-orange-600 to-orange-400",
    },
  ];

  const stats = [
    {
      label: "Average Inspection Time",
      value: "12 min",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Photo Quality",
      value: "12MP",
      icon: <FiCamera className="w-5 h-5" />,
    },
    {
      label: "GPS Accuracy",
      value: "±3 meters",
      icon: <FiMapPin className="w-5 h-5" />,
    },
    {
      label: "Offline Storage",
      value: "1000+",
      icon: <FiCloud className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-400 mb-8">
                <FiCamera className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Field </span>
                <span className="gradient-text from-cyan-400 to-cyan-600">
                  Inspector
                </span>
                <span className="text-white"> App</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Mobile-first property inspection platform for disaster recovery
                and damage assessment. Document damage, collect owner
                information, and generate reports - all from your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiSmartphone className="w-5 h-5 mr-2" />
                  Try Mobile App
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-400 mb-4">
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
              Complete Field Inspection Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for professional property inspections in one
              mobile app
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
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
              Streamlined Inspection Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow our proven 4-step process for consistent, professional
              inspections
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflow.map((step, index) => (
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
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
              Why Choose Our Field Inspector?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we compare to other inspection tools like CompanyCam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FiTarget className="w-6 h-6 mr-2 text-red-400" />
                Traditional Tools
              </h3>
              <ul className="space-y-3">
                {[
                  "Multiple apps and platforms",
                  "Manual report generation",
                  "No GPS integration",
                  "Limited offline capabilities",
                  "Separate Monday.com setup",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FiCheckCircle className="w-6 h-6 mr-2 text-cyan-400" />
                BuildFlow Field Inspector
              </h3>
              <ul className="space-y-3">
                {[
                  "All-in-one integrated platform",
                  "Automatic report generation",
                  "Built-in GPS and mapping",
                  "Complete offline functionality",
                  "Direct Monday.com integration",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheckCircle className="w-4 h-4 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
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
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technology for reliability and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mobile-First Design",
                description:
                  "Touch-optimized interface with 44px minimum button size",
                icon: <FiSmartphone className="w-8 h-8" />,
              },
              {
                title: "Progressive Web App",
                description:
                  "Works offline with automatic sync and native app feel",
                icon: <FiCloud className="w-8 h-8" />,
              },
              {
                title: "GPS Integration",
                description:
                  "Real GPS services with Google Maps direction integration",
                icon: <FiNavigation className="w-8 h-8" />,
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-cyan-400 mb-6">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Inspections?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join restoration companies using our Field Inspector app to
              document damage, collect owner information, and generate
              professional reports faster than ever.
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
