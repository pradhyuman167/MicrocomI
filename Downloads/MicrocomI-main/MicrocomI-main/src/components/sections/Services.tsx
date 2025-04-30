import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Monitor, Smartphone, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Services = () => {
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
      id="services" 
      ref={sectionRef}
      className="section py-24 bg-[#0F0A1F] text-white"
    >
      <div className="container">
        <h2 
          ref={headingRef}
          className="opacity-0 section-heading text-center text-white"
        >
          Built for <span className="text-[#a5b4fc]">Business Owners</span>. <br />
          Backed by <span className="text-[#fda4af]">Experts</span>.
        </h2>
        
        <p 
          ref={textRef}
          className="opacity-0 section-subheading text-center mx-auto mb-16 text-gray-300"
        >
          We develop solutions that are not just technically sound but strategically aligned with your business goals.
        </p>
        
        <div 
          ref={cardsRef}
          className="opacity-0 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <ServiceCard 
            icon={<Monitor className="h-10 w-10" />}
            title="Website Development"
            subtitle="Modern, mobile-friendly, conversion-ready."
            benefit="Looks pro. Works harder."
          />
          
          <ServiceCard 
            icon={<Smartphone className="h-10 w-10" />}
            title="Mobile Apps"
            subtitle="Smooth UX. Custom-built for your goals."
            benefit="Your brand in every pocket."
          />
          
          <ServiceCard 
            icon={<BarChart className="h-10 w-10" />}
            title="Digital Marketing"
            subtitle="SEO, ads, and socials that actually convert."
            benefit="Get found. Get leads."
          />
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
}

const ServiceCard = ({ icon, title, subtitle, benefit }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card 
      className="card-hover h-full overflow-hidden bg-[#1A1A2E] border-0 ring-1 ring-purple-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-8 flex flex-col h-full">
        <div className="rounded-xl bg-[#a5b4fc]/10 p-4 inline-flex mb-6 text-[#a5b4fc]">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{subtitle}</p>
        
        <div className={cn(
          "flex items-center text-[#fda4af] font-medium transition-all duration-300",
          isHovered ? "translate-x-1" : ""
        )}>
          <ArrowRight className="mr-2" />
          <span>{benefit}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Services;
