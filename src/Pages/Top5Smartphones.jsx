import React from "react";
import { Link } from "react-router-dom"; // استيراد Link من React Router


function Top5Smartphones() {
  return (
    <>
      <div className="container hero">
        <h2 className="text-center mb-4 fw-bold text-dark">
          Top 5 Smartphones of 2024
        </h2>
        <div className="card shadow-sm border-0 p-4 bg-light">
          <div className="card-body">
            <p className="text-muted mb-4">
              January 15, 2024
              <i
                className="fas fa-calendar-alt ms-2"
                style={{ color: "#6c757d" }}
              ></i>
            </p>
            <p className="lead">
              The smartphone industry is evolving rapidly in 2024. With
              cutting-edge innovations in camera technology, battery life, and
              display quality, these devices are designed to cater to the needs
              of tech enthusiasts, professionals, and everyday users alike. Here
              are the top 5 smartphones of 2024 that have taken the market by
              storm:
              <i
                className="fas fa-bullhorn ms-2"
                style={{ color: "#007bff" }}
              ></i>
            </p>

            <h5 className="mt-4 fw-bold d-flex align-items-center">
              1. iPhone 15 Pro Max
              <i
                className="fas fa-mobile-alt ms-2"
                style={{ color: "#28a745" }}
              ></i>
            </h5>
            <p>
              Apple continues to lead the smartphone market with the iPhone 15
              Pro Max, offering a new A17 Bionic chip, improved camera system,
              and a stunning OLED display. Its premium design and seamless
              performance make it a top choice for users seeking the best in
              class.
              <i
                className="fas fa-camera ms-2"
                style={{ color: "#dc3545" }}
              ></i>
            </p>

            <h5 className="mt-4 fw-bold d-flex align-items-center">
              2. Samsung Galaxy S24 Ultra
              <i
                className="fas fa-mobile-alt ms-2"
                style={{ color: "#28a745" }}
              ></i>
            </h5>
            <p>
              Samsung’s Galaxy S24 Ultra offers an impressive 200MP camera,
              enhanced AI capabilities, and a massive 6.8-inch display. It’s
              perfect for users who demand high performance, especially in
              photography and multimedia consumption.
              <i
                className="fas fa-camera-retro ms-2"
                style={{ color: "#dc3545" }}
              ></i>
            </p>

            <h5 className="mt-4 fw-bold d-flex align-items-center">
              3. Google Pixel 9 Pro
              <i
                className="fas fa-mobile-alt ms-2"
                style={{ color: "#28a745" }}
              ></i>
            </h5>
            <p>
              The Pixel 9 Pro comes with Google’s latest AI-powered features and
              an incredible camera system that produces amazing photos in any
              lighting condition. It’s the go-to device for those who value
              software updates and camera quality.
              <i className="fas fa-cogs ms-2" style={{ color: "#ffc107" }}></i>
            </p>

            <h5 className="mt-4 fw-bold d-flex align-items-center">
              4. OnePlus 12
              <i
                className="fas fa-mobile-alt ms-2"
                style={{ color: "#28a745" }}
              ></i>
            </h5>
            <p>
              OnePlus 12 provides flagship-level performance at a more
              affordable price. With a powerful Snapdragon 8 Gen 3 chip, 120Hz
              AMOLED display, and fast charging, this device is ideal for power
              users and gaming enthusiasts.
              <i className="fas fa-bolt ms-2" style={{ color: "#ff5733" }}></i>
            </p>

            <h5 className="mt-4 fw-bold d-flex align-items-center">
              5. Xiaomi Mi 14 Pro
              <i
                className="fas fa-mobile-alt ms-2"
                style={{ color: "#28a745" }}
              ></i>
            </h5>
            <p>
              Xiaomi Mi 14 Pro offers a fantastic mix of hardware and software
              at a competitive price point. It’s equipped with the latest
              Snapdragon 8 Gen 3 chipset, a high-resolution camera, and a large
              battery that promises long-lasting usage.
              <i
                className="fas fa-battery-full ms-2"
                style={{ color: "#28a745" }}
              ></i>
            </p>

            <p className="mt-4">
              Whether you’re looking for the best camera, fastest performance,
              or the most immersive display, these smartphones are the ones to
              watch in 2024.
              <i className="fas fa-eye ms-2" style={{ color: "#007bff" }}></i>
            </p>

            {/* Button to navigate to smartphone collection with React Router */}
            <Link
              to="/smartphones" // استخدام Link من React Router للتنقل
              className="btn btn-primary text-start mt-4"
            >
              View Full Smartphone Collection
              <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Top5Smartphones;
