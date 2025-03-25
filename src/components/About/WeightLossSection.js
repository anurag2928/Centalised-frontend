import React from "react";

const WeightLossSection = () => {
  return (
    <section className="weightloss bg-gradient position-relative mt-5">
      <div className="container">
        <div className="row">
          {/* Content */}
          <div className="col-lg-7 pt-4">
            <h4 className="text-uppercase" style={{ fontWeight: "600" }}>
              Benefits Of 10,000 Steps Per Day With MultiCoin Capital
            </h4>
            <ul>
              <li>Health Oasis: No sick days ahead!</li>
              <li>Your ticket to a happy mind.</li>
              <li>Revitalize your day with a power surge!</li>
              <li>Strong immunity and better sleep.</li>
              <li>31% lower mortality risk.</li>
              <li>Stress relief, step by step!</li>
              <li>Shedding weight, one step at a time!</li>
            </ul>
          </div>
          {/* Image */}
          <div className="col-lg-5">
            <img
              src="/images/woman-stretching-leg.png"
              alt="Stretching"
              className="weightloss-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossSection;
