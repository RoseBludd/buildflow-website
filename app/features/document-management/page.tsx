"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiFileText,
  FiEdit3,
  FiSend,
  FiCheckCircle,
  FiEye,
  FiBarChart,
  FiClock,
  FiUsers,
  FiMail,
  FiPlayCircle,
  FiArrowRight,
  FiPenTool,
  FiFolder,
  FiTarget,
  FiShield,
} from "react-icons/fi";

export default function DocumentManagementPage() {
  const features = [
    {
      icon: <FiEdit3 className="w-8 h-8" />,
      title: "Template Creator",
      description:
        "Create reusable document templates with custom fields for consistent documentation",
      details: [
        "Drag-and-drop template builder",
        "Custom field types and validation",
        "Brand customization options",
        "Template versioning and history",
      ],
    },
    {
      icon: <FiPenTool className="w-8 h-8" />,
      title: "Electronic Signatures",
      description:
        "Secure electronic signature capture with legal compliance and audit trails",
      details: [
        "Multi-party signature workflows",
        "Digital signature certificates",
        "Signature authentication",
        "Legal compliance tracking",
      ],
    },
    {
      icon: <FiSend className="w-8 h-8" />,
      title: "Document Sending",
      description:
        "Send documents via email, SMS, or direct links with delivery tracking",
      details: [
        "Multiple delivery channels",
        "Delivery confirmation",
        "Automated reminders",
        "Custom messaging",
      ],
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Progress Tracking",
      description:
        "Real-time document status monitoring with detailed progress analytics",
      details: [
        "Document status dashboards",
        "Completion tracking",
        "Bottleneck identification",
        "Performance metrics",
      ],
    },
    {
      icon: <FiBarChart className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description:
        "Comprehensive document performance analytics and usage insights",
      details: [
        "Document performance metrics",
        "Usage analytics",
        "Completion rates",
        "Time-to-completion tracking",
      ],
    },
    {
      icon: <FiFolder className="w-8 h-8" />,
      title: "Document Explorer",
      description:
        "Advanced document search, filtering, and organization capabilities",
      details: [
        "Advanced search functionality",
        "Document categorization",
        "Bulk operations",
        "Version control",
      ],
    },
  ];

  const documentTypes = [
    {
      title: "Work Authorization",
      description:
        "Digital work authorization forms with electronic signatures",
      icon: <FiCheckCircle className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Insurance Claims",
      description: "Streamlined insurance claim documentation and submission",
      icon: <FiShield className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Estimate Proposals",
      description: "Professional estimate proposals with terms and conditions",
      icon: <FiFileText className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Change Orders",
      description: "Digital change order forms with cost breakdowns",
      icon: <FiEdit3 className="w-6 h-6" />,
      color: "from-orange-600 to-orange-400",
    },
  ];

  const stats = [
    {
      label: "Document Templates",
      value: "50+",
      icon: <FiFileText className="w-5 h-5" />,
    },
    {
      label: "Average Processing Time",
      value: "2.5 days",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Signature Completion",
      value: "96%",
      icon: <FiPenTool className="w-5 h-5" />,
    },
    {
      label: "Document Delivery",
      value: "99.8%",
      icon: <FiSend className="w-5 h-5" />,
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Create Template",
      description: "Build reusable document templates with custom fields",
      icon: <FiEdit3 className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Generate Document",
      description: "Create documents from templates with auto-filled data",
      icon: <FiFileText className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Send for Signing",
      description: "Deliver documents via email, SMS, or direct links",
      icon: <FiSend className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Track Progress",
      description: "Monitor document status and completion in real-time",
      icon: <FiEye className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-slate-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 mb-8">
                <FiFileText className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Document </span>
                <span className="gradient-text from-slate-400 to-slate-600">
                  Management
                </span>
                <span className="text-white"> System</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete document lifecycle management for storm restoration
                companies. Create, send, sign, and track all business documents
                with automated workflows and digital signatures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiFileText className="w-5 h-5 mr-2" />
                  Try Templates
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 mb-4">
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
              Complete Document Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your entire document process from creation to
              completion
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-slate-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-slate-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
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
              Pre-Built Document Templates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional templates designed specifically for storm restoration
              companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentTypes.map((type, index) => (
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
              Simple Document Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From template creation to final signature in just 4 steps
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-slate-400 font-bold mb-2">
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

      {/* Benefits Section */}
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
              Why Choose Digital Documents?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your document process with modern digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Save Time",
                description:
                  "Reduce document processing time by 75% with automated workflows",
                icon: <FiClock className="w-8 h-8" />,
                color: "from-green-600 to-green-400",
              },
              {
                title: "Reduce Errors",
                description:
                  "Eliminate manual data entry errors with pre-filled templates",
                icon: <FiTarget className="w-8 h-8" />,
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Improve Compliance",
                description:
                  "Ensure legal compliance with audit trails and secure signatures",
                icon: <FiShield className="w-8 h-8" />,
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
              Connect with your existing tools and workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Monday.com",
                description: "Project data sync",
                icon: <FiTarget className="w-6 h-6" />,
              },
              {
                name: "Email & SMS",
                description: "Document delivery",
                icon: <FiMail className="w-6 h-6" />,
              },
              {
                name: "CRM Systems",
                description: "Customer data sync",
                icon: <FiUsers className="w-6 h-6" />,
              },
              {
                name: "Cloud Storage",
                description: "Secure document storage",
                icon: <FiFolder className="w-6 h-6" />,
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 mb-4">
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
      <section className="py-24 bg-gradient-to-r from-slate-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Paperless?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join restoration companies using digital document management to
              streamline workflows, reduce errors, and improve customer
              satisfaction.
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
