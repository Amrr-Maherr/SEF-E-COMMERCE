import React, { useState, useEffect } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Hero from "../Assets/Hero-image.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css"; // تأكد من استيراد Font Awesome
import { Link } from "react-router-dom";

function Home() {
  const [IsLogedIn, setLogedIn] = useState(false);

  useEffect(() => {
    const UserInfo = localStorage.getItem('UserInfo');
    if (UserInfo) {
      setLogedIn(false);
    } else {
      setLogedIn(true);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="container hero">
        {/* Hero Section */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <img
                src={Hero}
                className="card-img"
                alt="ShopEase Hero"
              />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-end p-4">
                <h1 className="card-title display-3 text-white font-weight-bold">
                  Welcome to ShopEase
                </h1>
                <p className="card-text lead text-white mb-4">
                  Discover an amazing shopping experience with ShopEase, where
                  quality meets affordability.
                </p>
                <div className="d-flex justify-content-end">
                  <button className="btn btn-primary btn-lg mr-3">
                    Start Shopping
                  </button>
                  <button className="btn btn-outline-secondary btn-lg">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="text-dark font-weight-bold mb-4">
              Why Choose ShopEase?
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-cogs text-primary"></i> High Quality
                    </h5>
                    <p className="card-text">
                      At ShopEase, our products are sourced from the best
                      manufacturers, ensuring top-notch quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-truck text-warning"></i> Fast Delivery
                    </h5>
                    <p className="card-text">
                      ShopEase prioritizes fast and reliable delivery, ensuring
                      your items arrive on time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-headset text-success"></i> 24/7 Support
                    </h5>
                    <p className="card-text">
                      Our support team at ShopEase is available 24/7 to assist
                      you with any inquiries or issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {IsLogedIn ? (
          <>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <h2 className="text-dark font-weight-bold mb-4">
                  Get Started with ShopEase
                </h2>
                <p className="lead text-muted mb-4">
                  Sign up today and get exclusive offers and discounts for your
                  first purchase!
                </p>
                <button className="btn btn-success btn-lg">Sign Up</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <h2 className="text-dark font-weight-bold mb-4">
                  Welcome Back to ShopEase
                </h2>
                <p className="lead text-muted mb-4">
                  You're already registered! Enjoy your shopping experience and
                  explore exclusive deals.
                </p>
                <Link to="/products" className="btn btn-success btn-lg">Shop Now</Link>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;
