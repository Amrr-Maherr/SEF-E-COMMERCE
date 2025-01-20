import React, { useEffect, useState } from "react";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );
  const Navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState(0);
  const [name,setName] = useState("")
  const [cardNumber,setCardNumber] = useState("")
  const [cvvNumber,setCvvNumber] = useState("")
  const [expiryDate,setExpiryDate] = useState("")
  const formData = {
    name:name,
    cardNumber:cardNumber,
    cvvNumber:cvvNumber,
    expiryDate:expiryDate
  }
 const HandelProducts = (event) => {
   event.preventDefault();

   if (!name || !cardNumber || !cvvNumber || !expiryDate) {
     // Show an error alert if any required field is missing
     Swal.fire({
       icon: "error",
       title: "Error",
       text: "Please fill out all required fields!",
     });
   } else if (cardNumber.length !== 16 || cvvNumber.length !== 3) {
     // Show a warning alert if card number or CVV length is incorrect
     Swal.fire({
       icon: "warning",
       title: "Warning",
       text: "Please ensure the card number (16 digits) and CVV (3 digits) are entered correctly.",
     });
   } else {
     // Show a success alert when all fields are valid
     Swal.fire({
       icon: "success",
       title: "Payment Successful",
       text: "Your payment has been processed successfully! Thank you.",
     });

   }
   setTimeout(() => {
    Navigate("/ThankYouPage");
   },2000);
 };

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      cartItems.forEach((item) => {
        total += item.price * (item.quantity || 1);
      });
      setTotalPrice(total);
    };

    calculateTotal();
  }, [cartItems]);

  return (
    <>
      <NavBar />
      <div className="container hero bg-light p-5">
        <h2 className="text-center mb-4 text-primary">Checkout</h2>
        <div className="row">
          {/* Order Summary Section */}
          <div className="col-md-6">
            <h4 className="text-info">
              <i className="fas fa-boxes me-2"></i> Order Summary
            </h4>
            <div className="list-group">
              {cartItems.map((item, index) => (
                <div className="list-group-item" key={index}>
                  <div className="d-flex justify-content-between">
                    <span>{item.title}</span>
                    <span>
                      {item.quantity || 1} x ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <h5>Total:</h5>
              <h5>${totalPrice.toFixed(2)}</h5>
            </div>
          </div>

          {/* Payment Information Section */}
          <div className="col-md-6">
            <h4 className="text-info">
              <i className="fas fa-credit-card me-2"></i> Payment Information
            </h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <i className="fas fa-user me-2"></i> Name on Card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  <i className="fas fa-credit-card me-2"></i> Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  maxLength="16"
                  onChange={(event) => {
                    setCardNumber(event.target.value);
                  }}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="expiryDate" className="form-label">
                    <i className="fas fa-calendar-alt me-2"></i> Expiry Date
                  </label>
                  <input
                    type="month"
                    className="form-control"
                    id="expiryDate"
                    name="expiryDate"
                    onChange={(event) => {
                      setExpiryDate(event.target.value);
                    }}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="cvv" className="form-label">
                    <i className="fas fa-lock me-2"></i> CVV
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    name="cvv"
                    maxLength="3"
                    onChange={(event) => {
                      setCvvNumber(event.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-success w-100"
                onClick={(event) => {
                  HandelProducts(event);
                }}
              >
                Complete Payment
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
