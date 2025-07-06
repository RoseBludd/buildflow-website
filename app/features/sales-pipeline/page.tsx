import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiBarChart2,
  FiMessageSquare,
  FiFlag,
  FiClock,
  FiFileText,
  FiUsers,
  FiActivity,
  FiPieChart,
} from "react-icons/fi";

export default function SalesPipelinePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-blue-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-purple-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-purple-950/40 rounded-full px-3 py-1 text-sm text-purple-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Sales </span>
                  <span className="gradient-text primary-gradient">
                    Pipeline
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Track and optimize your entire sales process from lead to
                  signed contract with built-in analytics and automated
                  follow-up sequences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Sales Pipeline UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Pipeline header with pipeline stages */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-md bg-purple-600/70 flex items-center justify-center">
                                <FiBarChart2 className="text-white" size={16} />
                              </div>
                              <div className="text-white font-medium">
                                Pipeline Overview
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                This week
                              </div>
                              <div className="px-2 py-1 bg-purple-600/30 rounded text-xs text-purple-300">
                                This month
                              </div>
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                Custom
                              </div>
                            </div>
                          </div>

                          {/* Pipeline stages */}
                          <div className="grid grid-cols-5 gap-3 h-14 mb-3">
                            <div className="relative flex flex-col justify-center items-center bg-gray-800/50 rounded-md px-2 py-1">
                              <div className="text-xs text-gray-300 font-medium">
                                New Leads
                              </div>
                              <div className="text-xs text-white font-bold">
                                32
                              </div>
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 rounded-b-md"></div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center bg-gray-800/50 rounded-md px-2 py-1">
                              <div className="text-xs text-gray-300 font-medium">
                                Contacted
                              </div>
                              <div className="text-xs text-white font-bold">
                                24
                              </div>
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-b-md"></div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center bg-gray-800/50 rounded-md px-2 py-1">
                              <div className="text-xs text-gray-300 font-medium">
                                Meeting
                              </div>
                              <div className="text-xs text-white font-bold">
                                18
                              </div>
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 rounded-b-md"></div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center bg-gray-800/50 rounded-md px-2 py-1">
                              <div className="text-xs text-gray-300 font-medium">
                                Proposal
                              </div>
                              <div className="text-xs text-white font-bold">
                                13
                              </div>
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-b-md"></div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center bg-gray-800/50 rounded-md px-2 py-1">
                              <div className="text-xs text-gray-300 font-medium">
                                Won
                              </div>
                              <div className="text-xs text-white font-bold">
                                8
                              </div>
                              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500 rounded-b-md"></div>
                            </div>
                          </div>

                          {/* Pipeline visualization */}
                          <div className="flex-1 bg-gray-800/40 rounded-lg p-3 overflow-hidden">
                            <div className="h-full flex flex-col space-y-2 overflow-y-auto">
                              {/* Lead cards */}
                              <div className="p-2 bg-purple-900/20 border border-purple-500/30 rounded-md">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-sm font-medium text-white mb-1">
                                      Johnson Residence
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      Roof repair • $12,450
                                    </div>
                                  </div>
                                  <div className="px-1.5 py-0.5 bg-purple-600/30 text-purple-300 rounded text-xs">
                                    New Lead
                                  </div>
                                </div>
                                <div className="flex items-center mt-2 space-x-2">
                                  <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center">
                                    <FiMessageSquare
                                      className="text-gray-400"
                                      size={12}
                                    />
                                  </div>
                                  <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center">
                                    <FiFlag
                                      className="text-gray-400"
                                      size={12}
                                    />
                                  </div>
                                  <div className="text-xs text-gray-400 ml-auto">
                                    2 hours ago
                                  </div>
                                </div>
                              </div>

                              <div className="p-2 bg-blue-900/20 border border-blue-500/30 rounded-md">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-sm font-medium text-white mb-1">
                                      Smith Property
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      Flood restoration • $28,750
                                    </div>
                                  </div>
                                  <div className="px-1.5 py-0.5 bg-blue-600/30 text-blue-300 rounded text-xs">
                                    Contacted
                                  </div>
                                </div>
                                <div className="flex items-center mt-2 space-x-2">
                                  <div className="h-6 w-6 rounded-full bg-blue-800/40 flex items-center justify-center">
                                    <FiMessageSquare
                                      className="text-blue-300"
                                      size={12}
                                    />
                                  </div>
                                  <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center">
                                    <FiFlag
                                      className="text-gray-400"
                                      size={12}
                                    />
                                  </div>
                                  <div className="text-xs text-gray-400 ml-auto">
                                    Yesterday
                                  </div>
                                </div>
                              </div>

                              <div className="p-2 bg-green-900/20 border border-green-500/30 rounded-md">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <div className="text-sm font-medium text-white mb-1">
                                      Wilson Commercial
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      Structural repair • $45,200
                                    </div>
                                  </div>
                                  <div className="px-1.5 py-0.5 bg-green-600/30 text-green-300 rounded text-xs">
                                    Meeting
                                  </div>
                                </div>
                                <div className="flex items-center mt-2 space-x-2">
                                  <div className="h-6 w-6 rounded-full bg-green-800/40 flex items-center justify-center">
                                    <FiMessageSquare
                                      className="text-green-300"
                                      size={12}
                                    />
                                  </div>
                                  <div className="h-6 w-6 rounded-full bg-green-800/40 flex items-center justify-center">
                                    <FiFlag
                                      className="text-green-300"
                                      size={12}
                                    />
                                  </div>
                                  <div className="text-xs text-gray-400 ml-auto">
                                    Tue, 2:00 PM
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
                <span className="text-white">Close More Deals </span>
                <span className="gradient-text primary-gradient">Faster</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Sales Pipeline gives you complete visibility into your sales
                process with smart automations that help you convert more leads
                into satisfied customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-purple-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-800/30 transition-colors">
                  <FiBarChart2 size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Visual Pipeline Management
                </h3>
                <p className="text-gray-400">
                  Get a clear view of your entire sales funnel with customizable
                  stages that reflect your unique sales process.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Drag-and-drop interface
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Customizable pipeline stages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Deal probability scoring
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-purple-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-800/30 transition-colors">
                  <FiClock size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automated Follow-up Sequences
                </h3>
                <p className="text-gray-400">
                  Never let a lead slip through the cracks with intelligent
                  automation that triggers perfectly timed follow-ups.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Multi-channel outreach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Time-based triggers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Behavior-based workflows
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-purple-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-800/30 transition-colors">
                  <FiFileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contract Generation & E-Signatures
                </h3>
                <p className="text-gray-400">
                  Create professional proposals and contracts with digital
                  signatures to close deals faster.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Template library
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Legal-compliant e-signatures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automatic contract tracking
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-purple-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-800/30 transition-colors">
                  <FiActivity size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Sales Performance Analytics
                </h3>
                <p className="text-gray-400">
                  Gain insights into your sales performance with detailed
                  analytics that help you optimize your approach.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Conversion rate tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Revenue forecasting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Team performance metrics
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-purple-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-800/30 transition-colors">
                  <FiUsers size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Team Collaboration Tools
                </h3>
                <p className="text-gray-400">
                  Work together seamlessly with your team to convert more leads
                  and provide a consistent customer experience.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Task assignments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Internal commenting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Activity notifications
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-purple-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-800/30 transition-colors">
                  <FiPieChart size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Integration Ecosystem
                </h3>
                <p className="text-gray-400">
                  Connect your pipeline with your favorite tools for a cohesive
                  workflow across your entire business.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Calendar integrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Email/SMS platforms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-purple-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Accounting software sync
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
                  Sales Pipeline
                </span>
                <span className="text-white"> Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From lead capture to closing the deal, our streamlined pipeline
                helps you track, nurture, and convert leads with maximum
                efficiency.
              </p>
            </div>

            {/* Process steps */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600/80 via-blue-600/80 to-purple-600/80 hidden md:block transform md:-translate-x-1/2" />

              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Lead Capture & Qualification
                  </h3>
                  <p className="text-gray-300">
                    Automatically collect and organize leads from all your
                    sources - website forms, social media, calls, or manual
                    entries. Leads are scored and qualified based on your
                    criteria.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-purple-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our AI lead scoring automatically prioritizes the most
                    promising opportunities based on 20+ data points, saving
                    your team valuable time.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Follow-Up Automation
                  </h3>
                  <p className="text-gray-300">
                    Set up powerful automated sequences that nurture leads with
                    perfectly timed follow-ups across email, SMS, and phone
                    calls. Never let a potential customer fall through the
                    cracks.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-purple-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our behavioral-based triggers adjust your outreach based on
                    how prospects engage, dramatically increasing response rates
                    compared to time-based sequences alone.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 order-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    2
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Meeting Scheduling & Management
                  </h3>
                  <p className="text-gray-300">
                    Book appointments effortlessly with our integrated calendar
                    system. Automated reminders keep both your team and
                    prospects prepared and on time for meetings.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-purple-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our smart scheduling suggests optimal meeting times based on
                    your team&apos;s availability and historical data on when
                    similar prospects are most likely to convert.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    3
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 relative">
                <div className="md:w-1/2 md:pl-12 order-2">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Proposal & Contract Creation
                  </h3>
                  <p className="text-gray-300">
                    Generate professional proposals and contracts with our
                    customizable templates. Digital signature capability lets
                    clients sign from anywhere, on any device.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-purple-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our dynamic pricing engine can help optimize your quotes
                    based on project scope, client history, and market
                    conditions to maximize profitability.
                  </p>
                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end md:pr-12 order-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    4
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
                <div className="md:w-1/2 md:text-right md:pr-12 order-2 md:order-1">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Analytics & Optimization
                  </h3>
                  <p className="text-gray-300">
                    Track performance at every stage of your pipeline with
                    detailed analytics and reports. Identify bottlenecks,
                    opportunities, and trends to continuously improve your sales
                    process.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-purple-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our predictive analytics can forecast your sales with up to
                    94% accuracy, helping you make data-driven decisions about
                    resource allocation and growth planning.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-12 order-1 md:order-2 flex justify-center md:justify-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg z-10">
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
                    Real-World Results
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        41%
                      </div>
                      <p className="text-gray-400">Increase in close rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        73%
                      </div>
                      <p className="text-gray-400">Faster sales cycle</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        2.8x
                      </div>
                      <p className="text-gray-400">More deals per rep</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        89%
                      </div>
                      <p className="text-gray-400">
                        Reduction in lead follow-up time
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-8 md:p-10 bg-gradient-to-br from-purple-900/10 to-blue-900/10">
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
                    &ldquo;BuildFlow&apos;s Sales Pipeline transformed how we
                    manage our prospects. We&apos;re closing 40% more deals with
                    the same team size, and our sales cycle has shortened
                    dramatically. The automated follow-ups alone have been worth
                    the investment.&rdquo;
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                      KB
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-semibold">
                        Kevin Brennan
                      </div>
                      <div className="text-gray-400 text-sm">
                        VP of Sales, Renova Restorations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Streamline Your Sales Process?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the restoration companies already using BuildFlow to
                convert more leads and grow their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
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
