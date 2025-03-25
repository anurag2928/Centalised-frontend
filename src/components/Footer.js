import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      {/* Grid Container */}
      <div className="container p-4">
        {/* Newsletter Form Section */}
        <section>
          <form action="#">
            <div className="row d-flex justify-content-center">
              {/* Newsletter Title */}
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              {/* Email Input Field */}
              <div className="col-md-5 col-12">
                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="newsletterEmail"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <label className="form-label" htmlFor="newsletterEmail">
                    Email address
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        {/* Platform Description */}
        <section className="mb-4">
          <p>
            Multicoin Capital is a revolutionary platform that transforms your
            daily steps into real crypto rewards, merging fitness and finance
            seamlessly using Web 3.0 technology.
          </p>
        </section>
      </div>

      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:{" "}
        <Link className="text-white" to="/About">
          MultiCoin Capital
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
