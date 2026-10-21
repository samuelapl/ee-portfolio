import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ProjectsSection from "../components/ProjectsSection";
import ServicesSection from "../components/ServicesSection";
import ChatModal from "../components/ChatModal";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header  />
      <HeroSection/>
      <AboutSection/>
      <ResumeSection/>
      <ProjectsSection/>
      <ServicesSection/>

      <ChatModal/>
      <Footer/>
   
   
    </div>
  );
};

export default HomePage;
