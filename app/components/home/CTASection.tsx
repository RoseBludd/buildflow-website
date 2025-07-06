"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent opacity-50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-white">Ready to </span>
              <span className="gradient-text primary-gradient">Transform</span>
              <span className="text-white"> Your Construction Business?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the waitlist for early access to BuildFlow or schedule a
              personalized demo to see how it can work for your specific needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Join the Waitlist
                </h3>
                <p className="text-gray-300 mb-6">
                  Be the first to experience BuildFlow and get exclusive early
                  access pricing when we launch.
                </p>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-400 mb-1"
                      >
                        Work Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@company.com"
                        required
                        className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center ${
                        isLoading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-4 text-center">
                    <svg
                      className="w-10 h-10 text-green-500 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Thank You!
                    </h4>
                    <p className="text-gray-300">
                      You&apos;ve been added to our waitlist. We&apos;ll be in
                      touch soon!
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t md:border-t-0 md:border-l border-gray-800 pt-8 md:pt-0 md:pl-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Request a Demo
                </h3>
                <p className="text-gray-300 mb-6">
                  See BuildFlow in action with a personalized demo tailored to
                  your business needs.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Personalized walkthrough of key features",
                    "Q&A with our product specialists",
                    "Discussion of your specific workflows",
                    "Implementation timeline and pricing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mt-1 mr-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/20 rounded-lg px-4 py-3 font-medium flex items-center justify-center">
                  Schedule Demo
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
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 text-center text-gray-400 max-w-2xl mx-auto">
            <p>
              By joining our waitlist or requesting a demo, you agree to our
              Terms of Service and Privacy Policy. We respect your privacy and
              will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
