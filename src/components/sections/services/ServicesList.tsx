import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Monitor className="h-10 w-10" />,
    title: "Website Development",
    subtitle: "Modern, mobile-friendly, conversion-ready.",
    benefit: "Looks pro. Works harder.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Apps",
    subtitle: "Smooth UX. Custom-built for your goals.",
    benefit: "Your brand in every pocket.",
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Digital Marketing",
    subtitle: "SEO, ads, and socials that actually convert.",
    benefit: "Get found. Get leads.",
  },
];

const ServicesList = () => {
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
            Built for <span className="text-[#a5b4fc]">Business Owners</span>. <br />
            Backed by <span className="text-[#fda4af]">Experts</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  benefit: string;
  index: number;
}

const ServiceCard = ({ icon, title, subtitle, benefit, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <Card 
        className="h-full bg-[#1A1A2E]/80 backdrop-blur-sm border-0 overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-8 flex flex-col h-full">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#a5b4fc]/20 to-[#fda4af]/20 rounded-full blur-xl"></div>
            <div className="relative z-10 rounded-xl bg-[#a5b4fc]/10 p-4 inline-flex text-[#a5b4fc]">
              {icon}
            </div>
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#a5b4fc] to-[#fda4af] bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 flex-grow text-lg">
            {subtitle}
          </p>
          
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }}
            className="flex items-center text-[#fda4af] font-medium group"
          >
            <ArrowRight className="mr-2 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="text-lg">{benefit}</span>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServicesList;
