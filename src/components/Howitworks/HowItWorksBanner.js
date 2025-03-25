import React from "react";

const HowItWorksBanner = () => {
  return (
    <section className="herobanner position-relative overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          {/* Banner Content */}
          <div className="col-lg-6">
            <div className="bannerContent">
              <h1>HOW Multicoin Capital WORKS</h1>
              <p className="mt-4">
                Walk your way to crypto riches with Multicoin Capital! This app
                pays you real cryptocurrency, MNT Tokens, just for strolling.
                Multicoin Capital uses GPS and sensors to track your steps.
                Download, create an account, and let the magic begin. Whether
                you carry your phone or sync it with a fitness tracker, hit your
                daily step goal and watch your MNT tokens grow. Here, fitness
                meets finance in the most delightful way possible!
              </p>
            </div>
          </div>
          {/* Banner Image */}
          <div className="col-lg-6 text-center">
            <div className="bannerImage position-relative">
              <img src="/images/how_shoes.png" alt="How it works" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBanner;
