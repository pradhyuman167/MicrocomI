
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesList from "@/components/sections/services/ServicesList";
import ServicesCTA from "@/components/sections/services/ServicesCTA";

const Services = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesList />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
