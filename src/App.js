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
import Men from "./Componants/Men.jsx";
import Women from "./Componants/Women.jsx";
import Jewelrys from "./Componants/Jewelrys.jsx";
import Electronics from "./Componants/Electronics.jsx";
import AllProducts from "./Componants/AllProducts.jsx";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="jewelry" element={<Jewelrys />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="All" element={<AllProducts />} />
          </Route>
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
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          hasBlendMode={true}
          color="128, 128, 128"
          outerAlpha={0.2}
          innerScale={2}
          outerScale={10}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
