"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiTarget,
  FiMail,
  FiMessageSquare,
  FiBarChart,
  FiCalendar,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiPlayCircle,
  FiArrowRight,
  FiCloudRain,
  FiMapPin,
  FiDollarSign,
  FiEye,
  FiSend,
  FiEdit3,
  FiAward,
} from "react-icons/fi";

export default function CampaignManagementPage() {
  const features = [
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Campaign Builder",
      description:
        "Visual drag-and-drop email creation with live preview and professional templates",
      details: [
        "Visual campaign builder",
        "Pre-built roofing templates",
        "Personalization engine",
        "Live preview and testing",
      ],
    },
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      title: "SMS Campaign System",
      description:
        "Compliant SMS marketing with conversation tracking and automated responses",
      details: [
        "TCPA compliance engine",
        "Conversation threading",
        "Template variables",
        "Delivery analytics",
      ],
    },
    {
      icon: <FiBarChart className="w-8 h-8" />,
      title: "A/B Testing Suite",
      description:
        "Statistical analysis with confidence intervals and automated winner selection",
      details: [
        "Multi-variant testing",
        "Statistical significance",
        "Automated optimization",
        "Performance tracking",
      ],
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Campaign Calendar",
      description:
        "Multi-view interface with weather integration and smart scheduling",
      details: [
        "Week, month, agenda views",
        "Weather integration",
        "Conflict detection",
        "Smart notifications",
      ],
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Audience Targeting",
      description:
        "Smart segmentation with geographic and behavioral targeting capabilities",
      details: [
        "Rule-based segmentation",
        "Dynamic list updates",
        "Geographic targeting",
        "Behavioral triggers",
      ],
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Advanced Analytics",
      description:
        "Performance dashboards with revenue attribution and predictive insights",
      details: [
        "Real-time metrics",
        "Revenue attribution",
        "Predictive analytics",
        "Custom reports",
      ],
    },
  ];

  const campaignTypes = [
    {
      title: "Storm Response",
      description: "Automated campaigns triggered by weather events",
      icon: <FiCloudRain className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Lead Nurturing",
      description: "Multi-touch sequences for lead conversion",
      icon: <FiTarget className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Customer Retention",
      description: "Keep existing customers engaged and loyal",
      icon: <FiAward className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Seasonal Promotions",
      description: "Time-based campaigns for seasonal services",
      icon: <FiCalendar className="w-6 h-6" />,
      color: "from-orange-600 to-orange-400",
    },
  ];

  const stats = [
    {
      label: "Campaign Templates",
      value: "25+",
      icon: <FiMail className="w-5 h-5" />,
    },
    {
      label: "Average Open Rate",
      value: "32%",
      icon: <FiEye className="w-5 h-5" />,
    },
    {
      label: "SMS Delivery Rate",
      value: "98.5%",
      icon: <FiMessageSquare className="w-5 h-5" />,
    },
    {
      label: "ROI Improvement",
      value: "245%",
      icon: <FiDollarSign className="w-5 h-5" />,
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Build Campaign",
      description: "Create email and SMS campaigns with visual builders",
      icon: <FiEdit3 className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Target Audience",
      description: "Segment your audience based on location and behavior",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Schedule & Send",
      description: "Schedule campaigns or trigger based on weather events",
      icon: <FiSend className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Track Performance",
      description: "Monitor results and optimize for better ROI",
      icon: <FiBarChart className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-orange-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 mb-8">
                <FiTarget className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Campaign </span>
                <span className="gradient-text from-orange-400 to-orange-600">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Multi-channel marketing campaigns with automated storm response
                and A/B testing. Reach more prospects, nurture leads, and drive
                conversions with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiTarget className="w-5 h-5 mr-2" />
                  Start Campaign
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 mb-4">
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
              Complete Marketing Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to run successful marketing campaigns for your
              restoration business
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-orange-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
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
              Campaign Types for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pre-built campaign templates designed for storm restoration
              companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campaignTypes.map((type, index) => (
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

      {/* Weather Integration Section */}
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
              Weather-Triggered Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automatically launch campaigns when storms hit your target areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Storm Detection",
                description:
                  "Monitor weather patterns and hail events in real-time",
                icon: <FiCloudRain className="w-8 h-8" />,
              },
              {
                title: "Auto-Launch",
                description:
                  "Automatically trigger campaigns when storms are detected",
                icon: <FiSend className="w-8 h-8" />,
              },
              {
                title: "Geographic Targeting",
                description: "Target specific areas affected by weather events",
                icon: <FiMapPin className="w-8 h-8" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
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
              Campaign Workflow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Launch successful campaigns in just 4 simple steps
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-orange-400 font-bold mb-2">
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

      {/* A/B Testing Section */}
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
              Advanced A/B Testing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Optimize your campaigns with statistical analysis and automated
              winner selection
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
              <h3 className="text-2xl font-bold text-white mb-6">
                Testing Features
              </h3>
              <div className="space-y-4">
                {[
                  "Multi-variant testing",
                  "Statistical significance",
                  "Confidence intervals",
                  "Automated winner selection",
                  "Performance tracking",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <FiCheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-orange-900/20 to-blue-900/20 border border-orange-500/50 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Campaign A</span>
                  <div className="text-right">
                    <div className="text-white font-bold">24.5%</div>
                    <div className="text-gray-400 text-sm">Open Rate</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Campaign B</span>
                  <div className="text-right">
                    <div className="text-orange-400 font-bold">31.8%</div>
                    <div className="text-gray-400 text-sm">Open Rate</div>
                  </div>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-3 mt-4">
                  <div className="text-orange-400 font-bold text-sm">
                    WINNER
                  </div>
                  <div className="text-white">
                    Campaign B wins with 95% confidence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join restoration companies using automated campaigns to reach more
              prospects, nurture leads, and drive revenue growth.
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
