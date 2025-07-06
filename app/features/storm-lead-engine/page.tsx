import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiMapPin,
  FiStar,
  FiPieChart,
  FiActivity,
  FiHome,
  FiLayers,
} from "react-icons/fi";

export default function StormLeadEnginePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated radar illustration */}
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
                  <span className="text-white">Storm Lead </span>
                  <span className="gradient-text primary-gradient">Engine</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Intelligently identify and prioritize storm-damaged
                  properties, transforming weather events into targeted business
                  opportunities with AI-powered precision.
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
                        {/* Lead engine UI mockup will go here */}
                        <div className="grid grid-cols-12 gap-4 h-full">
                          <div className="col-span-4 bg-black/30 rounded-lg p-3">
                            <div className="h-5 w-3/4 bg-gray-700 rounded mb-4 flex items-center justify-between pr-2">
                              <div className="h-3 w-24 bg-blue-500/50 rounded-sm ml-2"></div>
                              <div className="h-3 w-3 bg-blue-500/80 rounded-full"></div>
                            </div>
                            <div className="space-y-3">
                              {/* Lead list with severity indicators */}
                              <div className="flex items-center space-x-2 bg-blue-900/20 p-1.5 rounded-md border border-blue-500/20">
                                <div className="w-4 h-4 bg-red-500/80 rounded-full flex-shrink-0"></div>
                                <div className="flex-1">
                                  <div className="h-3 bg-gray-700 rounded w-3/4 mb-1"></div>
                                  <div className="h-2 bg-gray-700/60 rounded w-1/2"></div>
                                </div>
                                <div className="h-5 w-8 bg-red-500/30 rounded text-xs flex items-center justify-center text-red-300">
                                  95%
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 bg-blue-900/10 p-1.5 rounded-md border border-blue-500/10">
                                <div className="w-4 h-4 bg-orange-500/80 rounded-full flex-shrink-0"></div>
                                <div className="flex-1">
                                  <div className="h-3 bg-gray-700 rounded w-3/4 mb-1"></div>
                                  <div className="h-2 bg-gray-700/60 rounded w-1/2"></div>
                                </div>
                                <div className="h-5 w-8 bg-orange-500/30 rounded text-xs flex items-center justify-center text-orange-300">
                                  82%
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 bg-blue-900/10 p-1.5 rounded-md border border-blue-500/10">
                                <div className="w-4 h-4 bg-orange-500/80 rounded-full flex-shrink-0"></div>
                                <div className="flex-1">
                                  <div className="h-3 bg-gray-700 rounded w-3/4 mb-1"></div>
                                  <div className="h-2 bg-gray-700/60 rounded w-1/2"></div>
                                </div>
                                <div className="h-5 w-8 bg-orange-500/30 rounded text-xs flex items-center justify-center text-orange-300">
                                  76%
                                </div>
                              </div>
                              <div className="flex items-center space-x-2 p-1.5 rounded-md border border-blue-500/5">
                                <div className="w-4 h-4 bg-yellow-500/80 rounded-full flex-shrink-0"></div>
                                <div className="flex-1">
                                  <div className="h-3 bg-gray-700 rounded w-3/4 mb-1"></div>
                                  <div className="h-2 bg-gray-700/60 rounded w-1/2"></div>
                                </div>
                                <div className="h-5 w-8 bg-yellow-500/30 rounded text-xs flex items-center justify-center text-yellow-300">
                                  64%
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-8 space-y-4">
                            <div className="bg-black/30 rounded-lg p-3 h-1/2">
                              <div className="flex items-center justify-between mb-2">
                                <div className="h-5 w-1/3 bg-gray-700 rounded flex items-center">
                                  <div className="h-3 w-16 bg-blue-500/70 rounded-sm ml-2"></div>
                                </div>
                                <div className="flex space-x-1">
                                  <div className="h-4 w-4 bg-blue-500/50 rounded"></div>
                                  <div className="h-4 w-4 bg-gray-700 rounded"></div>
                                </div>
                              </div>
                              <div className="h-[calc(100%-28px)] bg-gray-900/60 rounded-lg relative overflow-hidden">
                                {/* Storm swath visualization */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                {/* Storm path/swath visualization */}
                                <div className="absolute w-full h-full">
                                  {/* City/region markers */}
                                  <div className="absolute top-[15%] left-[20%] h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                                  <div className="absolute top-[25%] left-[30%] h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                                  <div className="absolute top-[60%] left-[70%] h-1.5 w-1.5 bg-blue-400 rounded-full"></div>
                                  <div className="absolute top-[40%] left-[60%] h-1.5 w-1.5 bg-blue-400 rounded-full"></div>

                                  {/* Storm swath */}
                                  <div
                                    className="absolute h-[30%] w-[70%] rounded-full opacity-60 bg-gradient-radial from-red-500/30 via-orange-500/20 to-transparent"
                                    style={{ top: "20%", left: "15%" }}
                                  ></div>

                                  {/* Second storm cell */}
                                  <div
                                    className="absolute h-[25%] w-[40%] rounded-full opacity-60 bg-gradient-radial from-orange-500/40 via-yellow-500/20 to-transparent"
                                    style={{ top: "45%", left: "45%" }}
                                  ></div>

                                  {/* Property damage clusters */}
                                  <div className="absolute top-[25%] left-[35%] h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                                  <div className="absolute top-[28%] left-[38%] h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                                  <div className="absolute top-[30%] left-[32%] h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
                                  <div className="absolute top-[50%] left-[55%] h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
                                  <div className="absolute top-[53%] left-[58%] h-2 w-2 bg-orange-500 rounded-full animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-black/30 rounded-lg p-3 h-1/2">
                              <div className="flex items-center justify-between mb-3">
                                <div className="h-5 w-1/3 bg-gray-700 rounded flex items-center">
                                  <div className="h-3 w-20 bg-purple-500/70 rounded-sm ml-2"></div>
                                </div>
                                <div className="flex space-x-1">
                                  <div className="text-xs text-gray-400 pr-1">
                                    24h
                                  </div>
                                  <div className="text-xs text-blue-400 border-b border-blue-500">
                                    7d
                                  </div>
                                </div>
                              </div>

                              {/* Lead analytics */}
                              <div className="grid grid-cols-3 gap-2 mb-3">
                                <div className="bg-gray-800/60 p-2 rounded">
                                  <div className="text-xs text-gray-400 mb-1">
                                    New Leads
                                  </div>
                                  <div className="text-sm text-white font-medium">
                                    147
                                  </div>
                                  <div className="text-xs text-green-400">
                                    +23%
                                  </div>
                                </div>
                                <div className="bg-gray-800/60 p-2 rounded">
                                  <div className="text-xs text-gray-400 mb-1">
                                    Qualified
                                  </div>
                                  <div className="text-sm text-white font-medium">
                                    98
                                  </div>
                                  <div className="text-xs text-green-400">
                                    +41%
                                  </div>
                                </div>
                                <div className="bg-gray-800/60 p-2 rounded">
                                  <div className="text-xs text-gray-400 mb-1">
                                    Conversion
                                  </div>
                                  <div className="text-sm text-white font-medium">
                                    32%
                                  </div>
                                  <div className="text-xs text-green-400">
                                    +8%
                                  </div>
                                </div>
                              </div>

                              <div className="flex justify-between items-end h-12 mt-2 px-2">
                                <div className="w-[8%] h-[30%] bg-blue-600/40 rounded-t"></div>
                                <div className="w-[8%] h-[60%] bg-blue-600/50 rounded-t"></div>
                                <div className="w-[8%] h-[45%] bg-blue-600/40 rounded-t"></div>
                                <div className="w-[8%] h-[70%] bg-blue-600/60 rounded-t"></div>
                                <div className="w-[8%] h-[90%] bg-purple-600/70 rounded-t"></div>
                                <div className="w-[8%] h-[60%] bg-blue-600/50 rounded-t"></div>
                                <div className="w-[8%] h-[40%] bg-blue-600/40 rounded-t"></div>
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
                <span className="text-white">Turn Storms Into </span>
                <span className="gradient-text primary-gradient">
                  Opportunities
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Storm Lead Engine combines real-time weather data, property
                intelligence, and AI to help you reach the right properties at
                the right time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiMapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Real-Time Storm Tracking
                </h3>
                <p className="text-gray-400">
                  Integrate with NOAA and other weather services to track hail,
                  wind, and storm events with pinpoint accuracy.
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
                      Live storm cell tracking
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
                      Hail size estimation
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
                      Wind speed monitoring
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiHome size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Property Intelligence
                </h3>
                <p className="text-gray-400">
                  Access detailed property information to identify ideal
                  prospects and tailor your approach based on property
                  characteristics.
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
                      Roof age & material data
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
                      Ownership information
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
                      Insurance claim history
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiPieChart size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  AI Damage Assessment
                </h3>
                <p className="text-gray-400">
                  Our AI analyzes aerial imagery to detect potential roof damage
                  and prioritize properties most likely to need repairs.
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
                      Computer vision analysis
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
                      Damage probability scoring
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
                      Pre/post-storm comparison
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Intelligent Lead Scoring
                </h3>
                <p className="text-gray-400">
                  Prioritize your outreach with AI-powered lead scoring that
                  considers storm impact, property characteristics, and
                  conversion potential.
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
                      Multi-factor scoring algorithm
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
                      Adaptive learning from outcomes
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
                      Prioritized outreach queue
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiActivity size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Campaign Automation
                </h3>
                <p className="text-gray-400">
                  Launch targeted marketing campaigns automatically when storms
                  hit, reaching homeowners when they need your services most.
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
                      Storm-triggered campaigns
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
                      Multi-channel outreach
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
                      Area-specific messaging
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-blue-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-800/30 transition-colors">
                  <FiStar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Team Optimization
                </h3>
                <p className="text-gray-400">
                  Route your sales and inspection teams efficiently with
                  AI-optimized territory planning based on property damage
                  clustering.
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
                      Optimized route planning
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
                      Team territory assignments
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
                      Workload balancing
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
                  Storm Lead Engine
                </span>
                <span className="text-white"> Works</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From storm detection to optimized lead generation, our
                end-to-end process maximizes your team&apos;s efficiency and
                revenue potential.
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
                    Storm Detection & Analysis
                  </h3>
                  <p className="text-gray-300">
                    Our system continuously monitors weather patterns across the
                    country and alerts you when a significant storm impacts your
                    service area. We track precise hail size, wind speeds, and
                    affected geographical regions.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our proprietary storm severity algorithm considers multiple
                    factors beyond standard weather data to identify optimal
                    opportunities.
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
                    Property Data Enrichment
                  </h3>
                  <p className="text-gray-300">
                    Once a storm is detected, we instantly identify all
                    properties in the affected area and enrich them with
                    comprehensive data, including roof age, property value,
                    ownership details, and previous claims history.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our property database refreshes daily with over 150 data
                    points per property, far exceeding industry averages.
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
                    AI Damage Prediction
                  </h3>
                  <p className="text-gray-300">
                    Our AI algorithms analyze aerial imagery, storm data, and
                    property characteristics to predict which properties are
                    most likely to have sustained damage requiring repair or
                    replacement.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our computer vision models achieve 87% accuracy in
                    predicting meaningful damage, reducing wasted time on
                    unqualified leads.
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
                    Lead Scoring & Prioritization
                  </h3>
                  <p className="text-gray-300">
                    Each property is assigned a priority score based on damage
                    likelihood, revenue potential, and conversion probability.
                    Your team receives a ranked list of the most promising
                    opportunities to pursue.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Our adaptive scoring model learns from your past successes
                    to continuously improve lead quality and conversion rates.
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
                    Automated Campaign Execution
                  </h3>
                  <p className="text-gray-300">
                    Launch multi-channel marketing campaigns to affected
                    properties with just one click. Our system generates
                    personalized outreach via direct mail, email, SMS, and
                    digital ads based on property-specific damage predictions.
                  </p>
                  <p className="text-gray-400 mt-4">
                    <span className="text-blue-400 font-medium">
                      Unique advantage:
                    </span>{" "}
                    Outreach can be triggered automatically when storms hit,
                    ensuring you&apos;re the first company to contact
                    homeowners.
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
                    Proven Results
                  </h3>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        68%
                      </div>
                      <p className="text-gray-400">
                        More qualified leads per storm event
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        43%
                      </div>
                      <p className="text-gray-400">
                        Higher contract close rate
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        3.2x
                      </div>
                      <p className="text-gray-400">Return on marketing spend</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text primary-gradient mb-2">
                        5hrs
                      </div>
                      <p className="text-gray-400">
                        Saved per week per sales rep
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
                    &ldquo;BuildFlow&apos;s Storm Lead Engine transformed our
                    business. After implementing it, we&apos;ve seen a 70%
                    increase in qualified leads and our crews are always in the
                    right neighborhoods at the right time. It&apos;s given us a
                    massive competitive advantage.&rdquo;
                  </blockquote>

                  <div className="flex items-center mt-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      MR
                    </div>
                    <div className="ml-4">
                      <div className="text-white font-semibold">
                        Mike Reynolds
                      </div>
                      <div className="text-gray-400 text-sm">
                        CEO, Summit Restoration
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Transform Your Storm Response?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the restoration companies already using BuildFlow to
                dominate their markets.
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
