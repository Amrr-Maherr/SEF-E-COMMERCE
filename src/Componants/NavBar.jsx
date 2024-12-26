import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../Style/NavStyle.css";
import Swal from "sweetalert2";

function NavBar() {
  const UserInfo = localStorage.getItem("UserInfo");
  const navigate = useNavigate();
  const [isLogedIn, setLogedIn] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("UserInfo");
    setLogedIn(false); // تحديث الحالة بعد الخروج
    Swal.fire({
      title: "Logged Out Successfully",
      text: "You have been successfully logged out.",
      icon: "success",
    });
  };

  useEffect(() => {
    if (UserInfo) {
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }
  }, [UserInfo]);

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto d-flex justify-content-center gap-3 w-50 text-center">
            <li className="nav-item">
              <Link
                className="nav-link active fs-5 rounded-5"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 rounded-5" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 rounded-5" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5 rounded-5" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="ms-auto d-flex align-items-center">
            {isLogedIn ? (
              <>
                <div className="me-3">
                  <Link
                    className="btn border-0 rounded-5 favorites"
                    to="/FavoriteProducts"
                  >
                    <i className="fa fa-heart"></i>{" "}
                    <span className="ms-2">Favorites</span>
                  </Link>
                </div>
                <div className="me-3">
                  <Link className="btn border-0 rounded-5 cart" to="/cart">
                    <i className="fa fa-shopping-cart"></i>{" "}
                    <span className="ms-2">My Cart</span>
                  </Link>
                </div>
                <div>
                  <button
                    className="btn border-0 rounded-5 logout"
                    onClick={handleLogOut}
                  >
                    <i className="fa fa-sign-out-alt"></i>{" "}
                    <span className="ms-2">Log Out</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="me-3">
                  <Link className="btn border-0 rounded-5 login" to="/login">
                    <i className="fa fa-lock"></i>{" "}
                    <span className="ms-2">Sign In</span>
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn border-0 rounded-5 register"
                    to="/register"
                  >
                    <i className="fa fa-user-plus"></i>{" "}
                    <span className="ms-2">Sign Up</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
