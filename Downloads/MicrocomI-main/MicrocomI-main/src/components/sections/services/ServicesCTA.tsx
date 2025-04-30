import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="py-24 bg-[#0F0A1F] relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -left-48 z-0"></div>
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -right-48 z-0"></div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-[#a5b4fc]/20 to-[#fda4af]/20 backdrop-blur-sm mb-8"
          >
            <Zap className="w-10 h-10 text-[#a5b4fc]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to <span className="text-[#fda4af]">Scale</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-400 mb-12"
          >
            Let's build something your competitors will envy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <form className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#a5b4fc]/10 focus:border-[#a5b4fc]/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/20 transition-all"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#a5b4fc]/10 focus:border-[#a5b4fc]/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/20 transition-all"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <input 
                  type="tel" 
                  placeholder="Phone" 
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#a5b4fc]/10 focus:border-[#a5b4fc]/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/20 transition-all"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <textarea 
                  placeholder="What do you need?" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#a5b4fc]/10 focus:border-[#a5b4fc]/30 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a5b4fc]/20 transition-all resize-none"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  type="submit"
                  className="w-full py-6 text-lg font-medium bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] hover:opacity-90 transition-all duration-300"
                >
                  Get Started
                </Button>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm text-gray-400"
              >
                We reply within 24 hrs.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
