import React from "react";
import LandingLayout from "../../components/layouts/LandingLayout";
import HeroSection from "../../components/modules/LandingPage/HeroSection";
import ArticleSection from "../../components/modules/LandingPage/ArticleSection";
import ConsoleSection from "../../components/modules/LandingPage/ConsoleSection";
import ValorantSection from "../../components/modules/LandingPage/ValorantSection";
import AgentSection from "../../components/modules/LandingPage/AgentSection";
import MapsSection from "../../components/modules/LandingPage/MapsSection";

const Landing = () => {
  return (
    <LandingLayout>
      <HeroSection />
      <ArticleSection />
      <ConsoleSection />
      <ValorantSection />
      <AgentSection />
      <MapsSection />
    </LandingLayout>
  );
};

export default Landing;
