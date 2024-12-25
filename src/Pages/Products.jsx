import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";

function Products() {
  // مثال على بيانات المنتجات
  const products = [
    {
      id: 1,
      name: "Smartphone",
      description: "Latest model with amazing features",
      price: "$599",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Laptop",
      description: "Powerful laptop for gaming and work",
      price: "$1299",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      description: "Noise-canceling headphones with great sound",
      price: "$199",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Smartwatch",
      description: "Smartwatch with health monitoring",
      price: "$299",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Tablet",
      description: "High-performance tablet",
      price: "$499",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Camera",
      description: "High-resolution camera for photography",
      price: "$899",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="container hero">
        <h2
          className="text-center mb-5 text-dark font-weight-bold"
          style={{ fontSize: "2.5rem" }}
        >
          Our Products
        </h2>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-md-4 mb-5 d-flex align-items-stretch"
            >
              <div className="card border-0 shadow-lg rounded-lg overflow-hidden w-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:transform hover:transition-transform">
                <img
                  src={product.image}
                  className="card-img-top img-fluid transition-all duration-300 hover:scale-110"
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <h5
                    className="card-title text-dark font-weight-bold"
                    style={{ fontSize: "1.25rem" }}
                  >
                    {product.name}
                  </h5>
                  <p
                    className="card-text text-muted mb-3"
                    style={{ fontSize: "1rem" }}
                  >
                    {product.description}
                  </p>
                  <p className="card-text">
                    <strong
                      className="text-success"
                      style={{ fontSize: "1.5rem" }}
                    >
                      {product.price}
                    </strong>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-4"> {/* زيادة التباعد بين الأزرار */}
                      {/* زر إضافة إلى السلة */}
                      <button className="custom-btn add-to-cart">
                        <i className="fa fa-shopping-cart"></i>
                      </button>

                      {/* زر إضافة إلى المفضلة */}
                      <button className="custom-btn add-to-favorite">
                        <i className="fa fa-heart"></i>
                      </button>
                    </div>

                    {/* زر عرض التفاصيل */}
                    <Link
                      to={`/product-details/${product.id}`}
                      className="custom-btn view-details"
                    >
                      <i className="fa fa-eye"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
