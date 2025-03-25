import React from "react";

const StepSection = ({ image, title, description, reverse }) => {
  return (
    <div className={`row align-items-center ${reverse ? "flex-row-reverse" : ""} my-5`}>
      {/* Image */}
      <div className="col-lg-6 text-center">
        <img src={image} alt={title} className="img-fluid" />
      </div>
      {/* Content */}
      <div className="col-lg-6">
        <div className="sport-community-content">
          <h4 className="text-uppercase">
            <b>{title}</b>
          </h4>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
