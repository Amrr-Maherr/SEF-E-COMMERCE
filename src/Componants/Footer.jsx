import React from "react";
import "../Style/FooterStyle.css";

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5 border-top">
      <div className="container">
        <div className="d-flex justify-content-center mb-3">
          <a
            href="https://www.facebook.com"
            className="text-dark mx-2 footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="text-dark mx-2 footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="text-dark mx-2 footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-dark mx-2 footer-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        {/* روابط إضافية */}
        <div className="d-flex justify-content-center mb-3">
          <a href="/privacy-policy" className="text-dark mx-3">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-dark mx-3">
            Terms of Service
          </a>
        </div>

        <p className="mb-0 text-dark">© 2024 Navbar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
