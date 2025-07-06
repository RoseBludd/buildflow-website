import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiBriefcase,
  FiCalendar,
  FiTruck,
  FiCheckSquare,
  FiTool,
} from "react-icons/fi";

export default function JobManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-900/20 to-purple-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-pink-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-pink-950/40 rounded-full px-3 py-1 text-sm text-pink-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Job </span>
                  <span className="gradient-text primary-gradient">
                    Management
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  End-to-end job management from initial assessment to final
                  inspection and warranty.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Job Management UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Header with job info */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-pink-600/70 flex items-center justify-center text-white">
                                <FiBriefcase size={20} />
                              </div>
                              <div>
                                <div className="text-white font-medium text-lg">
                                  Roof Replacement #JB1082
                                </div>
                                <div className="text-xs text-pink-400">
                                  153 Oakwood Drive • In Progress
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-pink-600/30 rounded text-xs text-pink-300">
                                65% Complete
                              </div>
                            </div>
                          </div>

                          {/* Main content */}
                          <div className="flex-1 flex overflow-hidden">
                            {/* Navigation sidebar */}
                            <div className="w-1/4 border-r border-gray-800 pr-2 overflow-y-auto">
                              <div className="space-y-1">
                                <div className="bg-pink-900/20 border border-pink-500/30 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-pink-600/40 flex items-center justify-center mr-2">
                                    <FiCalendar
                                      size={12}
                                      className="text-pink-300"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Schedule
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiTruck
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Materials
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiCheckSquare
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Inspections
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiTool
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Warranty
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Main content area */}
                            <div className="w-3/4 pl-2 flex flex-col">
                              {/* Schedule view */}
                              <div className="mb-3">
                                <div className="text-sm font-medium text-white mb-2">
                                  Job Schedule
                                </div>
                                <div className="bg-gray-800/60 rounded-md p-3">
                                  <div className="flex flex-col space-y-3">
                                    <div className="flex justify-between items-center">
                                      <div className="text-white text-sm font-medium">
                                        This Week
                                      </div>
                                      <div className="text-xs text-pink-400">
                                        Oct 9 - Oct 15
                                      </div>
                                    </div>

                                    {/* Timeline events */}
                                    <div className="space-y-3 pt-2">
                                      <div className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
                                          <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-green-400"
                                          >
                                            <path
                                              d="M10 3L4.5 8.5L2 6"
                                              stroke="currentColor"
                                              strokeWidth="1.5"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                            />
                                          </svg>
                                        </div>
                                        <div>
                                          <div className="text-white text-sm">
                                            Materials Delivered
                                          </div>
                                          <div className="text-gray-400 text-xs">
                                            Oct 9, 8:30 AM • Completed
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
                                          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                                        </div>
                                        <div>
                                          <div className="text-white text-sm">
                                            Tear Off & Replacement
                                          </div>
                                          <div className="text-gray-400 text-xs">
                                            Oct 10-12 • In Progress
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mt-0.5 mr-2"></div>
                                        <div>
                                          <div className="text-gray-300 text-sm">
                                            City Inspection
                                          </div>
                                          <div className="text-gray-500 text-xs">
                                            Oct 13, 1:00 PM • Scheduled
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center mt-0.5 mr-2"></div>
                                        <div>
                                          <div className="text-gray-300 text-sm">
                                            Final Cleanup
                                          </div>
                                          <div className="text-gray-500 text-xs">
                                            Oct 14, 9:00 AM • Scheduled
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Quick actions */}
                              <div className="mt-auto">
                                <div className="flex space-x-2">
                                  <button className="bg-pink-600/30 text-pink-300 text-xs rounded-md flex-1 py-2 hover:bg-pink-600/40 transition-colors">
                                    Update Schedule
                                  </button>
                                  <button className="bg-gray-800 text-gray-300 text-xs rounded-md flex-1 py-2 hover:bg-gray-700 transition-colors">
                                    Add Crew Note
                                  </button>
                                  <button className="bg-gray-800 text-gray-300 text-xs rounded-md flex-1 py-2 hover:bg-gray-700 transition-colors">
                                    View Details
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
                <span className="text-white">Streamlined </span>
                <span className="gradient-text primary-gradient">
                  Project Management
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive job management system helps you track every
                aspect of your projects from start to finish, ensuring nothing
                falls through the cracks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-pink-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-800/30 transition-colors">
                  <FiCalendar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Interactive Job Scheduling
                </h3>
                <p className="text-gray-400">
                  Create and manage detailed project timelines with
                  drag-and-drop simplicity, ensuring optimal crew utilization
                  and project sequencing.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Visual timeline management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Resource allocation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Weather-aware planning
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-pink-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-800/30 transition-colors">
                  <FiTruck size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Material Ordering & Tracking
                </h3>
                <p className="text-gray-400">
                  Streamline material procurement with automated ordering,
                  delivery tracking, and inventory management to prevent costly
                  project delays.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automated material takeoffs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Vendor order management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Real-time inventory tracking
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-pink-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-800/30 transition-colors">
                  <FiCheckSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Quality Control Checklists
                </h3>
                <p className="text-gray-400">
                  Ensure consistent quality on every job with customizable
                  inspection checklists, photo documentation, and digital
                  sign-offs at each project stage.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Customizable inspection points
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Photo documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Digital approval workflows
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-pink-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-800/30 transition-colors">
                  <FiTool size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Warranty Management
                </h3>
                <p className="text-gray-400">
                  Track warranty periods, schedule maintenance visits, and
                  quickly respond to warranty claims with all project details at
                  your fingertips.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automated warranty tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Maintenance scheduling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Claim response workflows
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-pink-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-800/30 transition-colors">
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
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  GPS Crew Tracking
                </h3>
                <p className="text-gray-400">
                  Monitor crew locations in real-time, optimize travel routes,
                  and provide accurate arrival time estimates to improve
                  customer satisfaction.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Live location tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Route optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Customer ETA notifications
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-pink-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-800/30 transition-colors">
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
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Mobile-First Field App
                </h3>
                <p className="text-gray-400">
                  Empower your field teams with a powerful mobile app that works
                  offline and syncs automatically when back online, ensuring
                  uninterrupted productivity.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Offline functionality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Real-time data capture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-pink-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Instant team communication
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
                <span className="text-white">Proven </span>
                <span className="gradient-text primary-gradient">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how construction companies are transforming their operations
                with BuildFlow&apos;s Job Management.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  46%
                </div>
                <div className="text-gray-400">Time saved on scheduling</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  89%
                </div>
                <div className="text-gray-400">Fewer job delays</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  28%
                </div>
                <div className="text-gray-400">Reduction in material waste</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  3.5x
                </div>
                <div className="text-gray-400">More jobs completed monthly</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-pink-900/50 flex items-center justify-center text-white text-2xl font-bold">
                      MT
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-pink-400 flex mb-4">
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
                    &quot;BuildFlow&apos;s Job Management system has
                    revolutionized how we handle our roofing projects.
                    We&apos;ve eliminated scheduling conflicts, reduced material
                    overages, and our crews always know exactly what
                    they&apos;re doing each day. The quality control checklists
                    have drastically improved our workmanship and customer
                    satisfaction scores.&quot;
                  </blockquote>
                  <div className="text-white font-bold">Michael Torres</div>
                  <div className="text-gray-400">
                    Operations Director, Elite Roofing Solutions
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transform Your Job Management Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
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
