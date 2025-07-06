import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FiTruck,
  FiCalendar,
  FiFileText,
  FiDollarSign,
  FiCheckSquare,
  FiUsers,
} from "react-icons/fi";

export default function VendorManagementPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/20 to-orange-900/20" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px]" />

          {/* Animated illustration */}
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-yellow-900/10 via-transparent to-transparent opacity-60 blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-yellow-950/40 rounded-full px-3 py-1 text-sm text-yellow-400 mb-4">
                  BuildFlow Feature
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                  <span className="text-white">Vendor </span>
                  <span className="gradient-text primary-gradient">
                    Management
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Streamline subcontractor scheduling, payments, and performance
                  tracking in one system for efficient project management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
                    Request Demo
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-1 rounded-xl shadow-2xl">
                  <div className="bg-gray-900 rounded-lg p-3">
                    <div className="aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                        {/* Vendor Management UI mockup */}
                        <div className="h-full flex flex-col">
                          {/* Header with tabs */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                              <div className="h-8 w-8 rounded-md bg-yellow-600/70 flex items-center justify-center">
                                <FiTruck className="text-white" size={16} />
                              </div>
                              <div className="text-white font-medium">
                                Vendor Dashboard
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                All
                              </div>
                              <div className="px-2 py-1 bg-yellow-600/30 rounded text-xs text-yellow-300">
                                Active
                              </div>
                              <div className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
                                Archived
                              </div>
                            </div>
                          </div>

                          {/* Dashboard content */}
                          <div className="flex-1 flex overflow-hidden">
                            {/* Sidebar navigation */}
                            <div className="w-1/4 border-r border-gray-800 pr-2 overflow-y-auto">
                              {/* Navigation menu */}
                              <div className="space-y-1">
                                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-md p-2 flex items-center">
                                  <div className="h-5 w-5 rounded-md bg-yellow-600/40 flex items-center justify-center mr-2">
                                    <FiUsers
                                      size={12}
                                      className="text-yellow-300"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Vendors
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="h-5 w-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiCalendar
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Scheduling
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="h-5 w-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiFileText
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Work Orders
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="h-5 w-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiDollarSign
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Payments
                                  </div>
                                </div>

                                <div className="bg-gray-800/40 rounded-md p-2 flex items-center">
                                  <div className="h-5 w-5 rounded-md bg-gray-700 flex items-center justify-center mr-2">
                                    <FiCheckSquare
                                      size={12}
                                      className="text-gray-400"
                                    />
                                  </div>
                                  <div className="text-xs font-medium text-white">
                                    Performance
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Main content area */}
                            <div className="w-3/4 pl-2 flex flex-col">
                              {/* Vendor list header */}
                              <div className="bg-gray-800/60 rounded-md p-2 mb-3 flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="text-xs font-medium text-white">
                                    Active Vendors
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <div className="h-6 w-6 rounded-full bg-yellow-600/40 flex items-center justify-center">
                                    <div className="text-[10px] text-yellow-300">
                                      +
                                    </div>
                                  </div>
                                  <div className="bg-gray-700/40 rounded-md px-2 py-1">
                                    <div className="text-[10px] text-gray-300">
                                      Filter
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Vendor list */}
                              <div className="flex-1 bg-gray-800/30 rounded-md p-3 space-y-2 mb-3 overflow-y-auto">
                                {/* Vendor item 1 */}
                                <div className="bg-gray-800/60 rounded-md p-2 hover:bg-gray-700/40 transition-colors border border-yellow-500/30">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="h-8 w-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
                                        <FiUsers
                                          size={14}
                                          className="text-yellow-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-sm font-medium text-white">
                                          ABC Roofing
                                        </div>
                                        <div className="text-xs text-gray-400">
                                          Roofing Contractor • 5 projects
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="px-2 py-0.5 bg-green-900/30 rounded text-xs text-green-400 mr-2">
                                        Active
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Vendor item 2 */}
                                <div className="bg-gray-800/60 rounded-md p-2 hover:bg-gray-700/40 transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="h-8 w-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
                                        <FiUsers
                                          size={14}
                                          className="text-gray-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-sm font-medium text-white">
                                          XYZ Plumbing
                                        </div>
                                        <div className="text-xs text-gray-400">
                                          Plumbing • 3 projects
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="px-2 py-0.5 bg-green-900/30 rounded text-xs text-green-400 mr-2">
                                        Active
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Vendor item 3 */}
                                <div className="bg-gray-800/60 rounded-md p-2 hover:bg-gray-700/40 transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="h-8 w-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
                                        <FiUsers
                                          size={14}
                                          className="text-gray-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-sm font-medium text-white">
                                          123 Electric
                                        </div>
                                        <div className="text-xs text-gray-400">
                                          Electrical • 2 projects
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="px-2 py-0.5 bg-yellow-900/30 rounded text-xs text-yellow-400 mr-2">
                                        Pending Approval
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Vendor item 4 */}
                                <div className="bg-gray-800/60 rounded-md p-2 hover:bg-gray-700/40 transition-colors">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="h-8 w-8 rounded-full bg-gray-700 mr-2 flex items-center justify-center">
                                        <FiUsers
                                          size={14}
                                          className="text-gray-400"
                                        />
                                      </div>
                                      <div>
                                        <div className="text-sm font-medium text-white">
                                          Fast Flooring
                                        </div>
                                        <div className="text-xs text-gray-400">
                                          Flooring • 1 project
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="px-2 py-0.5 bg-green-900/30 rounded text-xs text-green-400 mr-2">
                                        Active
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Quick stats */}
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-gray-800/60 rounded-md p-2 text-center">
                                  <div className="text-[10px] text-gray-400">
                                    Active Vendors
                                  </div>
                                  <div className="text-lg font-bold text-white">
                                    24
                                  </div>
                                </div>
                                <div className="bg-gray-800/60 rounded-md p-2 text-center">
                                  <div className="text-[10px] text-gray-400">
                                    Pending Approvals
                                  </div>
                                  <div className="text-lg font-bold text-white">
                                    3
                                  </div>
                                </div>
                                <div className="bg-gray-800/60 rounded-md p-2 text-center">
                                  <div className="text-[10px] text-gray-400">
                                    Jobs This Week
                                  </div>
                                  <div className="text-lg font-bold text-white">
                                    12
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
                <span className="text-white">Efficient </span>
                <span className="gradient-text primary-gradient">
                  Vendor Management
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive vendor management system brings all your
                subcontractor operations into one streamlined platform for
                better efficiency and oversight.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-yellow-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-800/30 transition-colors">
                  <FiUsers size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Subcontractor Onboarding & Verification
                </h3>
                <p className="text-gray-400">
                  Digitize vendor onboarding with automated document collection,
                  insurance verification, and credential management.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Digital document storage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Insurance verification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      License tracking
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-yellow-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-800/30 transition-colors">
                  <FiCalendar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Automated Scheduling & Dispatching
                </h3>
                <p className="text-gray-400">
                  Efficiently assign and track subcontractor schedules, with
                  automated notifications and real-time updates for all parties.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Visual scheduling tools
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automated notifications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Conflict detection
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-yellow-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-800/30 transition-colors">
                  <FiFileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Digital Work Orders & Approvals
                </h3>
                <p className="text-gray-400">
                  Create, assign, and manage digital work orders with detailed
                  instructions, photos, and approval workflows.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Mobile-friendly work orders
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Multi-level approvals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Photo documentation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-yellow-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-800/30 transition-colors">
                  <FiDollarSign size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Streamlined Payment Management
                </h3>
                <p className="text-gray-400">
                  Process subcontractor invoices, track payment status, and
                  manage expenses all in one system with full visibility.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Digital invoice processing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Automated payment tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Budget integration
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-yellow-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-800/30 transition-colors">
                  <FiCheckSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Contractor Performance Metrics
                </h3>
                <p className="text-gray-400">
                  Track subcontractor performance with metrics on quality,
                  timeliness, and customer satisfaction to improve project
                  outcomes.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Quality scoring
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      On-time completion tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Customer satisfaction data
                    </span>
                  </li>
                </ul>
              </div>

              {/* Feature 6 - Vendor Portal */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 hover:border-yellow-800/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-yellow-900/30 flex items-center justify-center text-yellow-400 mb-6 group-hover:bg-yellow-800/30 transition-colors">
                  <FiTruck size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Vendor Self-Service Portal
                </h3>
                <p className="text-gray-400">
                  Empower subcontractors with a dedicated portal to view work
                  orders, submit invoices, and manage their schedule
                  independently.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Self-service invoice submission
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Work order tracking and management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-900/30 flex items-center justify-center mt-0.5 mr-2">
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
                          className="text-yellow-400"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-400 text-sm">
                      Document and credential updates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Portal Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Vendor </span>
                <span className="gradient-text primary-gradient">
                  Self-Service Portal
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Empower your subcontractors with a dedicated portal that puts
                everything they need at their fingertips, reducing
                administrative overhead.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 mb-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Streamlined Subcontractor Experience
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Subcontractors simply log in to access their personalized
                    dashboard showing all assigned work orders, pending
                    payments, and upcoming schedule.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-400 mr-3">
                          <FiFileText size={18} />
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            View All Work Orders
                          </div>
                          <div className="text-gray-400 text-sm">
                            Complete access to all assigned jobs with full
                            details
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        Subcontractors can view a comprehensive list of all
                        their current and past work orders, with detailed job
                        specifications, location information, and scheduling
                        details in one place.
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-400 mr-3">
                          <FiDollarSign size={18} />
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            Invoice Management
                          </div>
                          <div className="text-gray-400 text-sm">
                            Submit and track payment status for all invoices
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        Easily submit digital invoices for completed work,
                        attach necessary documentation, and track payment status
                        in real-time. Historical invoice records are maintained
                        for reference.
                      </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4 border border-gray-800">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center text-yellow-400 mr-3">
                          <FiCalendar size={18} />
                        </div>
                        <div>
                          <div className="text-white font-medium">
                            Schedule Management
                          </div>
                          <div className="text-gray-400 text-sm">
                            Comprehensive calendar view of all assignments
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-400">
                        Interactive calendar shows all scheduled jobs with the
                        ability to confirm availability, request changes, and
                        set capacity limits to prevent double-booking.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                    <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center">
                      <div className="w-8 h-8 rounded-md bg-yellow-600/70 flex items-center justify-center mr-3">
                        <FiTruck className="text-white" size={16} />
                      </div>
                      <div className="text-white font-medium">
                        Vendor Portal
                      </div>
                    </div>

                    <div className="p-4">
                      {/* Work Orders Tab */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-lg font-medium text-white">
                            My Work Orders
                          </div>
                          <div className="bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded">
                            5 Active
                          </div>
                        </div>

                        <div className="space-y-3">
                          {/* Work Order Item 1 */}
                          <div className="bg-gray-800/60 rounded p-3 border border-yellow-500/20">
                            <div className="flex justify-between mb-2">
                              <div className="text-white font-medium">
                                WO-1234: Roof Replacement
                              </div>
                              <div className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">
                                In Progress
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                              <div className="text-gray-400">
                                Address:{" "}
                                <span className="text-gray-300">
                                  123 Main St
                                </span>
                              </div>
                              <div className="text-gray-400">
                                Due:{" "}
                                <span className="text-gray-300">
                                  Oct 15, 2023
                                </span>
                              </div>
                              <div className="text-gray-400">
                                Contact:{" "}
                                <span className="text-gray-300">
                                  John Smith
                                </span>
                              </div>
                              <div className="text-gray-400">
                                Value:{" "}
                                <span className="text-gray-300">$12,450</span>
                              </div>
                            </div>
                            <div className="flex justify-end space-x-2">
                              <button className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded hover:bg-gray-600">
                                View Details
                              </button>
                              <button className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-1 rounded hover:bg-yellow-900/50">
                                Submit Invoice
                              </button>
                            </div>
                          </div>

                          {/* Work Order Item 2 */}
                          <div className="bg-gray-800/60 rounded p-3">
                            <div className="flex justify-between mb-2">
                              <div className="text-white font-medium">
                                WO-1235: Gutter Installation
                              </div>
                              <div className="bg-blue-900/30 text-blue-400 text-xs px-2 py-0.5 rounded">
                                Scheduled
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                              <div className="text-gray-400">
                                Address:{" "}
                                <span className="text-gray-300">
                                  456 Oak Ave
                                </span>
                              </div>
                              <div className="text-gray-400">
                                Due:{" "}
                                <span className="text-gray-300">
                                  Oct 18, 2023
                                </span>
                              </div>
                              <div className="text-gray-400">
                                Contact:{" "}
                                <span className="text-gray-300">
                                  Mary Johnson
                                </span>
                              </div>
                              <div className="text-gray-400">
                                Value:{" "}
                                <span className="text-gray-300">$3,200</span>
                              </div>
                            </div>
                            <div className="flex justify-end space-x-2">
                              <button className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded hover:bg-gray-600">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 text-center">
                          <button className="text-yellow-400 text-sm hover:underline">
                            View All Work Orders
                          </button>
                        </div>
                      </div>

                      {/* Invoices Section */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-lg font-medium text-white">
                            My Invoices
                          </div>
                          <div className="bg-yellow-600/20 text-yellow-400 text-xs px-2 py-1 rounded">
                            2 Pending
                          </div>
                        </div>

                        <div className="space-y-3">
                          {/* Invoice Item 1 */}
                          <div className="bg-gray-800/60 rounded p-3">
                            <div className="flex justify-between mb-2">
                              <div className="text-white font-medium">
                                INV-567: WO-1230
                              </div>
                              <div className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-0.5 rounded">
                                Pending Approval
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                              <div className="text-gray-400">
                                Amount:{" "}
                                <span className="text-gray-300">$8,750</span>
                              </div>
                              <div className="text-gray-400">
                                Submitted:{" "}
                                <span className="text-gray-300">
                                  Oct 5, 2023
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Invoice Item 2 */}
                          <div className="bg-gray-800/60 rounded p-3">
                            <div className="flex justify-between mb-2">
                              <div className="text-white font-medium">
                                INV-566: WO-1229
                              </div>
                              <div className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded">
                                Paid
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                              <div className="text-gray-400">
                                Amount:{" "}
                                <span className="text-gray-300">$4,200</span>
                              </div>
                              <div className="text-gray-400">
                                Paid Date:{" "}
                                <span className="text-gray-300">
                                  Oct 2, 2023
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 text-center">
                          <button className="text-yellow-400 text-sm hover:underline">
                            View All Invoices
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
                See how businesses are transforming their subcontractor
                management with BuildFlow&apos;s Vendor Management system.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {/* Stat 1 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  85%
                </div>
                <div className="text-gray-400">
                  Reduction in scheduling errors
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  32%
                </div>
                <div className="text-gray-400">Faster invoice processing</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  4.2h
                </div>
                <div className="text-gray-400">Weekly admin time saved</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gray-800 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  28%
                </div>
                <div className="text-gray-400">
                  Improvement in vendor retention
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-yellow-900/50 flex items-center justify-center text-white text-2xl font-bold">
                      MT
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-yellow-400 flex mb-4">
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
                    &quot;The vendor portal has completely transformed how we
                    work with subcontractors. Our vendors can now see all their
                    work orders and easily submit invoices without calling our
                    office. This has cut down administrative work by more than
                    half and significantly improved our vendor
                    relationships.&quot;
                  </blockquote>
                  <div className="text-white font-bold">Michael Thompson</div>
                  <div className="text-gray-400">
                    Operations Director, Thompson Construction Group
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Streamline Your Vendor Management Today
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity">
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
