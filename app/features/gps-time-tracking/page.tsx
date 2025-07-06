"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiClock,
  FiMapPin,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
  FiTarget,
  FiCheckCircle,
  FiPlayCircle,
  FiArrowRight,
  FiNavigation,
  FiLock,
  FiCalendar,
  FiDollarSign,
  FiEye,
  FiSettings,
} from "react-icons/fi";

export default function GPSTimeTrackingPage() {
  const features = [
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "GPS Geofencing",
      description:
        "50-foot radius validation ensures employees can only clock in when physically present at job sites",
      details: [
        "Customizable geofence radius per job site",
        "Instant location validation",
        "Prevents time fraud and buddy punching",
        "Automatic clock-out when leaving site",
      ],
    },
    {
      icon: <FiNavigation className="w-8 h-8" />,
      title: "Real-time Location Tracking",
      description:
        "Continuous GPS updates every 3 seconds for live employee location monitoring",
      details: [
        "Live location updates",
        "Movement tracking and routes",
        "Distance calculations",
        "Location history and analytics",
      ],
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description:
        "Responsive mobile app optimized for field workers with offline capabilities",
      details: [
        "Native mobile app experience",
        "Offline time tracking",
        "Touch-friendly interface",
        "Progressive web app (PWA)",
      ],
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Admin Dashboard",
      description:
        "Complete oversight with real-time monitoring, statistics, and override capabilities",
      details: [
        "Real-time employee tracking",
        "Time and attendance reports",
        "Manual override capabilities",
        "Payroll integration",
      ],
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Security & Compliance",
      description:
        "Advanced security features with audit trails and tamper detection",
      details: [
        "Encrypted data transmission",
        "Complete audit trails",
        "Device fingerprinting",
        "Anti-fraud protection",
      ],
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description:
        "Comprehensive time tracking analytics with automated reporting",
      details: [
        "Detailed time reports",
        "Productivity analytics",
        "Labor cost tracking",
        "Automated payroll reports",
      ],
    },
  ];

  const benefits = [
    {
      title: "Eliminate Time Fraud",
      description: "GPS verification prevents buddy punching and time theft",
      icon: <FiLock className="w-6 h-6" />,
      color: "from-red-600 to-red-400",
    },
    {
      title: "Increase Productivity",
      description: "Real-time tracking improves employee accountability",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "from-green-600 to-green-400",
    },
    {
      title: "Reduce Labor Costs",
      description: "Accurate time tracking reduces payroll errors",
      icon: <FiDollarSign className="w-6 h-6" />,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Improve Compliance",
      description: "Detailed audit trails for labor law compliance",
      icon: <FiShield className="w-6 h-6" />,
      color: "from-purple-600 to-purple-400",
    },
  ];

  const stats = [
    {
      label: "Location Accuracy",
      value: "±3 feet",
      icon: <FiMapPin className="w-5 h-5" />,
    },
    {
      label: "Update Frequency",
      value: "3 seconds",
      icon: <FiClock className="w-5 h-5" />,
    },
    {
      label: "Geofence Radius",
      value: "50 feet",
      icon: <FiTarget className="w-5 h-5" />,
    },
    {
      label: "Uptime",
      value: "99.9%",
      icon: <FiCheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-amber-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 mb-8">
                <FiClock className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">GPS </span>
                <span className="gradient-text from-amber-400 to-amber-600">
                  Time Tracking
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional time tracking system for contractors with GPS
                validation, real-time monitoring, and comprehensive admin
                controls. Ensure accurate time tracking with location
                verification.
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 mb-4">
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
              Advanced Time Tracking Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technology and security-first approach for
              professional contractors
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
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <FiCheckCircle className="w-4 h-4 text-amber-400 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
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
              Why Choose GPS Time Tracking?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your time tracking with location verification and
              real-time monitoring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center`}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
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
              How GPS Time Tracking Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, secure, and accurate time tracking for your field crews
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Setup Job Sites",
                description:
                  "Define job site locations with customizable geofence radius",
                icon: <FiMapPin className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Employees Clock In",
                description:
                  "Workers use mobile app to clock in when they arrive at job sites",
                icon: <FiSmartphone className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "GPS Validation",
                description:
                  "System validates location within 50-foot radius before allowing clock-in",
                icon: <FiTarget className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Real-time Tracking",
                description:
                  "Monitor employee locations and time with live dashboard updates",
                icon: <FiEye className="w-6 h-6" />,
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 mb-6">
                  {step.icon}
                </div>
                <div className="text-amber-400 font-bold mb-2">
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

      {/* Technology Section */}
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
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern architecture following singleton patterns for
              scalability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Singleton Services",
                description:
                  "StateManager, LocationService, and ClockInService follow singleton pattern",
                icon: <FiSettings className="w-8 h-8" />,
              },
              {
                title: "Real-time Updates",
                description:
                  "3-second GPS polling with observer pattern for component subscriptions",
                icon: <FiNavigation className="w-8 h-8" />,
              },
              {
                title: "Progressive Enhancement",
                description:
                  "Works without JavaScript with graceful degradation",
                icon: <FiShield className="w-8 h-8" />,
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-amber-400 mb-6">
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
      <section className="py-24 bg-gradient-to-r from-amber-900/20 to-blue-900/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Eliminate Time Fraud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join contractors using GPS time tracking to ensure accurate
              payroll and improve accountability.
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
