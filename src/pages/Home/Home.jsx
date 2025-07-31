import React from "react";
import HeroSection from "./HeroSection";
import About from "../Home/About";
import { div } from "framer-motion/client";
import { ImOpt } from "react-icons/im";
import ProductShowcase from "./ProductShowcase";
import TestimonialSlider from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";
import MachineSlider from "./Sliderbanner";
import TeamSection from "./Our-leadership";
import ValuedClients from "./Our-Clients";
import NewsletterSection from "./NewsLetter";
import FeaturesSection from "./Feature";

const Home = () => {
  return (
    <div>
      <MachineSlider />

      <About />
      <ProductShowcase />
      <HeroSection />
      <TestimonialSlider />
      <WhyChooseUs />
      <FeaturesSection />
      <TeamSection />
      <ValuedClients />
      <NewsletterSection />
    </div>
  );
};

export default Home;