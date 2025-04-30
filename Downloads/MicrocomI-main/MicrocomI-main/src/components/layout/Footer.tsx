import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#a5b4fc] blur-[150px] -top-48 -right-48 opacity-10"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#fda4af] blur-[150px] -bottom-48 -left-48 opacity-10"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="assets\logo\MI-logo.png" width={200} alt="Microcom International" className="hover:opacity-90 transition-opacity" />
            </div>
            <p className="mb-6 text-gray-400 max-w-md leading-relaxed">
              Leading technology solutions provider in Jaipur, delivering innovative IT services and digital transformation solutions since our inception.
            </p>
            <div className="flex gap-4">
              <a href="mailto:infomicrocom@gmail.com" className="text-[#a5b4fc] hover:text-[#fda4af] transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918619264120" className="text-[#a5b4fc] hover:text-[#fda4af] transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#a5b4fc]">Quick</span> Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-400 hover:text-[#a5b4fc] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-[#a5b4fc] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-400 hover:text-[#a5b4fc] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-[#a5b4fc] transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
              <span className="text-[#fda4af]">Contact</span> Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#a5b4fc] mt-1" />
                <a href="mailto:infomicrocom@gmail.com" className="text-gray-400 hover:text-[#a5b4fc] transition-colors">
                  infomicrocom@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#a5b4fc] mt-1" />
                <a href="tel:+918619264120" className="text-gray-400 hover:text-[#a5b4fc] transition-colors">
                  +91 8619264120
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Microcom International. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-gray-500 hover:text-[#a5b4fc] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-[#a5b4fc] transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
