"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiDollarSign,
  FiCheckCircle,
  FiX,
  FiStar,
  FiBarChart,
  FiClock,
  FiArrowRight,
  FiZap,
  FiAward,
} from "react-icons/fi";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("per-user");

  const pricingTabs = [
    {
      id: "per-user",
      label: "Per User",
      icon: <FiUsers className="w-4 h-4" />,
    },
    {
      id: "per-lead",
      label: "Per Lead",
      icon: <FiTarget className="w-4 h-4" />,
    },
    {
      id: "revenue-share",
      label: "Revenue Share",
      icon: <FiTrendingUp className="w-4 h-4" />,
    },
    {
      id: "usage-based",
      label: "Usage Based",
      icon: <FiBarChart className="w-4 h-4" />,
    },
    {
      id: "enterprise",
      label: "Enterprise",
      icon: <FiAward className="w-4 h-4" />,
    },
  ];

  const perUserPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per user/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 users",
        "Basic storm tracking",
        "Lead management",
        "Email campaigns",
        "Customer portal",
        "Basic analytics",
        "Phone support",
      ],
      notIncluded: [
        "AI voice calling",
        "Advanced analytics",
        "Custom integrations",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$199",
      period: "per user/month",
      description: "Most popular for growing restoration companies",
      features: [
        "Up to 25 users",
        "Full storm tracking & alerts",
        "AI voice calling (500 calls/month)",
        "Advanced lead scoring",
        "Multi-channel campaigns",
        "Field inspector app",
        "GPS time tracking",
        "Document management",
        "Advanced analytics",
        "Priority support",
      ],
      notIncluded: ["Custom integrations", "Dedicated support"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "per user/month",
      description: "For large operations with advanced needs",
      features: [
        "Unlimited users",
        "Everything in Professional",
        "Unlimited AI voice calls",
        "Custom integrations",
        "Advanced automation",
        "White-label options",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom training",
        "SLA guarantee",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const perLeadPlans = [
    {
      name: "Pay Per Lead",
      price: "$25",
      period: "per qualified lead",
      description: "Only pay for leads that convert to opportunities",
      features: [
        "Storm-triggered lead generation",
        "Property damage verification",
        "Owner contact information",
        "Lead scoring & prioritization",
        "CRM integration",
        "Lead analytics",
        "No monthly minimums",
      ],
      notIncluded: [
        "Team management tools",
        "Advanced features require separate pricing",
      ],
      cta: "Start Generating Leads",
      popular: false,
    },
    {
      name: "Lead + Platform",
      price: "$15",
      period: "per lead + $199/month base",
      description: "Discounted leads with full platform access",
      features: [
        "Everything in Pay Per Lead",
        "Full BuildFlow platform access",
        "Team collaboration tools",
        "Advanced analytics",
        "Campaign management",
        "Customer portal",
        "Document management",
      ],
      notIncluded: ["AI voice calling", "Premium integrations"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Lead Premium",
      price: "$8",
      period: "per lead + $499/month base",
      description: "Best value for high-volume lead generation",
      features: [
        "Everything in Lead + Platform",
        "AI voice calling included",
        "Priority lead delivery",
        "Advanced lead nurturing",
        "Custom automation",
        "Dedicated support",
        "Volume discounts available",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const revenueSharePlans = [
    {
      name: "Growth Partner",
      price: "3%",
      period: "of generated revenue",
      description: "We succeed when you succeed - no upfront costs",
      features: [
        "Full BuildFlow platform access",
        "Unlimited users",
        "Unlimited leads",
        "AI voice calling",
        "Campaign management",
        "Advanced analytics",
        "Success team support",
        "Performance optimization",
      ],
      notIncluded: ["Revenue tracking required", "Minimum $50k annual revenue"],
      cta: "Apply Now",
      popular: false,
    },
    {
      name: "Scale Partner",
      price: "2%",
      period: "of generated revenue",
      description: "For established companies looking to scale",
      features: [
        "Everything in Growth Partner",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager",
        "Custom training programs",
        "Priority feature requests",
        "Revenue optimization consulting",
      ],
      notIncluded: [
        "Minimum $250k annual revenue",
        "12-month commitment required",
      ],
      cta: "Contact Sales",
      popular: true,
    },
    {
      name: "Enterprise Partner",
      price: "1.5%",
      period: "of generated revenue",
      description: "Strategic partnership for industry leaders",
      features: [
        "Everything in Scale Partner",
        "Co-marketing opportunities",
        "Product development input",
        "Industry advisory board",
        "Custom development",
        "Enterprise SLA",
        "Revenue guarantees",
      ],
      notIncluded: [
        "Minimum $1M annual revenue",
        "Strategic partnership agreement",
      ],
      cta: "Schedule Meeting",
      popular: false,
    },
  ];

  const usageBasedPlans = [
    {
      name: "Flex",
      price: "$49",
      period: "base + usage fees",
      description:
        "Pay only for what you use - perfect for seasonal businesses",
      features: [
        "Platform access for up to 10 users",
        "Storm tracking included",
        "$0.15 per SMS sent",
        "$0.05 per email sent",
        "$2.50 per AI voice call",
        "$5 per document generated",
        "$1 per lead processed",
        "Pay-as-you-go pricing",
      ],
      notIncluded: [
        "Minimum usage fees may apply",
        "Advanced features cost extra",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Flex Pro",
      price: "$199",
      period: "base + reduced usage fees",
      description: "Lower usage costs with monthly commitment",
      features: [
        "Platform access for up to 50 users",
        "Everything in Flex",
        "$0.08 per SMS sent",
        "$0.02 per email sent",
        "$1.50 per AI voice call",
        "$3 per document generated",
        "$0.50 per lead processed",
        "Volume discounts available",
      ],
      notIncluded: ["Some premium features cost extra"],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Flex Enterprise",
      price: "$499",
      period: "base + lowest usage fees",
      description: "Maximum savings for high-volume users",
      features: [
        "Unlimited users",
        "Everything in Flex Pro",
        "$0.05 per SMS sent",
        "$0.01 per email sent",
        "$1 per AI voice call",
        "$2 per document generated",
        "$0.25 per lead processed",
        "All features included",
        "Priority support",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const enterprisePlans = [
    {
      name: "Custom Solution",
      price: "Custom",
      period: "tailored to your needs",
      description: "Fully customized BuildFlow implementation",
      features: [
        "Custom feature development",
        "Dedicated infrastructure",
        "White-label branding",
        "Custom integrations",
        "On-premise deployment options",
        "Dedicated support team",
        "Custom SLA agreements",
        "Training and onboarding",
        "Success management",
      ],
      notIncluded: [
        "Requires minimum commitment",
        "Implementation timeline varies",
      ],
      cta: "Schedule Consultation",
      popular: false,
    },
    {
      name: "Industry Partnership",
      price: "Revenue Share",
      period: "or licensing agreement",
      description: "Strategic partnership for industry transformation",
      features: [
        "Everything in Custom Solution",
        "Co-marketing rights",
        "Industry exclusivity options",
        "Product development partnership",
        "Revenue sharing opportunities",
        "Market expansion support",
        "Competitive intelligence",
        "Industry advisory board",
      ],
      notIncluded: [
        "Requires strategic alignment",
        "Subject to partnership terms",
      ],
      cta: "Discuss Partnership",
      popular: true,
    },
  ];

  const getCurrentPlans = () => {
    switch (activeTab) {
      case "per-user":
        return perUserPlans;
      case "per-lead":
        return perLeadPlans;
      case "revenue-share":
        return revenueSharePlans;
      case "usage-based":
        return usageBasedPlans;
      case "enterprise":
        return enterprisePlans;
      default:
        return perUserPlans;
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case "per-user":
        return "Traditional per-seat pricing for predictable monthly costs";
      case "per-lead":
        return "Pay only for qualified leads generated by our system";
      case "revenue-share":
        return "We grow when you grow - percentage of revenue generated";
      case "usage-based":
        return "Flexible pricing based on actual platform usage";
      case "enterprise":
        return "Custom solutions for large organizations and strategic partnerships";
      default:
        return "";
    }
  };

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
          <div className="absolute w-[500px] h-[500px] rounded-full bg-green-900/20 blur-3xl -top-20 -right-20" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-900/20 blur-3xl bottom-0 left-20" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Choose Your </span>
              <span className="gradient-text primary-gradient">
                Growth Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Multiple pricing models designed for storm restoration companies.
              From startups to enterprise - find the perfect fit for your
              business.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-green-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing That Works For You
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {getTabDescription()}
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {pricingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tab.icon}
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Pricing Cards */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid gap-8 ${
              getCurrentPlans().length === 2
                ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {getCurrentPlans().map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br from-gray-900 to-black border rounded-2xl p-6 ${
                  plan.popular
                    ? "border-blue-500 shadow-blue-500/20 shadow-2xl"
                    : "border-gray-800"
                } hover:border-gray-700 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <FiStar className="w-3 h-3" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <FiX className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
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
              Calculate Your ROI
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how BuildFlow pays for itself with increased efficiency and
              lead generation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Time Savings",
                value: "40 hours/week",
                description: "Automation reduces manual work",
                icon: <FiClock className="w-8 h-8" />,
                color: "from-blue-600 to-blue-400",
              },
              {
                title: "Lead Increase",
                value: "300%",
                description: "More qualified leads per storm",
                icon: <FiTarget className="w-8 h-8" />,
                color: "from-green-600 to-green-400",
              },
              {
                title: "Revenue Growth",
                value: "$50K+/month",
                description: "Average increase for customers",
                icon: <FiDollarSign className="w-8 h-8" />,
                color: "from-purple-600 to-purple-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.title}
                </h3>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about BuildFlow pricing and features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "Can I switch pricing models?",
                answer:
                  "Yes! You can switch between pricing models at any time. We'll help you find the best model for your current business needs.",
              },
              {
                question: "What's included in the free trial?",
                answer:
                  "Full access to all features for 14 days, including AI voice calling, storm tracking, and lead generation. No credit card required.",
              },
              {
                question: "How does revenue share work?",
                answer:
                  "We track revenue generated through BuildFlow leads and campaigns. You pay a percentage only on the additional revenue we help generate.",
              },
              {
                question: "Are there setup or cancellation fees?",
                answer:
                  "No setup fees, no cancellation fees. We believe in earning your business through results, not contracts.",
              },
              {
                question: "What kind of support is included?",
                answer:
                  "All plans include email support. Professional and higher plans include phone support, and Enterprise includes dedicated account management.",
              },
              {
                question: "Can I customize features for my business?",
                answer:
                  "Enterprise plans include custom feature development. Professional plans can request features that may be added to the roadmap.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of storm restoration companies already using
              BuildFlow to grow their revenue and streamline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo" className="btn btn-primary">
                <FiZap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                <FiArrowRight className="w-5 h-5 mr-2" />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
