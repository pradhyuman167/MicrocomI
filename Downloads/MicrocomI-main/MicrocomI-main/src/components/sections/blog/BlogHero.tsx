import React from "react";
import { motion } from "framer-motion";
import { BookOpen, PenLine } from "lucide-react";

const BlogHero = () => {
  return (
    <section className="py-24 bg-[#0F0A1F] relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -right-48 z-0"></div>
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -left-48 z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4 mb-8"
          >
            <div className="p-4 rounded-full bg-[#a5b4fc]/10 text-[#a5b4fc]">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="p-4 rounded-full bg-[#fda4af]/10 text-[#fda4af]">
              <PenLine className="w-8 h-8" />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our <span className="text-[#a5b4fc]">Insights</span> &{" "}
            <span className="text-[#fda4af]">Updates</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 mb-8"
          >
            Stay updated with the latest trends, tips, and insights in digital technology
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
