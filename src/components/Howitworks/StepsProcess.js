import React from "react";
import StepSection from "./StepSection";

const StepsProcess = () => {
  const steps = [
    {
      image: "/images/account_create.png",
      title: "Download and Create an Account",
      description:
        "Start by downloading the Multicoin Capital app and creating your account. It's easy and quick. Once you're in, you're ready to start earning!",
    },
    {
      image: "/images/accurate_step.png",
      title: "Accurate Step Tracking",
      description:
        "Whether your device is in your pocket or synced with a fitness tracker, Multicoin Capital accurately tracks your daily steps. It's your virtual pedometer, ensuring every step counts towards your rewards.",
      reverse: true,
    },
    {
      image: "/images/effortless.png",
      title: "Effortless Reward Earning",
      description:
        "As you go about your day, every step you take adds to your crypto rewards. No need to perform complex tasks or engage in exhausting activities!",
    },
    {
      image: "/images/daily_step.png",
      title: "Daily Step Goals",
      description:
        "Multicoin Capital encourages you to set and achieve daily step goals. Challenge yourself and watch your crypto assets grow while improving your health.",
      reverse: true,
    },
    {
      image: "/images/secure.png",
      title: "Secure and Transparent Rewards",
      description:
        "Your crypto assets are securely stored, and the rewards system operates on a transparent and decentralized blockchain network.",
    },
  ];

  return (
    <section className="bg-white sport_community pt-3">
      <div className="container">
        {/* Section Title */}
        <div className="row align-items-center text-center mb-5">
          <div className="col-lg-12">
            <h1 className="text-purple text-uppercase">
              <b>Multicoin Capital : Step-by-Step Process</b>
            </h1>
          </div>
        </div>
        {/* Step Sections */}
        {steps.map((step, index) => (
          <StepSection key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default StepsProcess;
