import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    image: "/blog/web-dev.jpg",
  },
  {
    id: 2,
    title: "Mobile App Development Best Practices",
    excerpt: "Essential tips and strategies for building successful mobile applications.",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Mobile Development",
    image: "/blog/mobile-dev.jpg",
  },
  {
    id: 3,
    title: "Digital Marketing Trends to Watch",
    excerpt: "Key digital marketing trends that are transforming the industry landscape.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Digital Marketing",
    image: "/blog/marketing.jpg",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-24 bg-[#0F0A1F]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover backdrop-blur-sm bg-[#1A1A2E]/80 border-0 h-full group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">Read More</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#a5b4fc] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#fda4af]">{post.category}</span>
                    <ArrowRight className="w-5 h-5 text-[#a5b4fc] group-hover:translate-x-1 transition-transform duration-300" />
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

export default BlogGrid;
