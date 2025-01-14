import React from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Hero from "../Assets/pexels-evonics-1058277.jpg";
import "../Style/HomeStyle.css";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container hero-section hero">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <img src={Hero} className="card-img" alt="ShopEase Hero" />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-white p-4 home">
                <h1 className="display-1 fw-bold">Welcome to ShopEase</h1>
                <p className="lead fw-bold">
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
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">High Quality</h5>
                    <p className="card-text">
                      Sourced from top manufacturers for the best quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">Fast Delivery</h5>
                    <p className="card-text">
                      Reliable and quick delivery for every order.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
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
        <div className="row mt-5">
          <div className="container py-3">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 text-center">
                <div
                  className="btn-group d-flex flex-wrap gap-3 justify-content-center"
                  role="group"
                  aria-label="Product Categories"
                >
                  <Link
                    to="/All"
                    className="btn btn-primary rounded-pill flex-grow-1"
                  >
                    All Products
                  </Link>
                  <Link
                    to="/men" // هنا، سنعرض محتوى المنتجات الخاصة بالرجال
                    className="btn btn-success rounded-pill flex-grow-1"
                  >
                    Men's Collection
                  </Link>
                  <Link
                    to="/women"
                    className="btn btn-danger rounded-pill flex-grow-1"
                  >
                    Women's Collection
                  </Link>
                  <Link
                    to="/jewelry"
                    className="btn btn-warning rounded-pill flex-grow-1"
                  >
                    Jewelry
                  </Link>
                  <Link
                    to="/electronics"
                    className="btn btn-info rounded-pill flex-grow-1"
                  >
                    Electronics
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <Outlet />{" "}
            {/* هذا سيمكنك من عرض المحتوى الخاص بالمنتجات الخاصة بالرجال داخل نفس الصفحة */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
