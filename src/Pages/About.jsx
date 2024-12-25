import React from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";


function About() {
  return (
    <>
      <NavBar />
      <div className="container hero ">
        <h2 className="text-center mb-4 fw-bold text-primary">About Us</h2>
        <p className="lead text-muted text-center mb-5">
          Welcome to <strong className="text-dark">ShopEase</strong>, your
          premier destination for cutting-edge electronics and innovative
          gadgets. Our store offers a wide range of top-tier products at
          competitive prices, ensuring that you get the best value with every
          purchase.
        </p>

        <div className="text-center mb-5">
          <img
            src="https://via.placeholder.com/800x400"
            alt="ShopEase"
            className="img-fluid rounded shadow"
          />
        </div>

        <h4 className="mt-4 text-primary">Our Vision</h4>
        <p className="text-muted">
          Our vision is to become the leading e-commerce platform for
          electronics, setting new standards of excellence in product selection,
          customer service, and innovation.
        </p>

        <h4 className="mt-4 text-primary">Why Choose Us?</h4>
        <ul className="list-unstyled">
          <li>
            <i className="fas fa-check-circle text-success"></i> A wide
            selection of quality products
          </li>
          <li>
            <i className="fas fa-check-circle text-success"></i> Competitive
            prices with exclusive deals
          </li>
          <li>
            <i className="fas fa-check-circle text-success"></i> Exceptional
            customer service and support
          </li>
        </ul>

        <h4 className="mt-4 text-primary">Contact Us</h4>
        <p>
          If you have any inquiries or need assistance, don't hesitate to reach
          out to our customer support team at{" "}
          <strong>support@shopease.com</strong>. We’re here to help!
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
