"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiEdit3,
  FiCheckCircle,
  FiDollarSign,
  FiClock,
  FiUser,
  FiFileText,
  FiTrendingUp,
  FiAlertCircle,
  FiPlayCircle,
  FiArrowRight,
  FiMail,
  FiDatabase,
} from "react-icons/fi";

export default function ChangeOrdersPage() {
  const features = [
    {
      icon: <FiEdit3 className="w-8 h-8" />,
      title: "Digital Change Order Forms",
      description:
        "Create professional change orders with pre-built templates and automated calculations",
      details: [
        "Customizable change order templates",
        "Automated cost calculations",
        "Photo and document attachments",
        "Digital signature capabilities",
      ],
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Approval Workflows",
      description:
        "Streamlined approval process with automated routing and notifications",
      details: [
        "Multi-level approval chains",
        "Automated approval routing",
        "Real-time status tracking",
        "Escalation procedures",
      ],
    },
    {
      icon: <FiDollarSign className="w-8 h-8" />,
      title: "Cost Impact Analysis",
      description:
        "Automatically calculate cost impacts and update project budgets",
      details: [
        "Real-time cost calculations",
        "Budget impact analysis",
        "Margin tracking and alerts",
        "Historical cost comparisons",
      ],
    },
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Customer Communication",
      description:
        "Keep customers informed with automated notifications and updates",
      details: [
        "Automated email notifications",
        "SMS status updates",
        "Customer portal access",
        "Branded communication templates",
      ],
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Integration & Tracking",
      description:
        "Seamlessly integrate with your existing systems and track everything",
      details: [
        "CRM and project management sync",
        "Accounting system integration",
        "Detailed audit trails",
        "Performance analytics",
      ],
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive reporting on change orders and profitability",
      details: [
        "Change order frequency analysis",
        "Profit margin tracking",
        "Customer approval rates",
        "Team performance metrics",
      ],
    },
  ];

  const workflows = [
    {
      title: "Storm Damage Assessments",
      description: "Additional damage discovered during storm restoration work",
      icon: <FiAlertCircle className="w-6 h-6" />,
      color: "from-red-600 to-red-400",
    },
    {
      title: "Scope Expansions",
      description: "Customer requests for additional work or upgrades",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Material Upgrades",
      description: "Higher quality materials or alternative specifications",
      icon: <FiEdit3 className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Code Compliance",
      description: "Required updates to meet current building codes",
      icon: <FiCheckCircle className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
  ];

  const stats = [
    {
      label: "Average Approval Time",
      value: "2.3 days",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Customer Satisfaction",
      value: "96%",
      icon: <FiUser className="w-5 h-5" />,
    },
    {
      label: "Profit Margin Increase",
      value: "18%",
      icon: <FiDollarSign className="w-5 h-5" />,
    },
    {
      label: "Process Efficiency",
      value: "75%",
      icon: <FiTrendingUp className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 mb-8">
                <FiEdit3 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Change </span>
                <span className="gradient-text from-violet-400 to-violet-600">
                  Orders
                </span>
                <span className="text-white"> System</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your change order process with digital forms,
                automated approvals, and real-time cost tracking. Turn
                inevitable project changes into profitable opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiFileText className="w-5 h-5 mr-2" />
                  See Templates
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 mb-4">
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
              Complete Change Order Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial discovery to final approval, manage every aspect of
              your change orders with professional digital workflows.
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-violet-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Workflows Section */}
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
              Common Change Order Scenarios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our system handles the most common change order situations in
              storm restoration and construction projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workflows.map((workflow, index) => (
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${workflow.color} flex items-center justify-center`}
                  >
                    {workflow.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {workflow.title}
                  </h3>
                </div>
                <p className="text-gray-300">{workflow.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, efficient process that keeps everyone informed and
              projects on track
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Document Changes",
                description:
                  "Create digital change orders with photos, descriptions, and cost estimates",
                icon: <FiFileText className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Customer Review",
                description:
                  "Customers receive notifications and can review/approve via portal",
                icon: <FiUser className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Automated Approval",
                description:
                  "System routes for approvals and tracks status in real-time",
                icon: <FiCheckCircle className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Execute & Track",
                description:
                  "Approved changes update project budgets and schedules automatically",
                icon: <FiTrendingUp className="w-6 h-6" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-violet-400 font-bold mb-2">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-violet-900/20 to-indigo-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Streamline Your Change Orders?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join storm restoration companies using our digital change order
              system to improve customer satisfaction and increase
              profitability.
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
