import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Zap, TrendingUp } from "lucide-react";

const values = [
  {
    title: "Excellence",
    description: "We pursue excellence in every project, no matter the size.",
    icon: <TrendingUp className="h-8 w-8 text-[#a5b4fc]" />,
  },
  {
    title: "Innovation",
    description: "Staying ahead with cutting-edge technologies and approaches.",
    icon: <Zap className="h-8 w-8 text-[#fda4af]" />,
  },
  {
    title: "Partnership",
    description: "Your success is our success. We grow together.",
    icon: <Handshake className="h-8 w-8 text-[#a5b4fc]" />,
  },
];

const AboutValues = () => {
  return (
    <section className="py-24 bg-[#0F0A1F] relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -left-48 z-0"></div>
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -right-48 z-0"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Core <span className="text-[#fda4af]">Values</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The principles that guide us in delivering exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-[#1A1A2E]/80 backdrop-blur-sm border border-[#a5b4fc]/10 hover:border-[#a5b4fc]/20 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 flex justify-center"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a5b4fc]/20 to-[#fda4af]/20 rounded-full blur-xl"></div>
                      {value.icon}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] bg-clip-text text-transparent">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
