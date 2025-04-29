
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#030303] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-rose-500/[0.03] blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Microcom<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">International</span>
            </h2>
            <p className="mb-4 text-white/60 max-w-sm">
              Leading technology solutions provider in Jaipur, delivering innovative IT services and digital transformation solutions since our inception.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white/90">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-white/60 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-white/60 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/60 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white/90">Contact</h3>
            <ul className="space-y-2">
              {/* <li className="text-white/60">Malviya Nagar, Jaipur, 302017</li> */}
              <li>
                <a href="mailto:infomicrocom@gmail.com" className="text-white/60 hover:text-white transition-colors">
                  infomicrocom@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918619264120" className="text-white/60 hover:text-white transition-colors">
                  +91 8619264120
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Microcom International. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="/privacy" className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
