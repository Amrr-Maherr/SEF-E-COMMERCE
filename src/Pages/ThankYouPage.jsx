import React from "react";
import { Link } from "react-router-dom";


function ThankYouPage({ email, transactionId }) {
  return (
    <>
      <div className="container hero py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div
              className="card shadow-lg p-5 rounded"
              style={{ backgroundColor: "#f9f9f9" }}
            >
              <div className="card-body text-center">
                <h2 className="display-4 text-success mb-4">
                  <i className="fas fa-check-circle me-2"></i>
                  Thank You for Your Payment!
                </h2>
                <p className="lead mb-4 text-muted">
                  We have successfully received your payment. Your order is now
                  being processed and will be shipped shortly.
                </p>
                <p className="mb-5 text-dark">
                  <i className="fas fa-envelope me-2"></i>
                  An email confirmation with your order details has been sent to{" "}
                  <strong>{email}</strong>.
                </p>
                <div className="mt-4">
                  <h4 className="h5 text-muted">
                    <i className="fas fa-id-card me-2"></i>
                    Your Transaction ID:
                  </h4>
                  <p
                    className="text-info mb-4"
                    style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                  >
                    #{transactionId}
                  </p>
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <Link
                    to="/"
                    className="btn btn-primary btn-lg mx-2 shadow-sm"
                    style={{
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    <i className="fas fa-home me-2"></i>
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThankYouPage;
