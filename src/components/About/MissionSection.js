import React from "react";

const MissionSection = () => {
  return (
    <section className="ourmission bg-white pt-0">
      <div className="bg-blue container">
        <div className="row align-items-center p-5">
          {/* Image */}
          <div className="col-lg-6 position-relative">
            <img
              src="/images/stepmint-icon.png"
              alt="Mission"
              className="stepmint-icon"
            />
          </div>
          {/* Content */}
          <div className="col-lg-6">
            <h4 className="mb-4">
              <b>OUR MISSION</b>
            </h4>
            <p>
              MultiCoin Capital inspires individuals to engage in physical
              activity. By fostering a robust, health-conscious community, we
              create a revolutionary crypto ecosystem that blends fitness and
              wealth-building.
            </p>
            <button type="button" className="btn px-4 btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
