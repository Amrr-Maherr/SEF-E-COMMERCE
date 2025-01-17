import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
function ProductDetail() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("UserInfo"));
  const [isLoading, setIsLoading] = useState(true);

  // Function to add product to cart
  const addToCart = (selectedProduct) => {
    if (!currentUser) {
      toast.error("Please log in to add items to the cart.");
    } else {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...cartItems, selectedProduct];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success(
        `Product "${selectedProduct.title.slice(0,10)}" has been successfully added to your cart!`
      );
    }
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data); // Set product details in state
        setIsLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Stop loading if error occurs
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="container hero">
        {isLoading ? (
          <div className="loader">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="container">
            <motion.h2
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-4 text-dark font-weight-bold"
            >
              {product.title}
            </motion.h2>
            <div className="row">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="col-md-6 mb-4"
              >
                <img
                  src={product.image}
                  className="img-fluid rounded shadow-lg"
                  alt={product.title}
                />
              </motion.div>

              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="col-md-6"
              >
                <h4 className="text-muted mb-3">Description</h4>
                <p className="lead mb-4">{product.description}</p>
                <p className="lead mb-4 d-flex gap-2 align-items-center">
                  Rating: {product.rating.rate}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                </p>
                <h4 className="text-success display-4">${product.price}</h4>

                {/* Action Buttons */}
                <div className="mt-4">
                  <motion.button
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 1.3 }}
                    className="btn btn-danger btn-lg shadow-sm rounded-pill py-2 px-4 me-2"
                    aria-label="Add to Wishlist"
                  >
                    <i className="fas fa-heart me-2"></i>
                    Add to Wishlist
                  </motion.button>

                  <motion.button
                    onClick={() => addToCart(product)} // Use addToCart with the product object
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 1.3 }}
                    className="btn btn-primary btn-lg shadow-sm rounded-pill py-2 px-4 me-2"
                    aria-label="Add to Cart"
                  >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                  </motion.button>
                </div>

                <div className="mt-4">
                  <motion.button
                    whileHover={{ scale: 0.8 }}
                    whileTap={{ scale: 1.3 }}
                    onClick={() => navigate("/")}
                    className="btn btn-outline-secondary btn-lg rounded-pill"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Products
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default ProductDetail;
