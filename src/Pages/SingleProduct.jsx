import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import axios from "axios";

function SingleProduct() {
  const [pro, setPro] = useState({});
  const { id } = useParams(); // Destructure id from useParams
  const [loading, setLoading] = useState(true); // تبدأ بالـ true لأنه جاري تحميل البيانات

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setPro(response.data); // تعيين بيانات المنتج في الstate
        console.log(response.data)
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
          <h2 className="text-center mb-4 text-dark font-weight-bold">
            {pro.title}
          </h2>
          <div className="row">
            {/* قسم الصورة */}
            <div className="col-md-6 mb-4">
              <img
                src={pro.image}
                className="img-fluid rounded shadow-lg"
                alt={pro.title}
              />
            </div>

            {/* قسم التفاصيل */}
            <div className="col-md-6">
              <h4 className="text-muted mb-3">Description</h4>
              <p className="lead mb-4">{pro.description}</p>
              <p className="lead mb-4">Count: {pro.rating.count}</p>
              <p className="lead mb-4">Rating: {pro.rating.rate}</p>
              <h4 className="text-success display-4">${pro.price}</h4>
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
      )}
    </div>
    <Footer />
  </>
);

}

export default SingleProduct;
