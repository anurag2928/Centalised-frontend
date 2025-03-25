import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroBanner from "./HeroBanner";
import MissionSection from "./MissionSection";
import WeightLossSection from "./WeightLossSection";
import CommunitySection from "./CommunitySection";

const About = () => {
  return (
    <div className="lighttheme bg-white overflow-hidden">
      <HeroBanner />
      <MissionSection />
      <WeightLossSection />
      <CommunitySection />
    </div>
  );
};

export default About;
