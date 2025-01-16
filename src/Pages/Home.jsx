import React, { useEffect, useState } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Hero from "../Assets/pexels-evonics-1058277.jpg";
import "../Style/HomeStyle.css";
import { motion } from "motion/react";
import axios from "axios";
import CategoryCard from "../Componants/CategoryCard";
function Home() {
  const [categories, setCategories] = useState([])
  const [singleCat, setSingleCat] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data)
        HandelGetCategory(response.data[2])
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])
  const HandelGetCategory = (Category) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${Category}`)
      .then((response) => {
        setSingleCat(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setLoading(true)
      });
  }
  return (
    <>
      <NavBar />
      <div className="container hero-section hero">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <img src={Hero} className="card-img" alt="ShopEase Hero"  />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-white p-4 home">
                <motion.h1
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="fs-1 fs-md-3 fs-sm-5 fw-bold"
                >
                  Welcome to ShopEase
                </motion.h1>
                <motion.p
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  className="fs-3 fs-md-4 fs-sm-5"
                >
                  Quality shopping made simple and affordable.
                </motion.p>
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
                {categories.map((Category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      HandelGetCategory(Category);
                    }}
                    className="btn btn-primary mx-2 my-2 rounded text-white shadow-lg fs-4 fs-dm-5 fs-sm-5"
                  >
                    {Category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {loading ? (
            <>
              <div className="loader">
                <h1>Loading...</h1>
              </div>
            </>
          ) : (
            <>
              {singleCat.map((product) => (
                <motion.div
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="col-xl-4 col-12 mt-4"
                >
                  <CategoryCard product={product} />
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
