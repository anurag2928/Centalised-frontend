import React, { useState } from "react";
import "../styles/contactus.css";

const ContactUs = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtPhone: "",
    txtMsg: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data Submitted: ", formData);

    // Here you can handle the form submission logic, e.g., send data to a server
    alert("Message sent successfully!");

    // Reset the form
    setFormData({
      txtName: "",
      txtEmail: "",
      txtPhone: "",
      txtMsg: "",
    });
  };

  return (
    <div className="contactus-container">
      <div className="contactus-form">
        <div className="contactus-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="Rocket"
          />
        </div>
        {/* Attach the handleSubmit method to onSubmit */}
        <form onSubmit={handleSubmit}>
          <h3>Drop Us a Message</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Your Name *"
                  value={formData.txtName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="txtEmail"
                  className="form-control"
                  placeholder="Your Email *"
                  value={formData.txtEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="txtPhone"
                  className="form-control"
                  placeholder="Your Phone Number *"
                  value={formData.txtPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btnContact">
                  Send Message
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.txtMsg}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
