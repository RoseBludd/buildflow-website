import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiMessageSquare,
  FiPhone,
  FiMail,
  FiCalendar,
  FiBell,
  FiUsers,
  FiSettings,
} from "react-icons/fi";

export default function UnifiedMessagingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-900/20 to-teal-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-green-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-green-950/40 rounded-full px-3 py-1 text-sm text-green-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Unified </span>
                  <span className="gradient-text primary-gradient">
                    Messaging
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Keep all client and team communications in one place with SMS,
                  email, and in-app messaging for seamless collaboration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Unified Messaging UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Header with tabs */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-md bg-green-600/70 flex items-center justify-center">
                                <FiMessageSquare
                                  className="text-white"
                                  size={16}
                                />
                              </div>
                              <div className="text-white font-medium">
                                Client Communications
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                All
                              </div>
                              <div className="px-2 py-1 bg-green-600/30 rounded text-xs text-green-300">
                                Active
                              </div>
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                Archived
                              </div>
                            </div>
                          </div>

                          {/* Conversation list and message view */}
                          <div className="flex-1 flex overflow-hidden">
                            {/* Conversation list */}
                            <div className="w-1/3 border-r border-gray-800 pr-2 overflow-y-auto">
                              {/* Search bar */}
                              <div className="bg-gray-800/60 rounded-md p-1.5 mb-3 flex items-center">
                                <div className="h-3 w-3 rounded-full bg-gray-600 mr-2"></div>
                                <div className="h-3 w-28 bg-gray-700 rounded"></div>
                              </div>

                              {/* Conversation items */}
                              <div className="space-y-2">
                                <div className="bg-green-900/20 border border-green-500/30 rounded-md p-2">
                                  <div className="flex items-center mb-1">
                                    <div className="h-6 w-6 rounded-full bg-gray-700 mr-2"></div>
                                    <div>
                                      <div className="text-xs font-medium text-white">
                                        Johnson Family
                                      </div>
                                      <div className="text-xs text-green-300 flex items-center">
                                        <FiMessageSquare
                                          size={8}
                                          className="mr-1"
                                        />
                                        SMS
                                      </div>
                                    </div>
                                    <div className="ml-auto text-[10px] text-gray-400">
                                      12m
                                    </div>
                                  </div>
                                  <div className="text-[10px] text-gray-400 truncate">
                                    Latest message preview will appear here...
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2">
                                  <div className="flex items-center mb-1">
                                    <div className="h-6 w-6 rounded-full bg-gray-700 mr-2"></div>
                                    <div>
                                      <div className="text-xs font-medium text-white">
                                        Smith Residence
                                      </div>
                                      <div className="text-xs text-blue-300 flex items-center">
                                        <FiMail size={8} className="mr-1" />
                                        Email
                                      </div>
                                    </div>
                                    <div className="ml-auto text-[10px] text-gray-400">
                                      2h
                                    </div>
                                  </div>
                                  <div className="text-[10px] text-gray-400 truncate">
                                    Latest message preview will appear here...
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2">
                                  <div className="flex items-center mb-1">
                                    <div className="h-6 w-6 rounded-full bg-gray-700 mr-2"></div>
                                    <div>
                                      <div className="text-xs font-medium text-white">
                                        Wilson Project
                                      </div>
                                      <div className="text-xs text-purple-300 flex items-center">
                                        <FiPhone size={8} className="mr-1" />
                                        Voice
                                      </div>
                                    </div>
                                    <div className="ml-auto text-[10px] text-gray-400">
                                      Fri
                                    </div>
                                  </div>
                                  <div className="text-[10px] text-gray-400 truncate">
                                    Latest message preview will appear here...
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Message view */}
                            <div className="w-2/3 pl-2 flex flex-col">
                              {/* Conversation header */}
                              <div className="bg-gray-800/60 rounded-md p-2 mb-3 flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="h-6 w-6 rounded-full bg-gray-700 mr-2"></div>
                                  <div>
                                    <div className="text-xs font-medium text-white">
                                      Johnson Family
                                    </div>
                                    <div className="text-[10px] text-gray-400">
                                      Roof Repair • $18,450
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                                    <FiPhone
                                      size={10}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="h-5 w-5 rounded-full bg-gray-700 flex items-center justify-center">
                                    <FiCalendar
                                      size={10}
                                      className="text-gray-400"
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* Message thread */}
                              <div className="flex-1 bg-gray-800/30 rounded-md p-3 space-y-3 mb-3 overflow-y-auto">
                                {/* Received message */}
                                <div className="flex items-start">
                                  <div className="h-6 w-6 rounded-full bg-gray-700 mr-2 flex-shrink-0 mt-1"></div>
                                  <div className="bg-gray-800 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                                    <div className="text-xs text-white">
                                      Hi, I&apos;m wondering when the team will
                                      arrive tomorrow?
                                    </div>
                                    <div className="text-[10px] text-gray-400 text-right mt-1">
                                      10:42 AM
                                    </div>
                                  </div>
                                </div>

                                {/* Sent message */}
                                <div className="flex items-start justify-end">
                                  <div className="bg-green-700/30 rounded-lg rounded-tr-none p-2 max-w-[80%]">
                                    <div className="text-xs text-white">
                                      Good morning! The team is scheduled to
                                      arrive between 9-10 AM. I&apos;ll send you
                                      a notification when they&apos;re on the
                                      way.
                                    </div>
                                    <div className="text-[10px] text-gray-400 text-right mt-1">
                                      11:15 AM
                                    </div>
                                  </div>
                                  <div className="h-6 w-6 rounded-full bg-green-600/40 ml-2 flex-shrink-0 mt-1 flex items-center justify-center">
                                    <div className="text-[10px] text-green-300">
                                      JD
                                    </div>
                                  </div>
                                </div>

                                {/* Received message */}
                                <div className="flex items-start">
                                  <div className="h-6 w-6 rounded-full bg-gray-700 mr-2 flex-shrink-0 mt-1"></div>
                                  <div className="bg-gray-800 rounded-lg rounded-tl-none p-2 max-w-[80%]">
                                    <div className="text-xs text-white">
                                      Perfect, thank you!
                                    </div>
                                    <div className="text-[10px] text-gray-400 text-right mt-1">
                                      11:17 AM
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Message input */}
                              <div className="bg-gray-800/60 rounded-md p-2 flex items-center">
                                <div className="flex space-x-2 mr-2">
                                  <div className="h-6 w-6 rounded-full bg-gray-700 flex items-center justify-center">
                                    <div className="text-[10px] text-gray-400">
                                      +
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 h-6 bg-gray-700/40 rounded-md"></div>
                                <div className="ml-2 h-6 w-6 rounded-full bg-green-600 flex items-center justify-center">
                                  <div className="h-2 w-2 border-t border-r border-white rotate-45 translate-x-[-1px]"></div>
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
                <span className="text-white">Streamline </span>
                <span className="gradient-text primary-gradient">
                  Communication
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our Unified Messaging platform brings all your client and team
                communications into one seamless workspace, enhancing
                collaboration and customer experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-800/30 transition-colors">
                  <FiMessageSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Two-Way SMS & Email Messaging
                </h3>
                <p className="text-gray-400">
                  Send and receive text messages and emails directly within the
                  platform. Keep all communication history in one place for easy
                  reference.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Real-time messaging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Multi-channel support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Centralized history
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-800/30 transition-colors">
                  <FiBell size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automated Appointment Reminders
                </h3>
                <p className="text-gray-400">
                  Schedule and send automated appointment reminders to reduce
                  no-shows and keep clients informed about upcoming visits.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Customizable schedules
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      SMS & email delivery
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Confirmation tracking
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-800/30 transition-colors">
                  <FiUsers size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Team Collaboration Tools
                </h3>
                <p className="text-gray-400">
                  Enable your team to collaborate efficiently with internal
                  messaging, shared client notes, and conversation assignments.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Internal chat channels
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Conversation assignments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Shared client notes
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-800/30 transition-colors">
                  <FiPhone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Call Tracking & Recording
                </h3>
                <p className="text-gray-400">
                  Track all phone interactions with built-in call logging and
                  recording for quality assurance and training purposes.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Call recording & logs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Voicemail transcription
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Call analytics
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-800/30 transition-colors">
                  <FiCalendar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Message Templates & Scheduling
                </h3>
                <p className="text-gray-400">
                  Create reusable message templates and schedule messages to be
                  sent at specific times for efficient communication.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Custom template library
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Scheduled messaging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Dynamic field insertion
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-green-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-green-900/30 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-800/30 transition-colors">
                  <FiSettings size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Integration & Automation
                </h3>
                <p className="text-gray-400">
                  Connect to your other business systems and automate
                  communication workflows for maximum efficiency.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      CRM & project sync
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automated workflows
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-green-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">API access</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">How </span>
                <span className="gradient-text primary-gradient">
                  Unified Messaging Works
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our context-aware communication platform intelligently connects
                conversations with your business data for a truly integrated
                experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mb-12">
              {/* Step 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-4 text-2xl font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Context-Aware Tagging System
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Our intelligent system recognizes entities in your
                      conversations. Simply type @ to tag and link to relevant
                      business objects - customers, projects, properties,
                      documents, team members, or even weather events.
                    </p>

                    <div className="bg-black/30 rounded-lg p-4 mb-6 border border-gray-800">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-green-900/30 flex items-center justify-center text-white">
                          JD
                        </div>
                        <div className="text-gray-400 text-sm">
                          John (Support)
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-white mb-2">
                          I&apos;ve scheduled a follow-up with{" "}
                          <span className="bg-green-900/40 text-green-400 px-1.5 py-0.5 rounded">
                            @Johnson Family
                          </span>{" "}
                          about the{" "}
                          <span className="bg-blue-900/40 text-blue-400 px-1.5 py-0.5 rounded">
                            @Roof Repair Project
                          </span>
                          .
                        </p>
                        <p className="text-white">
                          Based on{" "}
                          <span className="bg-purple-900/40 text-purple-400 px-1.5 py-0.5 rounded">
                            @Storm Report #127
                          </span>
                          , we should also check their{" "}
                          <span className="bg-yellow-900/40 text-yellow-400 px-1.5 py-0.5 rounded">
                            @Insurance Claim
                          </span>{" "}
                          status.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Tags are automatically linked to your database records
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          One-click access to comprehensive customer or project
                          data
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Smart suggestions based on conversation context
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-4 text-2xl font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Intelligent Cross-Reference System
                    </h3>
                    <p className="text-gray-300 mb-6">
                      The system automatically shows relevant information from
                      connected systems, so you have project details, customer
                      history, and property information at your fingertips
                      during any conversation.
                    </p>

                    <div className="bg-black/30 rounded-lg p-4 border border-gray-800 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                          <div className="text-white">Johnson Family</div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="px-2 py-1 bg-green-900/30 rounded text-xs text-green-300">
                            Active Client
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-2">
                        <div className="bg-gray-800/50 rounded p-2">
                          <div className="text-gray-400 text-xs mb-1">
                            Projects
                          </div>
                          <div className="text-white text-sm">Roof Repair</div>
                          <div className="text-green-400 text-xs">
                            In Progress
                          </div>
                        </div>
                        <div className="bg-gray-800/50 rounded p-2">
                          <div className="text-gray-400 text-xs mb-1">
                            Property
                          </div>
                          <div className="text-white text-sm">
                            123 Oak Street
                          </div>
                          <div className="text-blue-400 text-xs">
                            Single Family
                          </div>
                        </div>
                        <div className="bg-gray-800/50 rounded p-2">
                          <div className="text-gray-400 text-xs mb-1">
                            Insurance
                          </div>
                          <div className="text-white text-sm">Claim #8432</div>
                          <div className="text-yellow-400 text-xs">
                            Processing
                          </div>
                        </div>
                        <div className="bg-gray-800/50 rounded p-2">
                          <div className="text-gray-400 text-xs mb-1">
                            Documents
                          </div>
                          <div className="text-white text-sm">
                            3 Contract Files
                          </div>
                          <div className="text-purple-400 text-xs">
                            View All
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Real-time data from all integrated systems
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Contextual insights without leaving the conversation
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Centralized information reduces app switching
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-4 text-2xl font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Unified Conversation History
                    </h3>
                    <div className="text-gray-300 mb-6">
                      All communication—regardless of channel—is stored in a
                      single thread. View complete conversation history across
                      SMS, email, voice, and in-app messages in one
                      chronological timeline.
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 border border-gray-800 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="h-8 w-8 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                            <FiMail size={14} />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-800/50 rounded-lg p-2">
                              <div className="text-xs text-gray-400 mb-1">
                                Email • May 12, 2023 • 9:14 AM
                              </div>
                              <div className="text-sm text-white">
                                Initial inquiry about roof repair options and
                                pricing...
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="h-8 w-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
                            <FiPhone size={14} />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-800/50 rounded-lg p-2">
                              <div className="text-xs text-gray-400 mb-1">
                                Call • May 13, 2023 • 11:30 AM • 8m 24s
                              </div>
                              <div className="text-sm text-white">
                                Discussed damage assessment and scheduling site
                                visit...
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="h-8 w-8 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                            <FiMessageSquare size={14} />
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-800/50 rounded-lg p-2">
                              <div className="text-xs text-gray-400 mb-1">
                                SMS • May 14, 2023 • 4:22 PM
                              </div>
                              <div className="text-sm text-white">
                                Confirming site visit for tomorrow at 2pm...
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Full communication history across all channels
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Seamless context switching between channels
                        </span>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                              className="text-green-400"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-300">
                          Searchable communication archives
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Real-World </span>
                <span className="gradient-text primary-gradient">Results</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming their communication and
                collaboration with BuildFlow&apos;s Unified Messaging.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  67%
                </div>
                <div className="text-gray-400">Faster response time</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  93%
                </div>
                <div className="text-gray-400">
                  Improved client satisfaction
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  45%
                </div>
                <div className="text-gray-400">
                  Reduction in missed messages
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  3.5h
                </div>
                <div className="text-gray-400">
                  Time saved per team member weekly
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-green-900/50 flex items-center justify-center text-white text-2xl font-bold">
                      AR
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-green-400 flex mb-4">
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
                    &quot;The context-aware messaging has completely transformed
                    how we communicate with clients. Being able to tag projects,
                    properties, and team members means nothing falls through the
                    cracks. Everyone is on the same page, with all the
                    information they need right in the conversation.&quot;
                  </blockquote>
                  <div className="text-white font-bold">Alex Rodriguez</div>
                  <div className="text-gray-400">
                    Operations Manager, Coastal Renovations
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Unify Your Team&apos;s Communication Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
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
