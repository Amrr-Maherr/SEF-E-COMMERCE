import React, { useEffect, useState } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Hero from "../Assets/pexels-evonics-1058277.jpg";
import "../Style/HomeStyle.css";
import { motion } from "framer-motion";
import axios from "axios";
import CategoryCard from "../Componants/CategoryCard";

function Home() {
  const [categories, setCategories] = useState([]);
  const [singleCat, setSingleCat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
        HandelGetCategory(response.data[0]); // Fetch first category initially
      })
      .catch((error) => console.error(error));
  }, []);

  const HandelGetCategory = (Category) => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/category/${Category}`)
      .then((response) => {
        setSingleCat(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container hero-section hero">
        {/* Hero Section */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <img src={Hero} className="card-img" alt="ShopEase Hero" />
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start text-white p-4 home">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="fs-1 fs-md-3 fs-sm-5 fw-bold"
                >
                  Welcome to ShopEase
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  className="fs-3 fs-md-4 fs-sm-5"
                >
                  Quality shopping made simple and affordable.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-dark font-weight-bold mb-4"
            >
              Why ShopEase?
            </motion.h2>
            <div className="row">
              {/* Feature Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="col-md-4 mb-4"
              >
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">High Quality</h5>
                    <p className="card-text">
                      Sourced from top manufacturers for the best quality.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="col-md-4 mb-4"
              >
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">Fast Delivery</h5>
                    <p className="card-text">
                      Reliable and quick delivery for every order.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="col-md-4 mb-4"
              >
                <div className="card shadow-sm h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title">24/7 Support</h5>
                    <p className="card-text">
                      Assistance whenever you need it, day or night.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Categories Buttons and Products */}
        <div className="row mt-5">
          <div className="container py-3">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 text-center">
                {categories.map((Category, index) => (
                  <motion.button
                    key={index}
                    onClick={() => HandelGetCategory(Category)}
                    className="btn btn-primary mx-2 my-2 rounded text-white shadow-lg fs-4 fs-dm-5 fs-sm-5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {Category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          {loading ? (
            <div className="loader">
              <h1>Loading...</h1>
            </div>
          ) : (
            singleCat.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="col-xl-4 col-12 mt-4"
              >
                <CategoryCard product={product} />
              </motion.div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
