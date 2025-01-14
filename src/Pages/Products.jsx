import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Card from "../Componants/Card";
import "../Style/ProductsStyle.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [NewProducts, setNewProducts] = useState([]);
  const [Search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(Search.toLowerCase());
    });
    setNewProducts(filteredProducts);
  }, [Search, products]);

  return (
    <>
      <NavBar />
      <div className="container hero">
        <div className="container hero">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-12 my-5">
              <h4 className="text-center mb-3">
                <i
                  className="fa fa-search"
                  aria-hidden="true"
                  style={{ color: "#4CAF50" }}
                ></i>{" "}
                Search for Products
              </h4>
            </div>

            <div className="col-xl-6 col-12 my-5">
              <input
                type="text"
                className="form-control py-3"
                placeholder="Search by product name..."
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <h2
          className="text-center my-5 text-dark font-weight-bold"
          style={{ fontSize: "2.5rem" }}
        >
          Our Products
        </h2>
        <div className="row">
          {loading ? (
            <div className="loader">
              <h1>Loading...</h1>
            </div>
          ) : NewProducts.length === 0 ? (
            <div className="col-12">
              <h3 className="text-center text-danger">
                No products found matching your search.
              </h3>
            </div>
          ) : (
            NewProducts.map((product) => (
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
