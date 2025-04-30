import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote: "Leads tripled in 3 months.",
    author: "Aman Gupta",
    title: "CEO, TechSolutions",
  },
  {
    id: 2,
    quote: "App engagement soared.",
    author: "Shweta Mehra",
    title: "Product Head, FinGrow",
  },
  {
    id: 3,
    quote: "150% traffic jump.",
    author: "Rahul Verma",
    title: "Co-founder, FreshMart",
  },
  {
    id: 4,
    quote: "Our conversions increased by 55%.",
    author: "Priya Sharma",
    title: "Marketing Director, StyleHub",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add("animate-fade-in");
            }
            
            setTimeout(() => {
              if (cardsRef.current) {
                cardsRef.current.classList.add("animate-fade-in");
              }
            }, 300);
            
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="success" 
      ref={sectionRef}
      className="section bg-[#0A0A0A] py-24 relative"
    >
      <div className="absolute opacity-20 w-96 h-96 rounded-full bg-[#a5b4fc] blur-[100px] top-0 right-0 z-0"></div>
      <div className="absolute opacity-10 w-96 h-96 rounded-full bg-[#fda4af] blur-[80px] bottom-0 left-0 z-0"></div>
      
      <div className="container relative z-10">
        <h2 
          ref={headingRef}
          className="opacity-0 section-heading text-center text-white"
        >
          What they <span className="text-[#a5b4fc]">said</span>:
        </h2>
        
        <div 
          ref={cardsRef}
          className="opacity-0 hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              delay={index * 100}
            />
          ))}
        </div>
        
        <div className="mt-8 relative md:hidden">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard 
                    quote={testimonial.quote}
                    author={testimonial.author}
                    title={testimonial.title}
                    delay={0}
                    fullWidth
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex ? "bg-brand-accent w-4" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  delay?: number;
  fullWidth?: boolean;
}

const TestimonialCard = ({ quote, author, title, delay = 0, fullWidth = false }: TestimonialCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (cardRef.current && delay) {
      setTimeout(() => {
        cardRef.current?.classList.add("animate-scale-in");
      }, delay);
    }
  }, [delay]);
  
  return (
    <Card 
      ref={cardRef}
      className={cn(
        "overflow-hidden h-full card-hover opacity-0 shadow-md backdrop-blur-sm bg-white/80 border-0",
        fullWidth ? "w-full" : ""
      )}
    >
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
          ))}
        </div>
        
        <p className="text-2xl font-bold mb-6">"{quote}"</p>
        
        <div className="mt-auto">
          <p className="font-semibold">{author}</p>
          <p className="text-muted-foreground text-sm">{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonials;
