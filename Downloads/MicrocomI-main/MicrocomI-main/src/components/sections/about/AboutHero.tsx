import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-24 bg-[#0F0A1F] text-white relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -right-48 z-0"></div>
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -left-48 z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
             We <span className="text-[#a5b4fc]">build</span> You <span className="text-[#fda4af]">grow</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-400 mb-12"
          >
            From Jaipur to Tier 1 cities—we design digital products that bring real results.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <StatsCard number="10+" text="Years of Excellence" />
            <StatsCard number="200+" text="Successful Projects" />
            <StatsCard number="50+" text="Expert Team Members" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ number, text }: { number: string; text: string }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="p-6 bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg border border-[#a5b4fc]/10 hover:border-[#a5b4fc]/20 transition-colors"
  >
    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] bg-clip-text text-transparent">
      {number}
    </h3>
    <p className="text-gray-400">{text}</p>
  </motion.div>
);

export default AboutHero;
