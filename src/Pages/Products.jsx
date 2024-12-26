import React from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Card from "../Componants/Card";
import "../Style/ProductsStyle.css"
import { useState , useEffect} from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
   axios
     .get("https://fakestoreapi.com/products")
     .then((response) => {
       setProducts(response.data);
       console.log(response.data);
       setLoading(false)
     })
     .catch((error) => {
       console.error("Error fetching products:", error);
       setLoading(true)
     });
 }, []);
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
          {loading ? (
            <div className="loader">
              <h1>Loading...</h1>
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="col-md-4 mb-5 d-flex align-items-stretch"
              >
                <Card product={product} />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Products;
