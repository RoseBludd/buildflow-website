"use client";

import { motion } from "framer-motion";
import {
  FaFileInvoiceDollar,
  FaFilePdf,
  FaImages,
  FaTable,
} from "react-icons/fa";
import { SiZapier, SiTrello, SiAsana, SiSlack } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

export default function ProblemSection() {
  const painPoints = [
    {
      title: "Too Many Disconnected Tools",
      description:
        "Jumping between project management, CRM, invoicing, and communication apps wastes time and creates data silos.",
      icon: "tools",
    },
    {
      title: "Manual Data Entry",
      description:
        "Re-entering the same information across multiple platforms leads to errors and frustrated teams.",
      icon: "data",
    },
    {
      title: "No Storm-Specific Workflows",
      description:
        "Generic software doesn&apos;t understand the unique needs of storm restoration and construction companies.",
      icon: "storm",
    },
    {
      title: "Missed Insights & Intelligence",
      description:
        "Without AI capabilities, you&apos;re making decisions based on incomplete information and missing opportunities.",
      icon: "ai",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Stop Using </span>
              <span className="text-red-500">Broken Tools</span>
              <span className="text-white"> for Modern Problems</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Construction companies are struggling with outdated, disconnected
              software that wasn&apos;t built for their specific needs.
            </p>
          </motion.div>

          <div className="relative mb-20">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-red-800/20 to-red-500/5 blur-3xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 md:p-10 border border-red-900/30 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={point.title}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUpVariants}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                      {getPainPointIcon(point.icon)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-400">{point.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              Your Current Tech Stack
            </h3>
            <p className="text-gray-400">
              A chaotic mess of disconnected apps that don&apos;t talk to each
              other.
            </p>
          </motion.div>

          {/* Tool Chaos Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] bg-black/50 rounded-xl overflow-hidden border border-gray-800"
          >
            <ChaosAppIcons />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border border-red-800 max-w-md text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  There&apos;s a Better Way
                </h3>
                <p className="text-gray-300">
                  One intelligent platform that connects everything you need to
                  run your construction business efficiently.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Integration Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-20 bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-green-800/30"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-green-400">BuildFlow Integrates</span>{" "}
                With What You Already Have
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Don&apos;t throw away your existing investments. BuildFlow
                seamlessly connects with your current CRM, accounting software,
                project management tools, and communication platforms.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  category: "CRM & Sales",
                  tools: "Salesforce, HubSpot, Pipedrive",
                },
                {
                  category: "Project Management",
                  tools: "Monday, Asana, Trello",
                },
                { category: "Accounting", tools: "QuickBooks, Xero, Sage" },
                { category: "Communication", tools: "Slack, Teams, Twilio" },
              ].map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-black/50 rounded-lg p-4 border border-gray-800 hover:border-green-600/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-3">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    {integration.category}
                  </h4>
                  <p className="text-gray-400 text-sm">{integration.tools}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function getPainPointIcon(iconName: string) {
  switch (iconName) {
    case "tools":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "data":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    case "storm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      );
    case "ai":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

function ChaosAppIcons() {
  const appIcons = [
    {
      Icon: AiOutlineProject,
      color: "text-blue-400",
      size: 40,
      x: "10%",
      y: "30%",
    },
    { Icon: SiZapier, color: "text-orange-500", size: 36, x: "25%", y: "15%" },
    { Icon: SiTrello, color: "text-blue-500", size: 38, x: "40%", y: "65%" },
    { Icon: SiAsana, color: "text-red-400", size: 35, x: "70%", y: "25%" },
    {
      Icon: FaFileInvoiceDollar,
      color: "text-green-400",
      size: 42,
      x: "85%",
      y: "55%",
    },
    { Icon: SiSlack, color: "text-purple-500", size: 39, x: "60%", y: "80%" },
    { Icon: FaFilePdf, color: "text-red-500", size: 34, x: "15%", y: "75%" },
    { Icon: FaImages, color: "text-pink-400", size: 37, x: "50%", y: "40%" },
    {
      Icon: BsMicrosoft,
      color: "text-green-600",
      size: 40,
      x: "90%",
      y: "15%",
    },
    { Icon: FaTable, color: "text-blue-300", size: 36, x: "30%", y: "90%" },
  ];

  return (
    <div className="absolute inset-0">
      {appIcons.map(({ Icon, color, size, x, y }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          animate={{
            x: [0, Math.random() * 20 - 10, 0],
            y: [0, Math.random() * 20 - 10, 0],
            rotate: [0, Math.random() * 10 - 5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Chaotic connection lines */}
      <svg className="absolute inset-0 w-full h-full text-gray-800/30">
        <line
          x1="10%"
          y1="30%"
          x2="25%"
          y2="15%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="25%"
          y1="15%"
          x2="40%"
          y2="65%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="40%"
          y1="65%"
          x2="70%"
          y2="25%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="70%"
          y1="25%"
          x2="85%"
          y2="55%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="85%"
          y1="55%"
          x2="60%"
          y2="80%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="60%"
          y1="80%"
          x2="15%"
          y2="75%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="15%"
          y1="75%"
          x2="50%"
          y2="40%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="50%"
          y1="40%"
          x2="90%"
          y2="15%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="90%"
          y1="15%"
          x2="30%"
          y2="90%"
          className="stroke-current"
          strokeWidth="1"
        />
        <line
          x1="30%"
          y1="90%"
          x2="10%"
          y2="30%"
          className="stroke-current"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
