import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="py-24 bg-[#0F0A1F] relative overflow-hidden">
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
            Built for <span className="text-[#a5b4fc]">Business Owners</span> <br />
            Backed by<span className="text-[#fda4af]">Experts</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-gray-400 mb-12"
          >
            We develop solutions that are not just technically sound but strategically aligned with your business goals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <QuickCard 
              title="Enterprise Solutions" 
              description="Custom software development, system integration, and digital transformation"
            />
            <QuickCard 
              title="Cloud Services" 
              description="Cloud migration, management, and optimization services"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const QuickCard = ({ title, description }: { title: string; description: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-6 bg-[#1A1A2E]/80 backdrop-blur-sm rounded-lg text-left border border-[#a5b4fc]/10 hover:border-[#a5b4fc]/20 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className={`flex items-center text-[#fda4af] font-medium transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}>
        <span className="mr-2">Learn more</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </motion.div>
  );
};

export default ServicesHero;
