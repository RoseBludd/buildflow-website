import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiCpu,
  FiDollarSign,
  FiBarChart2,
  FiClock,
  FiFileText,
  FiZap,
} from "react-icons/fi";

export default function AIEstimatorPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-blue-950/40 rounded-full px-3 py-1 text-sm text-blue-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">AI </span>
                  <span className="gradient-text primary-gradient">
                    Estimator
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Generate accurate, detailed estimates in minutes, not hours,
                  with our AI-powered estimation platform built specifically for
                  restoration contractors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* AI Estimator UI mockup */}
                        <div className="grid grid-cols-12 gap-4 h-full">
                          {/* Left panel - Project details */}
                          <div className="col-span-4 bg-black/30 rounded-lg p-3">
                            <div className="h-5 w-3/4 bg-gray-700 rounded mb-4 flex items-center justify-between pr-2">
                              <div className="h-3 w-24 bg-blue-500/50 rounded-sm ml-2"></div>
                              <div className="h-3 w-3 bg-blue-500/80 rounded-full"></div>
                            </div>

                            {/* Project details form */}
                            <div className="space-y-3">
                              <div className="p-2 bg-black/20 rounded-md">
                                <div className="h-3 w-1/2 bg-gray-600 rounded mb-2"></div>
                                <div className="h-6 w-full bg-gray-700/40 rounded"></div>
                              </div>

                              <div className="p-2 bg-black/20 rounded-md">
                                <div className="h-3 w-1/2 bg-gray-600 rounded mb-2"></div>
                                <div className="h-6 w-full bg-gray-700/40 rounded"></div>
                              </div>

                              <div className="p-2 bg-black/20 rounded-md">
                                <div className="h-3 w-1/2 bg-gray-600 rounded mb-2"></div>
                                <div className="h-6 w-full bg-gray-700/40 rounded"></div>
                              </div>

                              <div className="mt-4 h-6 w-full bg-blue-600/70 rounded-md"></div>
                            </div>
                          </div>

                          {/* Right panel - Estimate preview */}
                          <div className="col-span-8 space-y-4">
                            {/* Top section - AI Processing */}
                            <div className="bg-black/30 rounded-lg p-3 h-1/3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="h-4 w-1/3 bg-gray-700 rounded flex items-center">
                                  <div className="h-3 w-16 bg-purple-500/70 rounded-sm ml-2"></div>
                                </div>
                                <div className="flex space-x-1">
                                  <div className="h-4 w-4 bg-blue-500/50 rounded"></div>
                                  <div className="h-4 w-4 bg-gray-700 rounded"></div>
                                </div>
                              </div>

                              {/* AI processing animation */}
                              <div className="h-[calc(100%-24px)] bg-gray-800/60 rounded-lg flex items-center justify-center p-3">
                                <div className="space-y-1 w-full">
                                  <div className="h-2 w-3/4 bg-purple-500/40 rounded animate-pulse"></div>
                                  <div className="h-2 w-1/2 bg-blue-500/40 rounded animate-pulse"></div>
                                  <div className="h-2 w-5/6 bg-purple-500/40 rounded animate-pulse"></div>
                                  <div className="h-2 w-2/3 bg-blue-500/40 rounded animate-pulse"></div>
                                </div>
                              </div>
                            </div>

                            {/* Bottom section - Estimate preview */}
                            <div className="bg-black/30 rounded-lg p-3 h-2/3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="h-4 w-1/3 bg-gray-700 rounded flex items-center">
                                  <div className="h-3 w-20 bg-blue-500/70 rounded-sm ml-2"></div>
                                </div>
                                <div className="flex space-x-2">
                                  <div className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-400">
                                    PDF
                                  </div>
                                  <div className="px-2 py-1 bg-green-500/20 rounded text-xs text-green-400">
                                    CSV
                                  </div>
                                </div>
                              </div>

                              {/* Line items table */}
                              <div className="space-y-2 mt-2">
                                {/* Header */}
                                <div className="grid grid-cols-12 gap-2 h-6 text-xs text-gray-400">
                                  <div className="col-span-6 bg-gray-800/60 rounded p-1">
                                    Description
                                  </div>
                                  <div className="col-span-2 bg-gray-800/60 rounded p-1">
                                    Qty
                                  </div>
                                  <div className="col-span-2 bg-gray-800/60 rounded p-1">
                                    Rate
                                  </div>
                                  <div className="col-span-2 bg-gray-800/60 rounded p-1">
                                    Total
                                  </div>
                                </div>

                                {/* Items */}
                                <div className="grid grid-cols-12 gap-2 h-6 bg-blue-900/20 rounded text-xs">
                                  <div className="col-span-6 p-1">
                                    Drywall Repair
                                  </div>
                                  <div className="col-span-2 p-1">240 SF</div>
                                  <div className="col-span-2 p-1">$2.80</div>
                                  <div className="col-span-2 p-1">$672.00</div>
                                </div>

                                <div className="grid grid-cols-12 gap-2 h-6 rounded text-xs">
                                  <div className="col-span-6 p-1">
                                    Remove/Reset Cabinets
                                  </div>
                                  <div className="col-span-2 p-1">4 EA</div>
                                  <div className="col-span-2 p-1">$125.00</div>
                                  <div className="col-span-2 p-1">$500.00</div>
                                </div>

                                <div className="grid grid-cols-12 gap-2 h-6 bg-blue-900/20 rounded text-xs">
                                  <div className="col-span-6 p-1">
                                    Paint Walls
                                  </div>
                                  <div className="col-span-2 p-1">480 SF</div>
                                  <div className="col-span-2 p-1">$0.75</div>
                                  <div className="col-span-2 p-1">$360.00</div>
                                </div>

                                <div className="grid grid-cols-12 gap-2 h-6 rounded text-xs">
                                  <div className="col-span-6 p-1">
                                    Flooring - Engineered Wood
                                  </div>
                                  <div className="col-span-2 p-1">320 SF</div>
                                  <div className="col-span-2 p-1">$8.50</div>
                                  <div className="col-span-2 p-1">
                                    $2,720.00
                                  </div>
                                </div>

                                {/* Total */}
                                <div className="grid grid-cols-12 gap-2 h-8 bg-blue-600/20 rounded text-sm mt-4">
                                  <div className="col-span-10 p-1 text-right font-medium">
                                    Total:
                                  </div>
                                  <div className="col-span-2 p-1 font-bold">
                                    $4,252.00
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Estimate </span>
                <span className="gradient-text primary-gradient">
                  With Confidence
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Estimator combines advanced computer vision, machine
                learning, and industry-specific data to generate accurate
                estimates faster than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiCpu size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI-Powered Analysis
                </h3>
                <p className="text-gray-400">
                  Our advanced machine learning models analyze photos,
                  measurements, and damage descriptions to generate
                  comprehensive estimates.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Computer vision damage detection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Natural language processing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Continuous learning model
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiClock size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Lightning-Fast Results
                </h3>
                <p className="text-gray-400">
                  Generate detailed estimates in minutes instead of hours,
                  allowing you to respond to customers quickly and take on more
                  jobs.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Estimates in under 10 minutes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Same-day customer response
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Batch processing available
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiDollarSign size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Maximize Profitability
                </h3>
                <p className="text-gray-400">
                  Ensure you never miss a line item or underestimate costs with
                  our AI that identifies all necessary repairs with appropriate
                  pricing.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Complete scope detection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Regional price optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Profit margin protection
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiFileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Insurance-Ready Documents
                </h3>
                <p className="text-gray-400">
                  Generate professional, detailed estimates in formats accepted
                  by all major insurance carriers, streamlining the approval
                  process.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Xactimate integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Multiple export formats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Detailed documentation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiBarChart2 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-400">
                  Gain valuable business intelligence from your estimating data,
                  helping you identify trends and optimize your operations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Performance dashboards
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Cost trend analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Custom reporting tools
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiZap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Seamless Integration
                </h3>
                <p className="text-gray-400">
                  Connect with your existing CRM, project management, and
                  accounting systems for a streamlined workflow from estimate to
                  completion.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Open API architecture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Popular software connectors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center mt-0.5 mr-2">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Mobile app synchronization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute left-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">How the </span>
                <span className="gradient-text primary-gradient">
                  AI Estimator
                </span>
                <span className="text-white"> Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From project documentation to final estimate, our streamlined
                process delivers accurate estimates quickly while maximizing
                your profitability.
              </p>
            </div>

            {/* Process steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600/80 via-purple-600/80 to-blue-600/80 hidden md:block transform md:-translate-x-1/2" />

              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Capture Project Details
                  </h3>
                  <p className="text-gray-300">
                    Collect all necessary project information through our
                    intuitive interface. Upload photos of the damaged areas,
                    input basic measurements, and note any specific requirements
                    for the project.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our mobile app makes on-site documentation simple with
                    guided photo capture to ensure you get all the angles needed
                    for accurate AI analysis.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    AI Analysis & Processing
                  </h3>
                  <p className="text-gray-300">
                    Our sophisticated AI algorithms analyze your uploaded
                    content, identifying damage types, required materials, and
                    necessary labor. The system cross-references with our
                    extensive database of restoration costs and techniques.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our proprietary computer vision models can detect subtle
                    damage patterns that are often missed by human estimators,
                    ensuring nothing is overlooked.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 order-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    2
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Comprehensive Scope Generation
                  </h3>
                  <p className="text-gray-300">
                    The AI creates a detailed scope of work with all required
                    line items, considering local pricing, material
                    availability, and industry best practices for the type of
                    restoration needed.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our system automatically includes often-forgotten
                    supplemental items like permits, specialized equipment, or
                    temporary protection measures to ensure complete estimates.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    3
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Estimator Review & Customization
                  </h3>
                  <p className="text-gray-300">
                    A human estimator can quickly review the AI-generated
                    estimate, making adjustments where needed. The interface
                    allows for easy customization of material selections,
                    pricing, and scope modifications.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our system learns from your adjustments over time, adapting
                    to your company&apos;s specific pricing strategies and
                    preferred materials to make future estimates even more
                    accurate.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 order-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    4
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Professional Document Delivery
                  </h3>
                  <p className="text-gray-300">
                    Generate polished, professional estimates in multiple
                    formats suitable for insurance submission, client
                    presentations, or internal use. Automatically share
                    documents with stakeholders through your preferred channels.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our documents include interactive elements that allow
                    clients to explore material options and visualize the
                    completed project, leading to higher approval rates and
                    fewer change orders.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Results */}
                <div className="p-8 md:p-10 lg:border-r border-gray-800">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                    Real Results
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        85%
                      </div>
                      <p className="text-gray-400">
                        Time saved on creating estimates
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        92%
                      </div>
                      <p className="text-gray-400">
                        Accuracy compared to manual estimates
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        39%
                      </div>
                      <p className="text-gray-400">
                        Increase in profit margins
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        3.5x
                      </div>
                      <p className="text-gray-400">
                        More estimates completed per day
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-blue-900/10 to-purple-900/10">
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-xl text-gray-300 mb-6 italic">
                    &ldquo;We&apos;ve been able to triple our estimate output
                    without adding staff. The AI Estimator is incredibly
                    accurate and has helped us win more bids by responding
                    faster than our competitors. It&apos;s paid for itself many
                    times over.&rdquo;
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      JD
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-semibold">
                        Jennifer Davis
                      </div>
                      <div className="text-gray-400 text-sm">
                        Operations Manager, Elite Restoration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Transform Your Estimation Process?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the hundreds of restoration companies already using
                BuildFlow to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                  Schedule a Demo
                </button>
                <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
