"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiDatabase,
  FiLayers,
  FiCpu,
  FiSettings,
  FiCode,
  FiShield,
} from "react-icons/fi";

export default function VibezsTechSection() {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute right-0 top-1/4 w-1/2 h-3/4 bg-gradient-radial from-purple-900/20 via-transparent to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Powered by </span>
              <span className="gradient-text primary-gradient">Vibezs.io</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The intelligent metadata-driven architecture that brings BuildFlow
              to life with modular microservices and AI-powered automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                The Machine That Prints Systems
              </h3>
              <p className="text-gray-300 mb-6">
                Vibezs.io is a revolutionary metadata-first platform that can
                deploy, connect, and manage modular microservices on demand.
                It&apos;s the engine that makes BuildFlow powerful, adaptable,
                and future-proof.
              </p>

              <div className="space-y-4">
                <TechFeature
                  icon={<FiLayers />}
                  title="Metadata-Driven Architecture"
                  description="Systems defined by their metadata, not hard-coded logic, making them infinitely adaptable."
                />
                <TechFeature
                  icon={<FiDatabase />}
                  title="Dynamic Microservices"
                  description="Modules that can be deployed, connected, and versioned independently as needed."
                />
                <TechFeature
                  icon={<FiCpu />}
                  title="AI-Enhanced Core"
                  description="AI capabilities woven throughout the system for intelligent automation and insights."
                />
              </div>
            </motion.div>

            {/* Visual representation of Vibezs.io */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 relative overflow-hidden"
            >
              {/* Blueprint background */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(59,130,246,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="relative">
                {/* Central node */}
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                  <FiSettings className="w-8 h-8 text-white" />
                </div>

                <div className="text-center mb-8">
                  <div className="text-xl font-semibold text-white mb-1">
                    Vibezs.io Core
                  </div>
                  <div className="text-sm text-blue-400">
                    Metadata Management Engine
                  </div>
                </div>

                {/* Connected modules visualization */}
                <div className="grid grid-cols-3 gap-4">
                  {["API", "UI", "Logic", "Data", "Auth", "AI"].map(
                    (module, index) => (
                      <motion.div
                        key={module}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-center relative"
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="4"
                              fill="url(#paint0_linear)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear"
                                x1="0"
                                y1="0"
                                x2="40"
                                y2="40"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#3B82F6" />
                                <stop offset="1" stopColor="#8B5CF6" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-blue-400 text-sm font-mono mb-1">
                          {module}
                        </div>
                        <div className="text-xs text-gray-400">Module</div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* CADIS section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 md:p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 flex-shrink-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 12H8M16 12H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3V8M12 16V21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Meet CADIS
                </h3>
                <p className="text-gray-300">
                  The Context-Aware Digital Intelligence System that powers
                  BuildFlow&apos;s AI capabilities. CADIS understands your
                  business context and data relationships, providing intelligent
                  assistance and automation across the platform.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <CapabilityCard
                title="Ask Anything"
                description="Query your business data in natural language and get instant visualizations and insights."
              />
              <CapabilityCard
                title="Automate Everything"
                description="Set up intelligent workflows that adapt to your needs without complex programming."
              />
              <CapabilityCard
                title="Predict Outcomes"
                description="Let AI analyze your historical data to forecast trends and recommend actions."
              />
            </div>
          </motion.div>

          {/* Enterprise capabilities */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enterprise-Ready Capabilities
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Built with security, scalability, and extensibility at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <EnterpriseFeature
              icon={<FiShield />}
              title="Role-Based Access Control"
              description="Fine-grained permissions and access management for teams of any size."
            />
            <EnterpriseFeature
              icon={<FiCode />}
              title="API-First Development"
              description="Well-documented APIs for extending and integrating with your existing tools."
            />
            <EnterpriseFeature
              icon={<FiLayers />}
              title="White-Label Ready"
              description="Fully customizable branding and UI to match your company identity."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Link
              href="/developers"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity"
            >
              Learn more about Vibezs.io technology
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function CapabilityCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black/40 border border-gray-800 rounded-xl p-5 hover:bg-black/60 transition-colors">
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

function EnterpriseFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center text-blue-400 mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
