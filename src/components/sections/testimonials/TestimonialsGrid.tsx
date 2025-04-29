import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Working with this team has been transformative for our business. Their innovative solutions and dedication to excellence exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "The level of technical expertise and attention to detail is outstanding. They delivered exactly what we needed, on time and within budget.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Their strategic approach to digital solutions has helped us achieve remarkable growth. A truly reliable and professional team.",
    rating: 5,
  },
  // Add more testimonials as needed
];

const TestimonialsGrid = () => {
  return (
    <section className="py-24 bg-[#0F0A1F]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1A1533] p-8 rounded-2xl border border-[#a5b4fc]/10 hover:border-[#a5b4fc]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#fda4af] text-[#fda4af]"
                  />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-[#a5b4fc]/20 absolute -top-2 -left-2" />
                <p className="text-gray-300 relative z-10 pl-4">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
