import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Componants/NavBar"
import Footer from "../Componants/Footer"
import axios from "axios";
import { motion } from "framer-motion";

function SingleProduct() {
  const [pro, setPro] = useState({});
  const { id } = useParams(); // Destructure id from useParams
  const [loading, setLoading] = useState(true); // تبدأ بالـ true لأنه جاري تحميل البيانات

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setPro(response.data); // تعيين بيانات المنتج في الstate
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // انتهى التحميل بغض النظر عن النجاح أو الفشل
      });
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="container hero">
        {loading ? (
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
              {pro.title}
            </motion.h2>
            <div className="row">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="col-md-6 mb-4"
              >
                <img
                  src={pro.image}
                  className="img-fluid rounded shadow-lg"
                  alt={pro.title}
                />
              </motion.div>

              <motion.div
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 1.5 }}
                className="col-md-6"
              >
                <h4 className="text-muted mb-3">Description</h4>
                <p className="lead mb-4">{pro.description}</p>
                <p className="lead mb-4">Count: {pro.rating.count}</p>
                <p className="lead mb-4">Rating: {pro.rating.rate}</p>
                <h4 className="text-success display-4">${pro.price}</h4>
                {/* أزرار التحكم */}
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
                  <Link
                    to="/products"
                    className="btn btn-outline-secondary btn-lg rounded-pill"
                  >
                    <i className="fas fa-arrow-left me-2"></i>
                    Back to Products
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
