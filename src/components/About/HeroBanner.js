import React from "react";

const HeroBanner = () => {
  return (
    <section className="herobanner position-relative  bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Content */}
          <div className="col-lg-6">
            <div className="bannerContent">
              <h1>MOVE TO EARN</h1>
              <p className="mt-4">
                A journey that’s going to make you Wealthier, Step by Step!
                MultiCoin Capital integrates fitness and wealth with real crypto
                rewards through Web 3.0 technology.
              </p>
            </div>
          </div>
          {/* Image */}
          <div className="col-lg-6 text-center">
            <div className="bannerImage position-relative">
              <img src="/images/banner_img.png" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
