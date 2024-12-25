import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";

function Checkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [cartItems] = useState([
    { id: 1, name: "Smartphone", price: 299.99, quantity: 1 },
    { id: 2, name: "Laptop", price: 799.99, quantity: 1 },
  ]);

  const [errors, setErrors] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = { ...errors };

    if (!formData.name) {
      newErrors.name = "Name is required.";
    } else {
      newErrors.name = "";
    }

    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    } else {
      newErrors.cardNumber = "";
    }

    if (!formData.expiryDate) {
      newErrors.expiryDate = "Expiry date is required.";
    } else {
      newErrors.expiryDate = "";
    }

    if (!formData.cvv || formData.cvv.length !== 3) {
      newErrors.cvv = "CVV must be 3 digits.";
    } else {
      newErrors.cvv = "";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // بعد الدفع الناجح، التوجه إلى صفحة الشكر أو التفعيل
    navigate("/ThankYouPage");
  };

  return (
    <>
      <NavBar/>
      <div className="container hero">
        <h2 className="text-center mb-4">
          <i className="fas fa-credit-card me-2"></i> Checkout
        </h2>
        <div className="row">
          <div className="col-md-6">
            <h4>
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
            <h4>
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
              <button type="submit" className="btn btn-primary w-100">
                <i className="fas fa-check-circle me-2"></i> Complete Payment
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Checkout;
