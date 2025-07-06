"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiPhone,
  FiUsers,
  FiTrendingUp,
  FiClock,
  FiMic,
  FiSettings,
  FiTarget,
  FiBarChart3,
  FiPlayCircle,
  FiCheckCircle,
  FiArrowRight,
  FiHeadphones,
  FiMessageSquare,
  FiCalendar,
  FiCloud,
} from "react-icons/fi";

export default function AIVoiceCallingPage() {
  const features = [
    {
      icon: <FiMic className="w-8 h-8" />,
      title: "AI Voice Generation",
      description:
        "Realistic human-like voices using ElevenLabs technology for natural conversations",
      details: [
        "Multiple voice personas and accents",
        "Emotion and tone adjustment",
        "Real-time speech generation",
        "Natural conversation flow",
      ],
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Automated Call Management",
      description:
        "Handle thousands of calls simultaneously with intelligent routing and tracking",
      details: [
        "Mass outbound calling campaigns",
        "Smart call scheduling by time zones",
        "Voicemail detection and handling",
        "Call status tracking and analytics",
      ],
    },
    {
      icon: <FiMessageSquare className="w-8 h-8" />,
      title: "Dynamic Script Generation",
      description:
        "AI-powered scripts that adapt to property context and conversation flow",
      details: [
        "Property-specific talking points",
        "Objection handling responses",
        "Context-aware conversations",
        "Script optimization based on outcomes",
      ],
    },
    {
      icon: <FiTarget className="w-8 h-8" />,
      title: "Lead Qualification",
      description:
        "Automatically qualify leads and schedule appointments with interested prospects",
      details: [
        "Qualifying question workflows",
        "Automatic appointment scheduling",
        "Lead scoring and prioritization",
        "CRM integration and follow-up",
      ],
    },
    {
      icon: <FiBarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      description:
        "Comprehensive call analytics and performance optimization insights",
      details: [
        "Call completion rates",
        "Conversation quality metrics",
        "Lead conversion tracking",
        "ROI and cost analysis",
      ],
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Storm Response Automation",
      description:
        "Automatically trigger calls based on storm age and property priority",
      details: [
        "Weather event integration",
        "Storm-based call scheduling",
        "Priority-based calling sequences",
        "Automated follow-up campaigns",
      ],
    },
  ];

  const useCases = [
    {
      title: "Storm Response Outreach",
      description:
        "Immediately contact property owners in storm-affected areas",
      icon: <FiTarget className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Lead Qualification",
      description: "Qualify leads before sending sales teams for inspections",
      icon: <FiUsers className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Automatically schedule inspections with qualified prospects",
      icon: <FiCalendar className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Follow-up Campaigns",
      description: "Nurture leads with automated follow-up call sequences",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "from-orange-600 to-orange-400",
    },
  ];

  const stats = [
    {
      label: "Call Completion Rate",
      value: "94%",
      icon: <FiPhone className="w-5 h-5" />,
    },
    {
      label: "Average Call Duration",
      value: "2.3 min",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Lead Qualification",
      value: "87%",
      icon: <FiTarget className="w-5 h-5" />,
    },
    {
      label: "Appointment Booking",
      value: "31%",
      icon: <FiCalendar className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-emerald-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 mb-8">
                <FiPhone className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">AI </span>
                <span className="gradient-text from-emerald-400 to-emerald-600">
                  Voice Calling
                </span>
                <span className="text-white"> System</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your lead outreach with AI-powered voice calling
                that sounds completely human. Scale your sales efforts with
                automated calls that qualify leads, schedule appointments, and
                nurture prospects 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/demo" className="btn btn-primary">
                  <FiPlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <FiHeadphones className="w-5 h-5 mr-2" />
                  Hear Sample Call
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 mb-4">
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
              Powerful AI Calling Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI calling system combines advanced voice technology with
              intelligent automation to deliver human-like conversations at
              scale.
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 mt-1 mr-2 flex-shrink-0" />
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
              Designed specifically for the unique needs of storm restoration
              companies, our AI calling system helps you reach more prospects
              faster.
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
              Our AI calling system integrates seamlessly with your existing
              workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Upload Lead Lists",
                description:
                  "Import your leads from Monday.com, CSV files, or our Storm Lead Engine",
                icon: <FiUsers className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "AI Makes Calls",
                description:
                  "Our AI voice agents call prospects with personalized scripts and natural conversation",
                icon: <FiPhone className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Qualified Leads",
                description:
                  "Receive qualified leads with appointments scheduled directly in your calendar",
                icon: <FiTarget className="w-6 h-6" />,
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-emerald-400 font-bold mb-2">
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
      <section className="py-24 bg-gradient-to-r from-emerald-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Scale Your Outreach?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join storm restoration companies using AI voice calling to reach
              more prospects, qualify leads faster, and book more appointments.
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
