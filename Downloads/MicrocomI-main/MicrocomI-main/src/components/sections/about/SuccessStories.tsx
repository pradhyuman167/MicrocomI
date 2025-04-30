import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

const SuccessStories = () => {
  return (
    <section className="py-24 bg-[#0F0A1F] relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -right-48 z-0"></div>
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -left-48 z-0"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Success <span className="text-[#a5b4fc]">Stories</span>
          </h2>
          <p className="text-xl text-gray-400">What they said:</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
      </div>
    </section>
  );
};

export default SuccessStories; 