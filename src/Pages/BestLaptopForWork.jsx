import React from "react";
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

function BestLaptopForWork() {
  const navigate = useNavigate(); // تهيئة useNavigate

  // دالة لتوجيه المستخدم إلى صفحة المنتجات
  const goToProductsPage = () => {
    navigate("/products"); // وجه المستخدم إلى صفحة /products
  };

  return (
    <>
      <div className="container hero">
        <h2 className="text-center mb-4 fw-bold text-dark">
          How to Choose the Best Laptop for Work
        </h2>
        <div className="card shadow-sm border-0 p-4 bg-light">
          <div className="card-body">
            <p className="text-muted mb-4">January 10, 2024</p>
            <p>
              Choosing the right laptop for work can be a daunting task,
              especially with so many options available. The ideal laptop should
              cater to your specific work requirements, whether you’re a graphic
              designer, software developer, or someone who just needs a reliable
              machine for everyday tasks. Here are some key factors to consider
              when making your decision:
            </p>

            <h5 className="mt-4">
              1. Performance{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-speedometer2 text-danger"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a1 1 0 0 1 1 1v1h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6V1a1 1 0 0 1 1-1zM7 1H1v12h14V2H7V1z" />
              </svg>
            </h5>
            <p>
              The performance of a laptop is determined by the processor (CPU),
              RAM, and storage. For general office work, an Intel Core i5 or i7,
              or AMD Ryzen 5 or 7 processor is typically sufficient. However, if
              you’re involved in heavy tasks like video editing or programming,
              a higher-end processor with more RAM (16GB or more) is essential.
            </p>

            <h5 className="mt-4">
              2. Battery Life{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-battery-full text-success"
                viewBox="0 0 16 16"
              >
                <path d="M10 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h4zm-1 2H7v12h2V2z" />
              </svg>
            </h5>
            <p>
              A long battery life is crucial for a work laptop. Aim for a laptop
              with at least 8-10 hours of battery life to get through a full
              workday without constantly looking for an outlet. Laptops with
              larger battery capacities are often better for professionals who
              travel frequently or work remotely.
            </p>

            <h5 className="mt-4">
              3. Display Quality{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-display text-primary"
                viewBox="0 0 16 16"
              >
                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5v-9zm14-.5H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1z" />
              </svg>
            </h5>
            <p>
              The display plays a significant role in your comfort and
              productivity. Look for a laptop with a Full HD (1920x1080)
              resolution as a minimum. For those working in design or media
              production, you might want a 4K display or an OLED screen for
              better color accuracy and sharpness.
            </p>

            <h5 className="mt-4">
              4. Portability{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-laptop text-warning"
                viewBox="0 0 16 16"
              >
                <path d="M2 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zM1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7H1V4z" />
              </svg>
            </h5>
            <p>
              If you’re someone who travels a lot for work or needs to take your
              laptop to meetings, portability should be a top priority. Opt for
              a lightweight and compact laptop with a thin profile, but make
              sure it still has enough power and ports to meet your needs.
            </p>

            <h5 className="mt-4">
              5. Keyboard and Trackpad{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-keyboard text-info"
                viewBox="0 0 16 16"
              >
                <path d="M5 3h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
              </svg>
            </h5>
            <p>
              A comfortable keyboard and responsive trackpad are essential for
              long hours of work. Ensure the keyboard is ergonomic, with
              adequate key travel and spacing to prevent strain. A high-quality
              trackpad ensures smooth navigation, especially if you don’t always
              use a mouse.
            </p>

            <h5 className="mt-4">
              6. Connectivity{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plug text-muted"
                viewBox="0 0 16 16"
              >
                <path d="M6 0a1 1 0 0 1 1 1v3h2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h2V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6h-2v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z" />
              </svg>
            </h5>
            <p>
              For smooth workflow, your laptop should have a good range of
              ports. USB Type-C, USB 3.0, HDMI, and an SD card reader are all
              important to consider. If you’re working with a lot of external
              devices or peripherals, ensure your laptop can support them.
            </p>

            <div className="text-start">
              <button
                onClick={goToProductsPage}
                className="btn btn-primary mt-4"
              >
                <i className="fa fa-laptop me-2"></i> Check Our Best Laptops
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestLaptopForWork;
