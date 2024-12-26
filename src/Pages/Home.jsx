import React, { useState, useEffect } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Hero from "../Assets/pexels-evonics-1058277.jpg";
import "../Style/HomeStyle.css";

function Home() {
  const UserInfo = localStorage.getItem("UserInfo");
  const [IsLogedIn, setLogedIn] = useState(false);

  useEffect(() => {
    setLogedIn(!UserInfo);
  }, [UserInfo]);

  return (
    <>
      <NavBar />
      <div className="container hero">
        <div className="row">
          <div className="col-12">
            <div className="card ">
              <img src={Hero} className="card-img" alt="ShopEase Hero" />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-end p-4 home">
                <h1 className="card-title display-3 text-white font-weight-bold">
                  Welcome to ShopEase
                </h1>
                <p className="card-text lead text-white">
                  Quality shopping made simple and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="text-dark font-weight-bold mb-4">Why ShopEase?</h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">High Quality</h5>
                    <p className="card-text">
                      Sourced from top manufacturers for the best quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">Fast Delivery</h5>
                    <p className="card-text">
                      Reliable and quick delivery for every order.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">24/7 Support</h5>
                    <p className="card-text">
                      Assistance whenever you need it, day or night.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {IsLogedIn ? (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h2 className="text-dark font-weight-bold mb-4">
                Get Started with ShopEase
              </h2>
              <p className="lead text-muted">
                Sign up for exclusive offers on your first purchase.
              </p>
            </div>
          </div>
        ) : (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h2 className="text-dark font-weight-bold mb-4">
                Welcome Back to ShopEase
              </h2>
              <p className="lead text-muted">
                Enjoy shopping and explore exclusive deals.
              </p>
            </div>
          </div>
        )}

        {/* New Section: Featured Products */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="text-dark font-weight-bold mb-4">
              Featured Products
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Product 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product 1</h5>
                    <p className="card-text">Description of Product 1.</p>
                    <a href="#" className="btn btn-primary">
                      View Product
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Product 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product 2</h5>
                    <p className="card-text">Description of Product 2.</p>
                    <a href="#" className="btn btn-primary">
                      View Product
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Product 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Product 3</h5>
                    <p className="card-text">Description of Product 3.</p>
                    <a href="#" className="btn btn-primary">
                      View Product
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section: Customer Testimonials */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="text-dark font-weight-bold mb-4">
              Customer Testimonials
            </h2>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <p className="card-text">
                      "Excellent service and fast delivery. I love shopping
                      here!"
                    </p>
                    <h5 className="card-title">John Doe</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <p className="card-text">
                      "Great prices and amazing product quality. Highly
                      recommend!"
                    </p>
                    <h5 className="card-title">Jane Smith</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <p className="card-text">
                      "Easy to navigate the site and find what I need. Great
                      experience!"
                    </p>
                    <h5 className="card-title">Alice Johnson</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section: Discount Offers */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h2 className="text-dark font-weight-bold mb-4">
              Special Discount Offers
            </h2>
            <p className="lead text-muted">
              Take advantage of our limited-time offers and save big on your
              next purchase!
            </p>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Discount 1"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Offer 1</h5>
                    <p className="card-text">
                      Get 20% off on your first order!
                    </p>
                    <a href="#" className="btn btn-primary">
                      Claim Offer
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Discount 2"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Offer 2</h5>
                    <p className="card-text">
                      Buy 1 get 1 free on select items.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Claim Offer
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src="https://via.placeholder.com/150"
                    className="card-img-top"
                    alt="Discount 3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Offer 3</h5>
                    <p className="card-text">
                      Save up to 30% on seasonal items!
                    </p>
                    <a href="#" className="btn btn-primary">
                      Claim Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
