"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageSquare,
  FiCalendar,
  FiArrowRight,
  FiCheckCircle,
  FiUser,
  FiSettings,
} from "react-icons/fi";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FiMail className="w-8 h-8" />,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      contact: "hello@buildflow.com",
      action: "Send Email",
      href: "mailto:hello@buildflow.com",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: <FiPhone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "(555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567",
      color: "from-green-600 to-green-400",
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Schedule Demo",
      description: "Book a personalized demo of BuildFlow",
      contact: "15-30 minute demo",
      action: "Book Demo",
      href: "/demo",
      color: "from-purple-600 to-purple-400",
    },
  ];

  const reasons = [
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: "Product Demo",
      description: "See BuildFlow in action with your specific use case",
    },
    {
      icon: <FiSettings className="w-6 h-6" />,
      title: "Enterprise Solutions",
      description: "Discuss custom enterprise features and integrations",
    },
    {
      icon: <FiUser className="w-6 h-6" />,
      title: "Implementation Support",
      description: "Get help setting up and onboarding your team",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Technical Questions",
      description:
        "Ask about specific features, integrations, and capabilities",
    },
  ];

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
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-8">
                <FiMessageSquare className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Get in </span>
                <span className="gradient-text from-blue-400 to-purple-600">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to revolutionize your storm restoration business?
                We&apos;re here to help you get started with BuildFlow and
                answer any questions you have.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${method.color} mb-6`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <div className="text-gray-400 mb-6">{method.contact}</div>
                <Link
                  href={method.href}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-200 group"
                >
                  {method.action}
                  <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
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
              Why Contact Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re here to help you succeed. Here are some reasons to get
              in touch:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Business Hours
              </h2>
              <p className="text-xl text-gray-300">
                We&apos;re here when you need us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiClock className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">
                    Support Hours
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">8:00 AM - 6:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">9:00 AM - 2:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiMapPin className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Location</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-gray-300">Dallas, Texas</div>
                  <div className="text-gray-400">
                    Serving storm restoration companies nationwide
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The fastest way to see if BuildFlow is right for your business is
              to schedule a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn btn-primary">
                <FiCalendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                <FiArrowRight className="w-5 h-5 mr-2" />
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
