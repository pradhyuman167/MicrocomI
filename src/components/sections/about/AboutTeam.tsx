import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
  {
    name: "Amit Patel",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const AboutTeam = () => {
  return (
    <section className="py-24 bg-[#0F0A1F] relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -top-48 -left-48 z-0"></div>
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -bottom-48 -right-48 z-0"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-[#a5b4fc]">Expert</span> Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate professionals dedicated to delivering exceptional digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-[#1A1A2E]/80 backdrop-blur-sm border-0 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent opacity-60"></div>
                </div>
                <CardContent className="p-6 text-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  >
                    <h3 className="font-bold text-xl mb-1 bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <p className="text-gray-400">{member.role}</p>
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

export default AboutTeam;
