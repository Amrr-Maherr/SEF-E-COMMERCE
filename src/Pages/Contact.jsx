import React, { useState } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <NavBar />
      <div className="container hero">
        <h2 className="text-center mb-4 fw-bold text-primary">Get in Touch</h2>
        <p className="text-center mb-5 text-muted fs-5">
          Have questions or need help? Send us a message and our team will get
          back to you shortly.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form
              onSubmit={handleSubmit}
              className="p-5 border rounded-4 shadow-lg bg-white"
            >
              <div className="text-center mb-4">
                <i
                  className="fas fa-envelope text-primary"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="form-label text-dark fw-semibold"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill shadow-sm"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label text-dark fw-semibold"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control rounded-pill shadow-sm"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label text-dark fw-semibold"
                >
                  Your Message
                </label>
                <textarea
                  className="form-control rounded-3 shadow-sm"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 py-2 shadow-sm fw-bold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
