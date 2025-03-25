import React from "react";

const CommunitySection = () => {
  return (
    <section className="bg-white sport_community">
      <div className="container">
        {/* Diverse Community */}
        <div className="row align-items-center mt-4 mb-4">
          <div className="col-lg-6">
            <h4>
              <b>Building A Diverse Community</b>
            </h4>
            <p>
              Connect with like-minded individuals, tackle daily tasks, and
              participate in trekking events, marathons, and treasure hunts for
              fantastic rewards.
            </p>
          </div>
          <div className="col-lg-6 text-right">
            <img src="/images/sportcommunity.png" alt="Community" />
          </div>
        </div>

        {/* Health Consultation */}
        <div className="row align-items-center mt-4 mb-4">
          <div className="col-lg-6 text-left">
            <img src="/images/health_consultant.png" alt="Health Consultant" />
          </div>
          <div className="col-lg-6">
            <h4>
              <b>Health Consultation and Data Security</b>
            </h4>
            <p>
              MultiCoin Capital provides personalized consultations and ensures
              your health data remains secure with Web 3.0 Cosmos technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
