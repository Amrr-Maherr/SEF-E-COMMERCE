import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "sweetalert2/dist/sweetalert2.min.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home.jsx";
import Products from "./Pages/Products.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Cart from "./Pages/Cart.jsx";
import Checkout from "./Pages/Checkout.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import SingleProduct from "./Pages/SingleProduct.jsx";
import FavoriteProducts from "./Pages/FavoriteProducts.jsx";
import ThankYouPage from "./Pages/ThankYouPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="FavoriteProducts" element={<FavoriteProducts />} />
          <Route path="ThankYouPage" element={<ThankYouPage />} />
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
