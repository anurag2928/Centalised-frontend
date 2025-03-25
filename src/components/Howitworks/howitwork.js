import React from "react";
import HowItWorksBanner from "./HowItWorksBanner";
import StepsProcess from "./StepsProcess";
import GetStarted from "./GetStarted";

const HowItWorks = () => {
  return (
    <div className="lighttheme bg-white overflow-hidden">
      <HowItWorksBanner />
      <StepsProcess />
      <GetStarted />
    </div>
  );
};

export default HowItWorks;
