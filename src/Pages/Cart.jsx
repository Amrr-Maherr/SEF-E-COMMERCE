import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";

function Cart() {
  // بيانات العربة (يمكن ربطها بـ localStorage أو API في المشاريع الكبيرة)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Smartphone",
      price: 299.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Laptop",
      price: 799.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // دالة لحساب السعر الإجمالي
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // دالة لتحديث الكمية
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  // دالة لإزالة منتج من العربة
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <NavBar/>
      <div className="container hero">
        <h2 className="text-center mb-4 text-primary">
          <i className="fas fa-shopping-cart me-2"></i> Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h4>Your cart is empty.</h4>
            <Link to="/" className="btn btn-primary mt-3 rounded-pill shadow">
              <i className="fas fa-shopping-bag me-2"></i> Start Shopping
            </Link>
          </div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className="card mb-4 shadow-sm" key={item.id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt={item.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-dark">{item.name}</h5>
                      <p className="card-text text-muted">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      <div className="d-flex align-items-center mb-3">
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <i className="fas fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          className="form-control w-25 mx-2"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          min="1"
                          style={{ maxWidth: "80px" }}
                        />
                        <button
                          className="btn btn-outline-secondary ms-2"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <button
                        className="btn btn-danger rounded-pill shadow-sm"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fas fa-trash-alt me-2"></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <h4 className="text-primary">
                <i className="fas fa-dollar-sign me-2"></i> Total: $
                {calculateTotal()}
              </h4>
              <Link
                to="/checkout"
                className="btn btn-success rounded-pill shadow-lg px-4 py-2"
              >
                <i className="fas fa-credit-card me-2"></i> Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Cart;
