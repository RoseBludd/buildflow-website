"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiHeart,
  FiHome,
  FiTool,
  FiCpu,
  FiZap,
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiClock,
  FiShield,
} from "react-icons/fi";

export default function AboutPage() {
  const stats = [
    {
      label: "Years in Roofing",
      value: "15+",
      icon: <FiHome className="w-5 h-5" />,
    },
    {
      label: "Projects Completed",
      value: "10,000+",
      icon: <FiTarget className="w-5 h-5" />,
    },
    {
      label: "Companies Served",
      value: "500+",
      icon: <FiUsers className="w-5 h-5" />,
    },
    {
      label: "Time Saved",
      value: "40 hrs/week",
      icon: <FiClock className="w-5 h-5" />,
    },
  ];

  const values = [
    {
      icon: <FiHeart className="w-8 h-8" />,
      title: "Built by Roofers",
      description:
        "We understand your pain points because we&apos;ve lived them. Every feature is designed by someone who&apos;s been on the roof, dealt with insurance claims, and managed crews.",
      color: "from-red-600 to-red-400",
    },
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description:
        "We combine industry expertise with cutting-edge AI technology to create solutions that actually work for real contractors in the field.",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: "Industry-First Innovation",
      description:
        "We don&apos;t just digitize old processes - we reimagine how storm restoration should work with modern technology and automation.",
      color: "from-green-600 to-green-400",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Proven Results",
      description:
        "Our platform has helped contractors increase revenue by 245% while reducing administrative time by 75% through intelligent automation.",
      color: "from-purple-600 to-purple-400",
    },
  ];

  const timeline = [
    {
      year: "2018",
      title: "The Problem",
      description:
        "Started as a roofing contractor frustrated with disconnected, generic software that didn&apos;t understand our industry.",
    },
    {
      year: "2020",
      title: "The Vision",
      description:
        "Began developing custom solutions to solve real problems we faced daily - from storm tracking to lead management.",
    },
    {
      year: "2022",
      title: "The Platform",
      description:
        "Launched BuildFlow with AI-powered features designed specifically for storm restoration companies.",
    },
    {
      year: "2024",
      title: "The Revolution",
      description:
        "Now serving 500+ restoration companies with the most advanced AI-driven platform in the industry.",
    },
  ];

  const team = [
    {
      name: "Founded by Industry Veterans",
      role: "15+ Years Roofing Experience",
      description:
        "Our founders have installed thousands of roofs, dealt with insurance adjusters, and built successful restoration companies.",
      icon: <FiHome className="w-6 h-6" />,
    },
    {
      name: "AI & Technology Experts",
      role: "Cutting-Edge Innovation",
      description:
        "Our tech team combines deep industry knowledge with advanced AI, machine learning, and modern software architecture.",
      icon: <FiCpu className="w-6 h-6" />,
    },
    {
      name: "Customer Success Team",
      role: "Your Success Partners",
      description:
        "Former contractors and industry professionals who understand your challenges and help you maximize your ROI.",
      icon: <FiAward className="w-6 h-6" />,
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
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-purple-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Made by </span>
              <span className="gradient-text primary-gradient">Roofers</span>
              <span className="text-white"> for Roofers</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We&apos;re not another software company trying to understand your
              business. We ARE your business. BuildFlow was born from 15+ years
              of roofing experience combined with a modern AI tech-savvy
              approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn btn-primary">
                <FiStar className="w-5 h-5 mr-2" />
                See Our Story
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <FiArrowRight className="w-5 h-5 mr-2" />
                Meet the Team
              </Link>
            </div>
          </motion.div>
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
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

      {/* Values Section */}
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
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep industry expertise with cutting-edge technology to
              create solutions that actually solve real problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mb-6`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From frustrated contractors to industry-leading innovators
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6">
                      <div className="text-blue-400 font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full border-4 border-black"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              The Team Behind BuildFlow
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry veterans and technology experts working together to
              revolutionize how restoration companies operate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-300">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              To empower every storm restoration company with AI-driven tools
              that eliminate busywork, increase profitability, and let
              contractors focus on what they do best - helping communities
              recover and rebuilding homes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <FiTrendingUp className="w-8 h-8" />,
                  title: "Increase Revenue",
                  description:
                    "Help contractors grow their business with better lead generation and automation",
                },
                {
                  icon: <FiShield className="w-8 h-8" />,
                  title: "Reduce Risk",
                  description:
                    "Minimize errors and compliance issues with intelligent automation",
                },
                {
                  icon: <FiHeart className="w-8 h-8" />,
                  title: "Restore Communities",
                  description:
                    "Enable faster, better restoration work to help families get back home",
                },
              ].map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4">
                    {goal.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-400">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the growing community of restoration contractors who trust
              BuildFlow to power their operations and grow their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn btn-primary">
                <FiCheckCircle className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <FiArrowRight className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
