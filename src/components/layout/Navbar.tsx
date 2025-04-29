
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled 
          ? "bg-[#0f172a]/95 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Microcom<span className="text-brand-accent">International</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/testimonials">Testimonials</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-brand-accent hover:bg-brand-accent/90 text-white"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 top-[73px] bg-[#0f172a]/95 backdrop-blur-sm z-40",
          "flex flex-col gap-6 transition-all duration-300 transform md:hidden p-6",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <MobileNavLink to="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </MobileNavLink>
          <MobileNavLink to="/services" onClick={() => setMobileMenuOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </MobileNavLink>
          <MobileNavLink to="/blog" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </MobileNavLink>
          <MobileNavLink to="/testimonials" onClick={() => setMobileMenuOpen(false)}>
            Testimonials
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </MobileNavLink>
          
          <Button 
            asChild
            className="bg-brand-accent hover:bg-brand-accent/90 text-white w-full mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-brand-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link 
    to={to} 
    className="text-xl text-white py-2 border-b border-gray-800 hover:text-brand-accent transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
