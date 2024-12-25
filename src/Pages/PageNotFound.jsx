import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 text-danger mb-4" style={{ fontWeight: "700" }}>
        404
      </h1>
      <h2 className="text-muted mb-3" style={{ fontWeight: "600" }}>
        Oops! Page not found.
      </h2>
      <p
        className="lead mb-4"
        style={{ fontSize: "1.2rem", maxWidth: "600px" }}
      >
        The page you're looking for doesn't exist or has been moved. Don't
        worry, you can go back to the homepage or explore other sections of the
        site.
      </p>
      <Link
        to="/"
        className="btn btn-primary btn-lg px-4 py-2 rounded-3 shadow-lg"
        style={{ fontSize: "1.1rem", transition: "all 0.3s ease" }}
      >
        <i className="fas fa-home me-2"></i> {/* إضافة أيقونة Font Awesome */}
        Go to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
