
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TestimonialsHero from "@/components/sections/testimonials/TestimonialsHero";
import TestimonialsGrid from "@/components/sections/testimonials/TestimonialsGrid";

const Testimonials = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <TestimonialsHero />
        <TestimonialsGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
