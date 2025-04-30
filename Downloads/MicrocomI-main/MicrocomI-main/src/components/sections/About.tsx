import React, { useEffect, useRef } from "react";
import { Zap, ArrowUpRightFromCircle, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const successStories = [
  {
    id: 1,
    quote: "Leads tripled in 3 months.",
    name: "Aman Gupta",
    role: "CEO, TechSolutions",
  },
  {
    id: 2,
    quote: "App engagement soared.",
    name: "Shweta Mehra",
    role: "Product Head, FinGrow",
  },
  {
    id: 3,
    quote: "150% traffic jump.",
    name: "Rahul Verma",
    role: "Co-founder, FreshMart",
  },
];

const About = () => {
  return (
    <section 
      id="about" 
      className="section py-24 bg-[#0F0A1F] relative overflow-hidden"
    >
      <div className="absolute opacity-30 w-96 h-96 rounded-full bg-[#a5b4fc] blur-[120px] -top-48 -left-48 z-0"></div>
      <div className="absolute opacity-20 w-96 h-96 rounded-full bg-[#fda4af] blur-[100px] -bottom-48 -right-48 z-0"></div>
      
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading text-center z-10 relative text-white"
        >
          We <span className="text-[#a5b4fc]">build</span>. You <span className="text-[#fda4af]">grow</span>.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="section-subheading text-center mx-auto z-10 relative"
        >
          From Jaipur to Tier 1 cities—we design digital products that bring real results.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 z-10 relative"
        >
          <FeatureCard
            icon={<div className="relative">
              <span className="absolute inset-0 bg-brand-secondary/10 rounded-full animate-pulse-light"></span>
              <ArrowUpRightFromCircle className="h-12 w-12 text-[#a5b4fc] relative z-10" />
            </div>}
            title="10+ years of experience"
            description="A decade of delivering digital excellence to businesses across India."
          />
          
          <FeatureCard
            icon={<div className="relative">
              <span className="absolute inset-0 bg-[#fda4af]/10 rounded-full animate-pulse-light"></span>
              <Zap className="h-12 w-12 text-[#fda4af] relative z-10" />
            </div>}
            title="All services under one roof"
            description="Websites, apps, marketing - everything you need to succeed online."
            highlight={true}
          />
          
          <FeatureCard
            icon={<div className="relative">
              <span className="absolute inset-0 bg-brand-secondary/10 rounded-full animate-pulse-light"></span>
              <svg className="h-12 w-12 text-[#a5b4fc] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8m-4-4h8" />
              </svg>
            </div>}
            title="Obsessed with outcomes"
            description="We focus on results that matter, not just impressive deliverables."
          />
        </motion.div>

        {/* Success Stories Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-24 z-10 relative"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Success <span className="text-[#a5b4fc]">Stories</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
              >
                <Card className="overflow-hidden card-hover backdrop-blur-sm bg-[#1A1A2E]/80 border-0 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6">
                      <Quote className="h-8 w-8 text-[#a5b4fc] opacity-50" />
                    </div>
                    <p className="text-xl font-medium mb-6 text-white">
                      "{story.quote}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-lg font-semibold text-white">
                        {story.name}
                      </h4>
                      <p className="text-gray-400">
                        {story.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const FeatureCard = ({ icon, title, description, highlight = false }: FeatureCardProps) => {
  return (
    <Card className={cn(
      "overflow-hidden card-hover backdrop-blur-sm bg-[#1A1A2E]/80 border-0",
      highlight ? "shadow-lg shadow-purple-500/10 ring-1 ring-purple-500/20" : "shadow-md"
    )}>
      <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
        <div className="mb-5">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

export default About;
