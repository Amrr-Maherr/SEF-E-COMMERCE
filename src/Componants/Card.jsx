import "../Style/CardStyle.css"
import { Link } from "react-router-dom";
function Card({ product }) {
  const { image, title, description, price } = product;
  return (
    <div className="card border-0 shadow-lg rounded-lg overflow-hidden w-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="card-img-top img-fluid transition-all duration-300 hover:scale-110"
        src={image}
        alt={title}
      />
      <div className="card-body p-4">
        <h5
          className="card-title text-dark font-weight-bold"
          style={{ fontSize: "1.25rem" }}
        >
          {title.slice(0,10)}...
        </h5>
        <p className="card-text text-muted mb-3" style={{ fontSize: "1rem" }}>
          {description.slice(0,30)}...
        </p>
        <p className="card-text">
          <strong className="text-success" style={{ fontSize: "1.5rem" }}>
            ${price}
          </strong>
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <button className="custom-btn add-to-cart">
              <i className="fa fa-shopping-cart"></i>
            </button>
            <button className="custom-btn add-to-favorite">
              <i className="fa fa-heart"></i>
            </button>
          </div>
          <Link
            to={`/SingleProduct/${product.id}`}
            className="custom-btn view-details"
          >
            <i className="fa fa-eye"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Card;
