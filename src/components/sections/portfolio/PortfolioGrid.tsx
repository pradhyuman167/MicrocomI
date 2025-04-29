import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Link2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HOW I WANDER",
    category: "second",
    image: "assets/images/WhatsApp 1.jpg",
    link: "",
  },
  {
    id: 2,
    title: "ADRI CRAFTS",
    category: "second",
    image: "assets/images/WhatsApp 2.jpg",
    link: "",
  },
  {
    id: 3,
    title: "JAIPURIA VIDYALAYA",
    category: "second",
    image: "assets/images/WhatsApp 3.jpg",
    link: "https://jaipuriavidyalaya.com/",
  },
  {
    id: 4,
    title: "PUROSKIN",
    category: "first",
    image: "assets/images/WhatsApp 4.jpg",
    link: "http://puroskin.in",
  },
  {
    id: 5,
    title: "GULCO",
    category: "first",
    image: "assets/images/WhatsApp 5.jpg",
    link: "http://Gulco.in",
  },
  {
    id: 6,
    title: "KOSMOH",
    category: "first",
    image: "assets/images/WhatsApp 6.jpg",
    link: "https://kosmoh.com/",
  },
  {
    id: 7,
    title: "BHARATIYA STARTUPS",
    category: "second",
    image: "assets/images/WhatsApp 7.jpg",
    link: "http://bharatiyastartups.com",
  },
  {
    id: 8,
    title: "BISSAU PALACE",
    category: "third",
    image: "assets/images/WhatsApp 9.jpg",
    link: "https://www.bissaupalace.com/",
  },
  {
    id: 9,
    title: "FEFRIENDS ENTERPRISES",
    category: "second",
    image: "assets/images/WhatsApp 8.jpg",
    link: "https://fefriends.in/",
  },
  {
    id: 10,
    title: "ARVINDAND COMPANY",
    category: "second",
    image: "assets/images/WhatsApp 11.jpg",
    link: "https://arvindandcompany.in/",
  },
  {
    id: 11,
    title: "CONFUSION",
    category: "first",
    image: "assets/images/WhatsApp 12.jpg",
    link: "https://confusion.net.in/",
  },
  {
    id: 12,
    title: "ANJANI FOOD",
    category: "first",
    image: "assets/images/WhatsApp 13.jpg",
    link: "https://www.anjanifood.in/",
  },
  {
    id: 13,
    title: "Rawla Bisalpur",
    category: "third",
    image: "assets/images/WhatsApp 14.jpg",
    link: "https://dessineart.com/",
  },
  {
    id: 14,
    title: "Meir Living",
    category: "first",
    image: "assets/images/WhatsApp 15.jpg",
    link: "https://www.meirliving.com/",
  },
  {
    id: 15,
    title: "Dessin Eart",
    category: "first",
    image: "assets/images/WhatsApp 16.jpg",
    link: "",
  },
  {
    id: 16,
    title: "Ghanerao Royal Castle Ranakpur",
    category: "third",
    image: "assets/images/WatsApp 17.png",
    link: "https://www.ghanerao.com/Royal-Castle/",
  },
  {
    id: 17,
    title: "Deogarh Mahal",
    category: "third",
    image: "assets/images/WhatsApp 18.jpg",
    link: "https://www.deogarhmahal.com/",
  },
  {
    id: 18,
    title: "Udai Bilas Palace",
    category: "third",
    image: "assets/images/whatsapp 19.png",
    link: "https://udaibilaspalace.com/about-udai-bilas-palace/",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "first", label: "E-Commerce" },
  { id: "second", label: "Mobile Apps" },
  { id: "third", label: "Hotel Industries" },
];

const PortfolioGrid = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-[#0F0A1F]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-8">MY PROJECTS</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#a5b4fc] text-white"
                    : "bg-[#1A1533] text-gray-400 hover:bg-[#a5b4fc]/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#1A1533] border border-[#a5b4fc]/10 hover:border-[#a5b4fc]/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                    >
                      <Eye className="w-6 h-6 text-white" />
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                      >
                        <Link2 className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="p-4 text-center font-semibold text-lg">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
