import React, { useEffect, useRef } from "react";
import { FeatureCard } from "@/components/ui/feature-card";
import { Button } from "@/components/ui/button";
import { 
  LayoutGrid, 
  Component,
  ArrowRight, 
  Square,
  CircleDot,
  Link,
  Circle,
  Menu,
  List
} from "lucide-react";

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add("animate-fade-in");
            }
            
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.classList.add("animate-fade-in");
              }
            }, 200);
            
            setTimeout(() => {
              if (cardsRef.current) {
                cardsRef.current.classList.add("animate-fade-in");
              }
            }, 400);
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="absolute opacity-30 w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -right-48 z-0"></div>
      <div className="absolute opacity-20 w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -left-48 z-0"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            ref={headingRef}
            className="opacity-0 text-3xl md:text-4xl font-bold text-white mb-4 font-heading"
          >
            Cutting-Edge <span className="text-[#a5b4fc]">Solutions</span> for Modern <span className="text-[#fda4af]">Businesses</span>
          </h2>
          <p 
            ref={textRef}
            className="opacity-0 text-gray-400"
          >
            Explore our collection of customizable components built with the latest technologies
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="opacity-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeatureCard
            title="UI/UX Design"
            description="User-centered design that creates seamless experiences across all devices and platforms."
            icon={<LayoutGrid className="w-8 h-8" />}
            action={{
              label: "Learn more",
              onClick: () => console.log("Design clicked"),
            }}
          />

          <FeatureCard
            title="Component Library"
            description="Pre-built components for faster development and consistent brand identity."
            icon={<Component className="w-8 h-8" />}
            action={{
              label: "View components",
              onClick: () => console.log("Components clicked"),
            }}
          />

          <FeatureCard
            title="Navigation Systems"
            description="Intuitive navigation patterns that guide users through your digital product."
            icon={<Menu className="w-8 h-8" />}
            action={{
              label: "Explore",
              onClick: () => console.log("Navigation clicked"),
            }}
          />

          <FeatureCard
            title="Interactive Elements"
            description="Engaging buttons, forms, and interactive components with smooth animations."
            icon={<CircleDot className="w-8 h-8" />}
            action={{
              label: "See demos",
              onClick: () => console.log("Interactive clicked"),
            }}
          />

          <FeatureCard
            title="Responsive Layouts"
            description="Flexible grid systems that adapt perfectly to any screen size or device."
            icon={<Square className="w-8 h-8" />}
            action={{
              label: "View examples",
              onClick: () => console.log("Layouts clicked"),
            }}
          />

          <FeatureCard
            title="Data Visualization"
            description="Beautiful charts, graphs, and data displays that communicate insights clearly."
            icon={<List className="w-8 h-8" />}
            action={{
              label: "View examples",
              onClick: () => console.log("Data viz clicked"),
            }}
          />
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-white hover:bg-gray-100 text-[#0f172a] px-8 py-6 rounded-xl text-lg font-medium group"
            onClick={() => console.log("View all features")}
          >
            View All Features
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
