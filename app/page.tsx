"use client";

import { motion } from "framer-motion";
import ParticlesBackground from "./components/ParticlesBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold mb-6"
        >
          Future AI Technology
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-400 max-w-2xl"
        >
          We build intelligent AI solutions for global enterprises.
        </motion.p>
      </section>

      {/* Product Section */}
      <section className="py-20 px-10 bg-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Products
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-800 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">
                AI Solution {item}
              </h3>
              <p className="text-gray-400">
                Intelligent AI system for enterprise-level deployment.
              </p >
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-10 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-3xl mx-auto"
        >
          We are a technology-driven AI startup focused on building 
          next-generation intelligent systems for global markets.
        </motion.p>
      </section>

    </main>
  );
}