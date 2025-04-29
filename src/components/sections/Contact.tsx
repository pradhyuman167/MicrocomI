
import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

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
              if (formRef.current) {
                formRef.current.classList.add("animate-fade-in");
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
      id="contact" 
      ref={sectionRef}
      className="section py-24 bg-[#0F0A1F] text-white"
    >
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-[#a5b4fc]/20 rounded-full animate-pulse"></div>
            <Mail className="p-1 h-12 w-16 text-[#a5b4fc] mb-6 relative" />
          </div>
          
          <h2 
            ref={headingRef}
            className="opacity-0 section-heading text-white"
          >
            Ready to <span className="text-[#fda4af]">scale</span>?
          </h2>
          
          <p 
            ref={textRef}
            className="opacity-0 section-subheading text-gray-300"
          >
            Let's build something your competitors will envy.
          </p>
        </div>
        
        <Card className="overflow-hidden shadow-lg bg-[#1A1A2E] border-0 ring-1 ring-purple-500/10">
          <CardContent className="p-8">
            <form 
              ref={formRef}
              className="opacity-0 grid grid-cols-1 md:grid-cols-2 gap-6" 
              onSubmit={handleSubmit}
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-[#0f172a] border-gray-700 focus:border-brand-secondary text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full bg-[#0f172a] border-gray-700 focus:border-brand-secondary text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white">Phone</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full bg-[#0f172a] border-gray-700 focus:border-brand-secondary text-white"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="text-white">What do you need?</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  required
                  className="w-full min-h-[120px] bg-[#0f172a] border-gray-700 focus:border-brand-secondary text-white"
                />
              </div>
              
              <div className="md:col-span-2 flex flex-col items-center">
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white w-full md:w-auto px-8 py-6 flex items-center gap-2"
                >
                  {isLoading ? "Sending..." : "Get Started"}
                  {!isLoading && <ArrowRight className="w-5 h-5" />}
                </Button>
                <p className="text-gray-400 text-sm mt-3">
                  We reply within 24 hrs.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
