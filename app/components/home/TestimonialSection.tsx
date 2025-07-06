"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

export default function TestimonialSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-3xl" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Real Results for </span>
              <span className="gradient-text primary-gradient">
                Real Companies
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how storm restoration and construction businesses are
              transforming with BuildFlow.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Testimonial content */}
              <div className="p-8 md:p-10">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-6 h-6 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl text-gray-300 mb-6 italic">
                  &ldquo;BuildFlow completely revolutionized how we handle storm
                  response operations. Our team now coordinates in one system
                  instead of five, and the AI-powered lead engine increased our
                  close rate by 37%.&rdquo;
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    RM
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">
                      Ryan Mitchell
                    </div>
                    <div className="text-gray-400 text-sm">
                      CEO, RestoreMasters Roofing
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-white">37%</div>
                      <div className="text-gray-400 text-sm">
                        Increase in close rate
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">68%</div>
                      <div className="text-gray-400 text-sm">
                        Reduction in admin work
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual representation of the case study */}
              <div className="relative bg-gradient-to-br from-gray-800 to-black md:rounded-l-3xl overflow-hidden">
                {/* Company logo watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="text-4xl font-bold tracking-tight">
                    RestoreMasters
                  </div>
                </div>

                {/* Case study visualization */}
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 max-w-md">
                    <div className="text-lg font-semibold text-white mb-4">
                      From Chaos to Control
                    </div>

                    <div className="space-y-4">
                      <ComparisonItem
                        before="5 disconnected tools"
                        after="1 integrated platform"
                      />
                      <ComparisonItem
                        before="Manual lead assignment"
                        after="AI-powered lead routing"
                      />
                      <ComparisonItem
                        before="Delayed job updates"
                        after="Real-time status tracking"
                      />
                      <ComparisonItem
                        before="Manual image analysis"
                        after="Automated damage detection"
                      />
                    </div>

                    <div className="mt-6 text-center">
                      <button className="bg-white/10 hover:bg-white/20 transition-colors text-white rounded-full px-5 py-2 text-sm">
                        Read full case study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-16 text-center">
            <div className="text-xl font-bold text-white mb-6">
              Trusted by restoration companies across the country
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                "Acme Restoration",
                "Storm Solutions",
                "Elite Construction",
                "ProRoof",
              ].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="text-lg text-gray-400 font-semibold opacity-60"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({ before, after }: { before: string; after: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-1 bg-red-900/20 border border-red-900/30 p-2 rounded text-sm text-gray-300">
        {before}
      </div>
      <div className="text-gray-400">→</div>
      <div className="flex-1 bg-green-900/20 border border-green-900/30 p-2 rounded text-sm text-gray-300">
        {after}
      </div>
    </div>
  );
}
