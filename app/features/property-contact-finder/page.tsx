"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiSearch,
  FiPhone,
  FiMapPin,
  FiUsers,
  FiDownload,
  FiDollarSign,
  FiTarget,
  FiCheckCircle,
  FiPlayCircle,
  FiArrowRight,
  FiDatabase,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiFileText,
  FiHome,
} from "react-icons/fi";

export default function PropertyContactFinderPage() {
  const features = [
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "PropertyRadar Integration",
      description:
        "Direct integration with PropertyRadar API for comprehensive property owner data",
      details: [
        "Real-time property database access",
        "Comprehensive owner information",
        "Property value and details",
        "Historical ownership data",
      ],
    },
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: "Smart Address Parsing",
      description:
        "Robust address parsing supporting various formats and abbreviations",
      details: [
        "Multiple address formats",
        "State abbreviation handling",
        "Directional prefix support",
        "Address validation and cleanup",
      ],
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Cached Data Retrieval",
      description:
        "Intelligent fallback system for already-purchased data to minimize costs",
      details: [
        "Smart cache checking",
        "Cost optimization",
        "Alternative endpoint fallback",
        "Data freshness validation",
      ],
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Batch Processing",
      description:
        "Handle multiple addresses simultaneously with progress tracking",
      details: [
        "Bulk address upload",
        "Progress monitoring",
        "Error handling and retry",
        "Results aggregation",
      ],
    },
    {
      icon: <FiDownload className="w-8 h-8" />,
      title: "Export Capabilities",
      description: "Download results in multiple formats for further analysis",
      details: [
        "CSV export functionality",
        "Custom field selection",
        "Data formatting options",
        "Integration-ready exports",
      ],
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Cost Tracking",
      description:
        "Real-time monitoring of API usage costs and optimization suggestions",
      details: [
        "Live cost tracking",
        "Usage analytics",
        "Cost optimization alerts",
        "Budget management tools",
      ],
    },
  ];

  const useCases = [
    {
      title: "Storm Lead Generation",
      description: "Find property owners in storm-affected areas for outreach",
      icon: <FiTarget className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Sales Prospecting",
      description: "Identify property owners for direct marketing campaigns",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Customer Outreach",
      description: "Connect with existing customers for additional services",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Market Analysis",
      description: "Research property values and owner demographics",
      icon: <FiMapPin className="w-6 h-6" />,
      color: "from-orange-600 to-orange-400",
    },
  ];

  const stats = [
    {
      label: "Contact Success Rate",
      value: "87%",
      icon: <FiPhone className="w-5 h-5" />,
    },
    {
      label: "Average Search Time",
      value: "2.3 sec",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Property Database",
      value: "150M+",
      icon: <FiHome className="w-5 h-5" />,
    },
    {
      label: "Data Accuracy",
      value: "94%",
      icon: <FiCheckCircle className="w-5 h-5" />,
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Upload Addresses",
      description:
        "Import addresses from Monday.com, CSV files, or manual entry",
      icon: <FiFileText className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Smart Search",
      description: "System searches PropertyRadar database with fallback logic",
      icon: <FiSearch className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Find Contacts",
      description: "Retrieve property owner names, phone numbers, and emails",
      icon: <FiPhone className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Export Results",
      description: "Download contact lists for your outreach campaigns",
      icon: <FiDownload className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-rose-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-600 to-rose-400 mb-8">
                <FiSearch className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Property </span>
                <span className="gradient-text from-rose-400 to-rose-600">
                  Contact
                </span>
                <span className="text-white"> Finder</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Automatically find property owner contact information for
                targeted outreach. Connect with PropertyRadar&apos;s
                comprehensive database to find phone numbers and emails for any
                property address.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiSearch className="w-5 h-5 mr-2" />
                  Find Contacts
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 to-rose-400 mb-4">
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
              Powerful Contact Discovery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced features to find and verify property owner contact
              information
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-rose-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-rose-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Perfect for Storm Restoration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find property owners quickly for time-sensitive outreach
              opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center`}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
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
              Simple Contact Discovery
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From address to contact information in just 4 steps
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-600 to-rose-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-rose-400 font-bold mb-2">
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

      {/* Success Stories Section */}
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
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our contact finder performs with real property addresses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                address: "420 Se Broad St, Fairburn, GA 30213",
                result: "2 phone numbers found",
                success: true,
              },
              {
                address: "4210 Earnings Way, New Albany, IN 47150",
                result: "3 phone numbers found",
                success: true,
              },
              {
                address: "410 Williams, Maysville, OK 73057",
                result: "3 phone numbers found",
                success: true,
              },
            ].map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-white">Test Result</h3>
                  <div className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-400 text-sm">Success</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-400 text-sm">Address</div>
                    <div className="text-white">{example.address}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Result</div>
                    <div className="text-rose-400 font-semibold">
                      {example.result}
                    </div>
                  </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Works with your existing tools and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Monday.com",
                description: "Import addresses directly",
                icon: <FiTarget className="w-6 h-6" />,
              },
              {
                name: "CSV Files",
                description: "Bulk address upload",
                icon: <FiFileText className="w-6 h-6" />,
              },
              {
                name: "PropertyRadar",
                description: "Real-time data access",
                icon: <FiDatabase className="w-6 h-6" />,
              },
              {
                name: "CRM Export",
                description: "Ready for your sales tools",
                icon: <FiDownload className="w-6 h-6" />,
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-rose-600 to-rose-400 mb-4">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Next Customer?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stop searching manually. Let our Property Contact Finder
              automatically discover owner information for targeted outreach
              campaigns.
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
