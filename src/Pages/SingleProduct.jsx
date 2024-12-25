import React from "react";
import { Link } from "react-router-dom";


function SingleProduct() {
  // منتج واحد كمثال
  const product = {
    id: 1,
    name: "Smartphone",
    description: "Latest model with amazing features and a sleek design.",
    price: "$599",
    image: "https://via.placeholder.com/400",
  };

  return (
    <>
      <div className="container hero">
        <h2 className="text-center mb-4 text-dark font-weight-bold">
          {product.name}
        </h2>

        <div className="row">
          {/* قسم الصورة */}
          <div className="col-md-6 mb-4">
            <img
              src={product.image}
              className="img-fluid rounded shadow-lg"
              alt={product.name}
            />
          </div>

          {/* قسم التفاصيل */}
          <div className="col-md-6">
            <h4 className="text-muted mb-3">Description</h4>
            <p className="lead mb-4">{product.description}</p>
            <h4 className="text-success display-4">{product.price}</h4>

            {/* أزرار التحكم */}
            <div className="mt-4">
              <button
                className="btn btn-danger btn-lg shadow-sm rounded-pill py-2 px-4 me-2"
                aria-label="Add to Wishlist"
              >
                <i className="fas fa-heart me-2"></i>
                Add to Wishlist
              </button>
              <button
                className="btn btn-primary btn-lg shadow-sm rounded-pill py-2 px-4 me-2"
                aria-label="Add to Cart"
              >
                <i className="fas fa-shopping-cart me-2"></i>
                Add to Cart
              </button>
            </div>

            {/* زر العودة إلى صفحة المنتجات */}
            <div className="mt-4">
              <Link
                to="/products"
                className="btn btn-outline-secondary btn-lg rounded-pill"
              >
                <i className="fas fa-arrow-left me-2"></i>
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
