import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiUsers,
  FiCreditCard,
  FiFileText,
  FiCheckSquare,
  FiSettings,
  FiCalendar,
  FiMessageCircle,
} from "react-icons/fi";

export default function CustomerPortalPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-900/20 to-cyan-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-teal-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-teal-950/40 rounded-full px-3 py-1 text-sm text-teal-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Customer </span>
                  <span className="gradient-text primary-gradient">Portal</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Provide clients with a self-service portal to view project
                  status, submit requests, and pay invoices with ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Customer Portal UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Header with user info */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-full bg-teal-600/70 flex items-center justify-center text-white">
                                JD
                              </div>
                              <div>
                                <div className="text-white font-medium">
                                  Johnson Residence
                                </div>
                                <div className="text-xs text-teal-400">
                                  Roof Replacement Project
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-teal-600/30 rounded text-xs text-teal-300">
                                Project Active
                              </div>
                              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                                <FiSettings size={16} />
                              </div>
                            </div>
                          </div>

                          {/* Main content */}
                          <div className="flex-1 flex overflow-hidden">
                            {/* Navigation sidebar */}
                            <div className="w-1/4 border-r border-gray-800 pr-2 overflow-y-auto">
                              <div className="space-y-1">
                                <div className="bg-teal-900/20 border border-teal-500/30 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-teal-600/40 flex items-center justify-center mr-2">
                                    <FiFileText
                                      size={12}
                                      className="text-teal-300"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Project
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiCalendar
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
                                    <FiMessageCircle
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Messages
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiCreditCard
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Invoices
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="w-5 h-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiUsers
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Team
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Main content area */}
                            <div className="w-3/4 pl-2 flex flex-col">
                              {/* Project overview */}
                              <div className="mb-3">
                                <div className="text-sm font-medium text-white mb-2">
                                  Project Overview
                                </div>
                                <div className="bg-gray-800/60 rounded-md p-3">
                                  <div className="flex justify-between items-center mb-2">
                                    <div className="text-white text-sm font-medium">
                                      Roof Replacement
                                    </div>
                                    <div className="px-2 py-0.5 bg-teal-900/30 rounded text-xs text-teal-400">
                                      In Progress
                                    </div>
                                  </div>

                                  <div className="space-y-3">
                                    <div>
                                      <div className="text-xs text-gray-400 mb-1">
                                        Completion
                                      </div>
                                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div
                                          className="h-full bg-teal-500 rounded-full"
                                          style={{ width: "65%" }}
                                        ></div>
                                      </div>
                                      <div className="flex justify-between text-xs mt-1">
                                        <span className="text-gray-400">
                                          Start: Sep 5
                                        </span>
                                        <span className="text-teal-400">
                                          65%
                                        </span>
                                        <span className="text-gray-400">
                                          End: Oct 15
                                        </span>
                                      </div>
                                    </div>

                                    <div className="pt-2 border-t border-gray-700">
                                      <div className="text-xs text-gray-400 mb-2">
                                        Recent Updates
                                      </div>
                                      <div className="text-sm text-white">
                                        Shingle installation completed on south
                                        side of roof. Currently working on north
                                        side. Weather looks favorable for the
                                        next 5 days.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Activity and upcoming */}
                              <div className="flex space-x-2">
                                <div className="w-1/2">
                                  <div className="text-xs font-medium text-white mb-1">
                                    Recent Activity
                                  </div>
                                  <div className="bg-gray-800/60 rounded-md p-2 space-y-2">
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 mt-0.5 rounded-full bg-teal-900/30 flex items-center justify-center">
                                        <FiFileText
                                          size={12}
                                          className="text-teal-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-white text-xs">
                                          Photos uploaded
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                          Yesterday at 4:30 PM
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 mt-0.5 rounded-full bg-teal-900/30 flex items-center justify-center">
                                        <FiCheckSquare
                                          size={12}
                                          className="text-teal-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-white text-xs">
                                          Milestone completed
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                          2 days ago
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-1/2">
                                  <div className="text-xs font-medium text-white mb-1">
                                    Upcoming
                                  </div>
                                  <div className="bg-gray-800/60 rounded-md p-2 space-y-2">
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 mt-0.5 rounded-full bg-teal-900/30 flex items-center justify-center">
                                        <FiCalendar
                                          size={12}
                                          className="text-teal-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-white text-xs">
                                          Inspection
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                          Tomorrow at 2:00 PM
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-start space-x-2">
                                      <div className="w-6 h-6 mt-0.5 rounded-full bg-teal-900/30 flex items-center justify-center">
                                        <FiCreditCard
                                          size={12}
                                          className="text-teal-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-white text-xs">
                                          Payment due
                                        </div>
                                        <div className="text-gray-400 text-xs">
                                          Oct 10, 2023
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Quick actions */}
                              <div className="mt-3">
                                <div className="flex space-x-2">
                                  <button className="bg-teal-600/30 text-teal-300 text-xs rounded-md flex-1 py-2 hover:bg-teal-600/40 transition-colors">
                                    Contact Team
                                  </button>
                                  <button className="bg-gray-800 text-gray-300 text-xs rounded-md flex-1 py-2 hover:bg-gray-700 transition-colors">
                                    Submit Request
                                  </button>
                                  <button className="bg-gray-800 text-gray-300 text-xs rounded-md flex-1 py-2 hover:bg-gray-700 transition-colors">
                                    View Documents
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
                <span className="text-white">Empower Your </span>
                <span className="gradient-text primary-gradient">Clients</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Customer Portal provides a seamless self-service experience
                that enhances client satisfaction while reducing your
                administrative workload.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-teal-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-800/30 transition-colors">
                  <FiFileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Real-time Project Tracking
                </h3>
                <p className="text-gray-400">
                  Give clients full visibility into their project status with
                  detailed progress updates, milestones, and timeline tracking.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Visual progress indicators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Milestone tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Timeline visualization
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-teal-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-800/30 transition-colors">
                  <FiMessageCircle size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Streamlined Communication
                </h3>
                <p className="text-gray-400">
                  Enable direct messaging between clients and your team to keep
                  all project-related conversations in one centralized location.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Threaded conversations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      File and photo sharing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      @mention notifications
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-teal-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-800/30 transition-colors">
                  <FiCreditCard size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Secure Online Payments
                </h3>
                <p className="text-gray-400">
                  Allow clients to view, manage, and pay invoices online with
                  our secure payment processing system integrated directly into
                  the portal.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Credit card and ACH processing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Payment history tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automatic payment reminders
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-teal-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-800/30 transition-colors">
                  <FiCalendar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Scheduling & Appointments
                </h3>
                <p className="text-gray-400">
                  Enable clients to view upcoming appointments and schedule
                  meetings directly through the portal&apos;s integrated
                  calendar system.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Self-service appointment booking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Calendar synchronization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automated reminders
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-teal-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-800/30 transition-colors">
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
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Document Repository
                </h3>
                <p className="text-gray-400">
                  Provide a secure central location for all project documents,
                  contracts, permits, and other important files that clients can
                  access anytime.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Organized file categories
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Secure document sharing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Version control
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-teal-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-800/30 transition-colors">
                  <FiSettings size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Customizable White-Label Portal
                </h3>
                <p className="text-gray-400">
                  Easily customize the portal with your branding, colors, and
                  logo to provide a seamless experience that feels like an
                  extension of your business.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Brand color themes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Custom domain support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-teal-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Configurable modules
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
                See how businesses are transforming their client experience with
                BuildFlow&apos;s Customer Portal.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  93%
                </div>
                <div className="text-gray-400">Client satisfaction rate</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  68%
                </div>
                <div className="text-gray-400">Fewer support calls</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  7.2h
                </div>
                <div className="text-gray-400">Admin time saved weekly</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  35%
                </div>
                <div className="text-gray-400">Faster payment collection</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-teal-900/50 flex items-center justify-center text-white text-2xl font-bold">
                      BM
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-teal-400 flex mb-4">
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
                    &quot;The customer portal has become an essential part of
                    our business. Clients love the transparency and self-service
                    options, while we&apos;ve drastically reduced the time spent
                    on routine client questions and project updates. It&apos;s a
                    win-win that has significantly improved our client
                    relationships.&quot;
                  </blockquote>
                  <div className="text-white font-bold">Barbara Mitchell</div>
                  <div className="text-gray-400">
                    CEO, Cornerstone Home Improvements
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transform Your Client Experience Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
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
