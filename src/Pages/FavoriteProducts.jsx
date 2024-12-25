import React from "react";
import { Link } from "react-router-dom";


function FavoriteProducts() {
  // مثال على بيانات المنتجات المفضلة
  const favoriteProducts = [
    {
      id: 1,
      name: "Smartphone",
      description: "Latest model with amazing features.",
      price: "$599",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Laptop",
      description: "Powerful laptop for gaming and work.",
      price: "$1299",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-5 text-dark font-weight-bold">
          Favorite Products
        </h2>

        <div className="row">
          {favoriteProducts.map((product) => (
            <div key={product.id} className="col-md-6 mb-4">
              <div className="card shadow-lg border-0 rounded-lg overflow-hidden h-100">
                <img
                  src={product.image}
                  className="card-img-top img-fluid transition-all duration-300 hover:scale-110"
                  alt={product.name}
                />
                <div className="card-body p-4">
                  <h5 className="card-title text-dark font-weight-bold">
                    {product.name}
                  </h5>
                  <p className="card-text text-muted mb-3">
                    {product.description}
                  </p>
                  <p className="card-text">
                    <strong className="text-success display-6">
                      {product.price}
                    </strong>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/product-details/${product.id}`}
                      className="btn btn-info shadow-sm py-2 px-4 rounded-pill transition-all duration-300 hover:bg-dark hover:text-white"
                    >
                      <i className="fas fa-eye me-2"></i> View Details
                    </Link>
                    <button
                      className="btn btn-danger shadow-sm py-2 px-4 rounded-pill transition-all duration-300 hover:bg-dark hover:text-white"
                      aria-label="Remove from Favorites"
                    >
                      <i className="fas fa-trash-alt me-2"></i> Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default FavoriteProducts;
