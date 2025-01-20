import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../Style/NavStyle.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

function NavBar() {
  const storedUserInfo = localStorage.getItem("UserInfo");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("product") || "[]"));
  const [cartItemCount, setCartItemCount] = useState(0);
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("UserInfo");
    setIsUserLoggedIn(false);
    Swal.fire({
      title: "Logged Out Successfully",
      text: "You have been successfully logged out.",
      icon: "success",
    });
  };

  useEffect(() => {
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  useEffect(() => {
    if (storedUserInfo) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [storedUserInfo]);

  return (
    <motion.nav
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="navbar navbar-expand-lg bg-light fixed-top"
    >
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          ShopEase
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto d-flex justify-content-center gap-3 w-50 text-center">
            <motion.li
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1 }}
              className="nav-item"
            >
              <Link
                className="nav-link active fs-5 rounded-5"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1 }}
              className="nav-item"
            >
              <Link className="nav-link fs-5 rounded-5" to="/products">
                Products
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1 }}
              className="nav-item"
            >
              <Link className="nav-link fs-5 rounded-5" to="/about">
                About
              </Link>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 1 }}
              className="nav-item"
            >
              <Link className="nav-link fs-5 rounded-5" to="/contact">
                Contact
              </Link>
            </motion.li>
          </ul>
          <div className="ms-auto d-flex align-items-center">
            {isUserLoggedIn ? (
              <>
                <motion.div
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 1 }}
                  className="me-3"
                >
                  <Link
                    className="btn border-0 rounded-5 favorites"
                    to="/FavoriteProducts"
                  >
                    <i className="fa fa-heart"></i>
                    <span className="ms-2">Favorites</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 1 }}
                  className="me-3"
                >
                  <Link className="btn border-0 rounded-5 cart" to="/cart">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="ms-2">My Cart ({cartItemCount})</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 1 }}>
                  <button
                    className="btn border-0 rounded-5 logout"
                    onClick={handleLogout}
                  >
                    <i className="fa fa-sign-out-alt"></i>
                    <span className="ms-2">Log Out</span>
                  </button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 1 }}
                  className="me-3"
                >
                  <Link className="btn border-0 rounded-5 login" to="/login">
                    <i className="fa fa-lock"></i>
                    <span className="ms-2">Sign In</span>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.8 }} whileTap={{ scale: 1 }}>
                  <Link
                    className="btn border-0 rounded-5 register"
                    to="/register"
                  >
                    <i className="fa fa-user-plus"></i>
                    <span className="ms-2">Sign Up</span>
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
