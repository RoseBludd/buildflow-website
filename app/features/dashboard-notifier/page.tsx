import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiDatabase,
  FiFileText,
  FiClock,
  FiPieChart,
  FiTrendingUp,
} from "react-icons/fi";

export default function DashboardNotifierPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-indigo-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-indigo-950/40 rounded-full px-3 py-1 text-sm text-indigo-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">AI Dashboard </span>
                  <span className="gradient-text primary-gradient">
                    Notifier
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Ask Claude to create custom business intelligence reports and
                  schedule automated delivery to your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Dashboard Notifier UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Header with title */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-indigo-600/70 flex items-center justify-center text-white">
                                <FiDatabase size={20} />
                              </div>
                              <div>
                                <div className="text-white font-medium text-lg">
                                  Dashboard Notifier
                                </div>
                                <div className="text-xs text-indigo-400">
                                  Weekly Performance Report
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-indigo-600/30 rounded text-xs text-indigo-300">
                                Scheduled
                              </div>
                            </div>
                          </div>

                          {/* Main content */}
                          <div className="flex-1 flex overflow-hidden">
                            {/* Navigation sidebar */}
                            <div className="w-1/4 border-r border-gray-800 pr-2 overflow-y-auto">
                              <div className="space-y-1">
                                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-indigo-600/40 flex items-center justify-center mr-2">
                                    <FiFileText
                                      size={12}
                                      className="text-indigo-300"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Reports
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiClock
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Schedule
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiPieChart
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Dashboards
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiTrendingUp
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Analytics
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Main content area */}
                            <div className="w-3/4 pl-2 flex flex-col">
                              {/* Report Configuration */}
                              <div className="mb-3">
                                <div className="text-sm font-medium text-white mb-2">
                                  Report Configuration
                                </div>
                                <div className="bg-gray-800/60 rounded-md p-3">
                                  <div className="flex flex-col space-y-3">
                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">
                                        Query
                                      </div>
                                      <div className="bg-gray-900/60 rounded-md p-2 text-indigo-300 text-sm">
                                        Show me weekly sales performance broken
                                        down by region with comparison to last
                                        month
                                      </div>
                                    </div>

                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">
                                        Schedule
                                      </div>
                                      <div className="flex justify-between text-xs bg-gray-900/60 rounded-md p-2">
                                        <span className="text-white">
                                          Every Monday at 8:00 AM
                                        </span>
                                        <span className="text-indigo-400">
                                          Next: Jun 10
                                        </span>
                                      </div>
                                    </div>

                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">
                                        Recipients
                                      </div>
                                      <div className="flex flex-wrap gap-2">
                                        <div className="bg-indigo-900/30 text-indigo-300 text-xs rounded px-2 py-1 flex items-center">
                                          <span className="w-4 h-4 bg-indigo-700 rounded-full mr-1 flex items-center justify-center text-[10px]">
                                            JD
                                          </span>
                                          <span>John Doe</span>
                                        </div>
                                        <div className="bg-indigo-900/30 text-indigo-300 text-xs rounded px-2 py-1 flex items-center">
                                          <span className="w-4 h-4 bg-indigo-700 rounded-full mr-1 flex items-center justify-center text-[10px]">
                                            SM
                                          </span>
                                          <span>Sales Managers</span>
                                        </div>
                                        <div className="bg-indigo-900/30 text-indigo-300 text-xs rounded px-2 py-1 flex items-center">
                                          <span className="w-4 h-4 bg-indigo-700 rounded-full mr-1 flex items-center justify-center text-[10px]">
                                            +
                                          </span>
                                          <span>Add recipient</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Preview */}
                              <div className="mb-3">
                                <div className="text-sm font-medium text-white mb-2 flex justify-between items-center">
                                  <span>Preview</span>
                                  <span className="text-xs text-indigo-400">
                                    Updated 2 hours ago
                                  </span>
                                </div>
                                <div className="bg-gray-800/60 rounded-md p-3 h-[150px] relative">
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="grid grid-cols-3 gap-2 w-full px-4">
                                      <div className="h-16 bg-indigo-900/30 rounded flex flex-col items-center justify-center">
                                        <div className="text-indigo-300 text-xs">
                                          North
                                        </div>
                                        <div className="text-white text-sm font-semibold">
                                          $42.5K
                                        </div>
                                        <div className="text-green-400 text-xs">
                                          +12%
                                        </div>
                                      </div>
                                      <div className="h-16 bg-indigo-900/30 rounded flex flex-col items-center justify-center">
                                        <div className="text-indigo-300 text-xs">
                                          South
                                        </div>
                                        <div className="text-white text-sm font-semibold">
                                          $38.2K
                                        </div>
                                        <div className="text-red-400 text-xs">
                                          -3%
                                        </div>
                                      </div>
                                      <div className="h-16 bg-indigo-900/30 rounded flex flex-col items-center justify-center">
                                        <div className="text-indigo-300 text-xs">
                                          West
                                        </div>
                                        <div className="text-white text-sm font-semibold">
                                          $51.8K
                                        </div>
                                        <div className="text-green-400 text-xs">
                                          +8%
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="mt-auto">
                                <div className="flex space-x-2">
                                  <button className="bg-indigo-600/30 text-indigo-300 text-xs rounded-md flex-1 py-2 hover:bg-indigo-600/40 transition-colors">
                                    Update Report
                                  </button>
                                  <button className="bg-gray-800 text-gray-300 text-xs rounded-md flex-1 py-2 hover:bg-gray-700 transition-colors">
                                    Run Now
                                  </button>
                                  <button className="bg-gray-800 text-gray-300 text-xs rounded-md flex-1 py-2 hover:bg-gray-700 transition-colors">
                                    Share
                                  </button>
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
                <span className="text-white">Powerful Business </span>
                <span className="gradient-text primary-gradient">
                  Intelligence
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your data into actionable insights with AI-powered
                reporting that delivers the right information to the right
                people at the right time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-indigo-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-800/30 transition-colors">
                  <FiFileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Natural Language Queries
                </h3>
                <p className="text-gray-400">
                  Ask questions in plain English and let Claude interpret your
                  needs to create custom reports and dashboards with relevant
                  metrics.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      No SQL knowledge required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Contextual understanding of your data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Iterative refinement of reports
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-indigo-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-800/30 transition-colors">
                  <FiClock size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automated Reporting Schedules
                </h3>
                <p className="text-gray-400">
                  Set up recurring reports on your desired schedule and
                  automatically deliver them to team members, clients, or
                  stakeholders via email.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Flexible scheduling options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Multiple delivery formats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Recipient group management
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-indigo-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-800/30 transition-colors">
                  <FiPieChart size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Customizable Dashboard Views
                </h3>
                <p className="text-gray-400">
                  Create personalized dashboards with the metrics and
                  visualizations that matter most to different roles and
                  departments in your organization.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Drag-and-drop interface
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Multiple visualization types
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Role-based access controls
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-indigo-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-800/30 transition-colors">
                  <FiTrendingUp size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Predictive Analytics & Forecasting
                </h3>
                <p className="text-gray-400">
                  Leverage AI to identify trends, predict future outcomes, and
                  receive proactive alerts about potential issues or
                  opportunities.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Trend identification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Anomaly detection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Proactive business alerts
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-indigo-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-800/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                    <line x1="8" y1="9" x2="16" y2="9"></line>
                    <line x1="8" y1="13" x2="14" y2="13"></line>
                    <line x1="8" y1="17" x2="12" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Data Storytelling
                </h3>
                <p className="text-gray-400">
                  Turn raw data into compelling narratives with AI-generated
                  insights and explanations that help everyone understand the
                  meaning behind the numbers.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Contextual explanations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Key insights highlighting
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Executive summaries
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-indigo-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-indigo-900/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-800/30 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Enterprise-Grade Security
                </h3>
                <p className="text-gray-400">
                  Rest easy knowing your business data is protected with
                  enterprise-level security features and role-based access
                  controls.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      End-to-end encryption
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Granular permission controls
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-indigo-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Audit logging and compliance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Real-World </span>
                <span className="gradient-text primary-gradient">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming their data strategy with
                BuildFlow&apos;s AI Dashboard Notifier.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  87%
                </div>
                <div className="text-gray-400">Faster report creation</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  63%
                </div>
                <div className="text-gray-400">More data-driven decisions</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  5.3h
                </div>
                <div className="text-gray-400">Analyst time saved weekly</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  42%
                </div>
                <div className="text-gray-400">Increase in report sharing</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-indigo-900/50 flex items-center justify-center text-white text-2xl font-bold">
                      RJ
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-indigo-400 flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-1"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-xl text-white italic mb-6">
                    &quot;The AI Dashboard Notifier has transformed how we use
                    data across our organization. Instead of spending hours
                    creating reports, our team simply asks Claude what they need
                    to know. The scheduled delivery ensures everyone has the
                    right information at the right time, and the insights have
                    directly contributed to a 20% increase in our operational
                    efficiency.&quot;
                  </blockquote>
                  <div className="text-white font-bold">Rebecca Johnson</div>
                  <div className="text-gray-400">
                    COO, Summit Construction Group
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transform Your Business Intelligence Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                  Schedule a Demo
                </button>
                <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
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
