import React, { useState } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", quantity: 2, price: 50 },
    { id: 2, name: "Item 2", quantity: 1, price: 100 },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};
    if (!formData.name) formErrors.name = "Name on Card is required";
    if (!formData.cardNumber) formErrors.cardNumber = "Card Number is required";
    if (!formData.expiryDate) formErrors.expiryDate = "Expiry Date is required";
    if (!formData.cvv) formErrors.cvv = "CVV is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        alert("Payment Complete");
        setLoading(false);
      }, 2000);
    }
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <NavBar />
      <div className="container hero bg-light p-5">
        <h2 className="text-center mb-4 text-primary">Checkout</h2>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-info">
              <i className="fas fa-boxes me-2"></i> Order Summary
            </h4>
            <div className="list-group">
              {cartItems.map((item) => (
                <div className="list-group-item" key={item.id}>
                  <div className="d-flex justify-content-between">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} x ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <h5>Total:</h5>
              <h5>${calculateTotal()}</h5>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="text-info">
              <i className="fas fa-credit-card me-2"></i> Payment Information
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <i className="fas fa-user me-2"></i> Name on Card
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  <i className="fas fa-credit-card me-2"></i> Card Number
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.cardNumber ? "is-invalid" : ""
                  }`}
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  maxLength="16"
                />
                {errors.cardNumber && (
                  <div className="invalid-feedback">{errors.cardNumber}</div>
                )}
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    <i className="fas fa-calendar-alt me-2"></i> Expiry Date
                  </label>
                  <input
                    type="month"
                    className={`form-control ${
                      errors.expiryDate ? "is-invalid" : ""
                    }`}
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                  />
                  {errors.expiryDate && (
                    <div className="invalid-feedback">{errors.expiryDate}</div>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvv" className="form-label">
                    <i className="fas fa-lock me-2"></i> CVV
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.cvv ? "is-invalid" : ""}`}
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    maxLength="3"
                  />
                  {errors.cvv && (
                    <div className="invalid-feedback">{errors.cvv}</div>
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-success w-100">
                {loading ? (
                  <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <i className="fas fa-check-circle me-2"></i>
                )}
                Complete Payment
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Checkout;
