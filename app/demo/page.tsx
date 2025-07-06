"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiCalendar,
  FiUsers,
  FiHome,
  FiTrendingUp,
  FiClock,
  FiCheckCircle,
  FiArrowRight,
  FiStar,
  FiTarget,
  FiAward,
} from "react-icons/fi";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    jobTitle: "",
    businessSize: "",
    monthlyLeads: "",
    currentChallenges: [],
    interestedFeatures: [],
    preferredTime: "",
    timeZone: "",
    hearAboutUs: "",
    additionalInfo: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const businessSizes = [
    {
      id: "solo",
      label: "Solo Contractor",
      description: "Just me or 1-2 people",
      employees: "1-2",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      id: "small",
      label: "Small Team",
      description: "Growing local business",
      employees: "3-10",
      icon: <FiHome className="w-6 h-6" />,
    },
    {
      id: "medium",
      label: "Established Company",
      description: "Regional presence",
      employees: "11-50",
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
    {
      id: "enterprise",
      label: "Large Enterprise",
      description: "Multi-state operations",
      employees: "50+",
      icon: <FiAward className="w-6 h-6" />,
    },
  ];

  const challenges = [
    { id: "lead-generation", label: "Finding Quality Leads" },
    { id: "storm-tracking", label: "Tracking Storm Opportunities" },
    { id: "team-management", label: "Managing Field Teams" },
    { id: "customer-communication", label: "Customer Communication" },
    { id: "project-tracking", label: "Project Management" },
    { id: "invoicing-payments", label: "Invoicing & Payments" },
    { id: "document-management", label: "Document Management" },
    { id: "scheduling", label: "Scheduling & Dispatching" },
    { id: "reporting", label: "Business Analytics" },
    { id: "compliance", label: "Compliance & Documentation" },
  ];

  const features = [
    { id: "ai-voice-calling", label: "AI Voice Calling System" },
    { id: "storm-tracking", label: "Real-time Storm Tracking" },
    { id: "lead-generation", label: "Automated Lead Generation" },
    { id: "campaign-management", label: "Marketing Campaigns" },
    { id: "field-inspector", label: "Mobile Field Inspection" },
    { id: "time-tracking", label: "GPS Time Tracking" },
    { id: "document-management", label: "Document Management" },
    { id: "customer-portal", label: "Customer Portal" },
    { id: "analytics", label: "Business Analytics" },
    { id: "integrations", label: "CRM/Software Integrations" },
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const timeZones = [
    "Eastern (EST)",
    "Central (CST)",
    "Mountain (MST)",
    "Pacific (PST)",
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].includes(value)
        ? (prev[field as keyof typeof prev] as string[]).filter(
            (item) => item !== value
          )
        : [...(prev[field as keyof typeof prev] as string[]), value],
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Demo request submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                Tell Us About Yourself
              </h2>
              <p className="text-gray-400">
                Let&apos;s start with some basic information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Smith"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="ABC Roofing & Restoration"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    handleInputChange("jobTitle", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  placeholder="Owner, Manager, etc."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Website
              </label>
              <input
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="https://yourcompany.com"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                About Your Business
              </h2>
              <p className="text-gray-400">
                Help us understand your business size and needs
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Business Size *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {businessSizes.map((size) => (
                  <motion.div
                    key={size.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange("businessSize", size.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all ${
                      formData.businessSize === size.id
                        ? "border-blue-500 bg-blue-900/20"
                        : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          formData.businessSize === size.id
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {size.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">
                          {size.label}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {size.employees} employees
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm">{size.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Monthly Leads/Projects
              </label>
              <select
                value={formData.monthlyLeads}
                onChange={(e) =>
                  handleInputChange("monthlyLeads", e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select range...</option>
                <option value="1-10">1-10 leads/month</option>
                <option value="11-25">11-25 leads/month</option>
                <option value="26-50">26-50 leads/month</option>
                <option value="51-100">51-100 leads/month</option>
                <option value="100+">100+ leads/month</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Current Challenges (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {challenges.map((challenge) => (
                  <label
                    key={challenge.id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.currentChallenges.includes(
                        challenge.id
                      )}
                      onChange={() =>
                        handleCheckboxChange("currentChallenges", challenge.id)
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-gray-300">{challenge.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                Features of Interest
              </h2>
              <p className="text-gray-400">
                Which BuildFlow features are you most interested in?
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Interested Features (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className="flex items-center space-x-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interestedFeatures.includes(feature.id)}
                      onChange={() =>
                        handleCheckboxChange("interestedFeatures", feature.id)
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-gray-300">{feature.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How did you hear about us?
              </label>
              <select
                value={formData.hearAboutUs}
                onChange={(e) =>
                  handleInputChange("hearAboutUs", e.target.value)
                }
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select...</option>
                <option value="google">Google Search</option>
                <option value="social-media">Social Media</option>
                <option value="referral">Referral from colleague</option>
                <option value="trade-show">Trade Show/Event</option>
                <option value="industry-publication">
                  Industry Publication
                </option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Additional Information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) =>
                  handleInputChange("additionalInfo", e.target.value)
                }
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Tell us more about your specific needs or questions..."
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-3">
                Schedule Your Demo
              </h2>
              <p className="text-gray-400">
                Choose your preferred time for a personalized demo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preferred Time *
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) =>
                    handleInputChange("preferredTime", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select time...</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time Zone *
                </label>
                <select
                  value={formData.timeZone}
                  onChange={(e) =>
                    handleInputChange("timeZone", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select timezone...</option>
                  {timeZones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-800/30">
              <h3 className="text-lg font-semibold text-white mb-3">
                What to Expect in Your Demo
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    30-minute personalized walkthrough
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Live demonstration of features specific to your needs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Q&A session with our product experts
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    Custom pricing and implementation plan
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">
                    14-day free trial setup (if interested)
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Schedule Your </span>
              <span className="gradient-text primary-gradient">
                Personalized
              </span>
              <span className="text-white"> Demo</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              See how BuildFlow can transform your storm restoration business.
              Get a customized demo tailored to your specific needs and
              challenges.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                {
                  icon: <FiClock className="w-6 h-6" />,
                  title: "30 Minutes",
                  description: "Quick, focused demo",
                },
                {
                  icon: <FiTarget className="w-6 h-6" />,
                  title: "Personalized",
                  description: "Tailored to your business",
                },
                {
                  icon: <FiStar className="w-6 h-6" />,
                  title: "Free Trial",
                  description: "14-day trial included",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">
                      {benefit.title}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {benefit.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div key={i} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep > i + 1
                          ? "bg-green-600 text-white"
                          : currentStep === i + 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {currentStep > i + 1 ? (
                        <FiCheckCircle className="w-4 h-4" />
                      ) : (
                        i + 1
                      )}
                    </div>
                    {i < totalSteps - 1 && (
                      <div
                        className={`w-16 h-1 mx-2 ${
                          currentStep > i + 1 ? "bg-green-600" : "bg-gray-700"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <span className="text-gray-400">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
            </div>

            {/* Form */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8"
            >
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    currentStep === 1
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  Previous
                </button>

                {currentStep === totalSteps ? (
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    <FiCalendar className="w-5 h-5" />
                    Schedule Demo
                  </button>
                ) : (
                  <button
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    Next Step
                    <FiArrowRight className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                What Our Customers Say
              </h2>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center justify-center mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FiStar
                      key={i}
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6">
                  &quot;BuildFlow completely transformed how we handle storm
                  leads. We&apos;re now getting 3x more qualified leads and our
                  team saves 40 hours per week on administrative tasks. The AI
                  voice calling feature alone pays for the entire
                  platform.&quot;
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">JS</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">John Smith</div>
                    <div className="text-gray-400">
                      Owner, ABC Storm Restoration
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
