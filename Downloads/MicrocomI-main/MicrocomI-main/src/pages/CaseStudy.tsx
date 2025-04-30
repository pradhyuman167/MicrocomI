import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

// This would typically come from an API or database
const caseStudies = {
  'how-i-wander': {
    title: "How I Wander - Travel Experience Platform",
    client: "How I Wander",
    duration: "6 months",
    role: "Full-Stack Developer",
    brief: "A mobile app for travel enthusiasts to discover and share unique travel experiences.",
    challenge: "Creating an intuitive interface for travelers to document and share their journeys.",
    solution: "Developed a user-friendly mobile application with social sharing features and interactive maps.",
    techStack: {
      frontend: ["React Native", "Redux", "Mapbox"],
      backend: ["Node.js", "Express", "MongoDB"],
      other: ["AWS S3", "Firebase"]
    },
    features: [
      "Interactive map integration",
      "Real-time location sharing",
      "Social media integration",
      "Offline content access",
      "Photo gallery with location tagging"
    ],
    results: [
      { metric: "User Engagement", value: "85% monthly active users" },
      { metric: "App Downloads", value: "50,000+" },
      { metric: "User Rating", value: "4.8/5" },
      { metric: "Travel Stories", value: "10,000+" }
    ]
  },
  'jaipuria-vidyalaya': {
    title: "Educational Website Development for Jaipuria Vidyalaya",
    client: "Jaipuria Vidyalaya",
    duration: "4 months",
    role: "Full-Stack Developer",
    brief: "Complete digital transformation for a prestigious educational institution with 30+ years of legacy.",
    challenge: "Modernizing the school's digital presence while maintaining its legacy values and implementing comprehensive digital solutions for students, parents, and staff.",
    solution: "Developed a comprehensive educational portal with student management and parent engagement features.",
    techStack: {
      frontend: ["React.js", "Tailwind CSS", "Next.js"],
      backend: ["Node.js", "Express", "MySQL"],
      other: ["AWS", "Payment Gateway"]
    },
    features: [
      "Secure Student Portal",
      "Integrated Fee Payment Gateway",
      "Alumni Registration & Networking",
      "Interactive Campus Tour",
      "Media Gallery for events",
      "Testimonial Platform"
    ],
    results: [
      { metric: "Parent Engagement", value: "40% increase" },
      { metric: "Fee Collection", value: "Streamlined process" },
      { metric: "Information Access", value: "24/7 availability" },
      { metric: "User Satisfaction", value: "95% positive feedback" }
    ]
  }
  // Add more case studies here
};

const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies[slug];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold text-center">Case Study Not Found</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-brand-accent to-blue-500 bg-clip-text text-transparent"
            >
              {caseStudy.title}
            </motion.h1>
            
            <div className="space-y-12">
              {/* Project Overview */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4 text-brand-accent">Project Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-gray-300"><span className="font-semibold">Client:</span> {caseStudy.client}</p>
                    <p className="text-gray-300"><span className="font-semibold">Duration:</span> {caseStudy.duration}</p>
                    <p className="text-gray-300"><span className="font-semibold">Role:</span> {caseStudy.role}</p>
                  </div>
                  <div className="bg-[#0f172a] p-6 rounded-lg">
                    <p className="text-gray-300">{caseStudy.brief}</p>
                  </div>
                </div>
              </motion.section>

              {/* Challenge & Solution */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-brand-accent">The Challenge</h2>
                    <p className="text-gray-300">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-brand-accent">The Solution</h2>
                    <p className="text-gray-300">{caseStudy.solution}</p>
                  </div>
                </div>
              </motion.section>

              {/* Tech Stack */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4 text-brand-accent">Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(caseStudy.techStack).map(([category, technologies]) => (
                    <div key={category} className="bg-[#0f172a] p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2 capitalize">{category}</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {technologies.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Key Features */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4 text-brand-accent">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-[#0f172a] p-4 rounded-lg"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Results */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-[#1e293b] p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-4 text-brand-accent">Results & Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="bg-[#0f172a] p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold mb-2">{result.metric}</h3>
                      <p className="text-gray-300">{result.value}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudy; 