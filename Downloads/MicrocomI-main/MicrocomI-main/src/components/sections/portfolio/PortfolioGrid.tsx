import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Link2, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "HOW I WANDER",
    category: "second",
    image: "assets/images/WhatsApp 1.jpg",
    link: "",
    caseStudy: {
      brief: "A mobile app for travel enthusiasts to discover and share unique travel experiences.",
      challenge: "Creating an intuitive interface for travelers to document and share their journeys.",
      solution: "Developed a user-friendly mobile application with social sharing features and interactive maps.",
      slug: "how-i-wander"
    }
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
    caseStudy: {
      brief: "Complete digital transformation for a prestigious educational institution.",
      challenge: "Modernizing the school's digital presence while maintaining its 30+ years legacy.",
      solution: "Developed a comprehensive educational portal with student management and parent engagement features.",
      slug: "jaipuria-vidyalaya"
    }
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
  {
    id: 19,
    title: "Kamaaupoot",
    category: "third",
    image: "assets/images/Kamaaupoot.png",
    link: "https://kamaaupoot.com/",
  },
  {
    id: 20,
    title: "Rankawat Group",
    category: "third",
    image: "assets/images/Rankawat.png",
    link: "https://rankawatgroup.com/",
  },
  {
    id: 21,
    title: "cosmium.ai",
    category: "third",
    image: "assets/images/Cosmium.png",
    link: "https://cosmium.ai/",
  },
  {
    id: 22,
    title: "Troop India",
    category: "third",
    image: "assets/images/troopindia.png",
    link: "https://www.troopindia.com/",
  },
  {
    id: 23,
    title: "consumableai",
    category: "third",
    image: "assets/images/conumblabeAI.png",
    link: "https://www.consumableai.com/",
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
  const [expandedProject, setExpandedProject] = useState(null);

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
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#1A1533] border border-[#a5b4fc]/10 hover:border-[#a5b4fc]/30 transition-all duration-300"
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
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-center font-semibold text-lg mb-4">
                    {project.title}
                  </h3>
                  {project.caseStudy && (
                    <div className="space-y-4">
                      <p className="text-gray-400 text-sm line-clamp-3">
                        {project.caseStudy.brief}
                      </p>
                      <Link
                        to={`/case-study/${project.caseStudy.slug}`}
                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-[#a5b4fc]/10 hover:bg-[#a5b4fc]/20 text-[#a5b4fc] rounded-lg transition-colors duration-300 mt-auto"
                      >
                        <BookOpen className="w-4 h-4" />
                        Read Case Study
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
