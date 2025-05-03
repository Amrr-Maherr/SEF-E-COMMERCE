import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // استيراد FontAwesomeIcon
import { faGoogle } from "@fortawesome/free-brands-svg-icons"; // استيراد أيقونة جوجل
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google"; // استيراد GoogleLogin

function Login() {
  const handleForm = (e) => {
    e.preventDefault();
  };

  const EmailInput = useRef();
  const PasswordInput = useRef();
  const navigate = useNavigate();

  const handelLogin = () => {
    const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
    const Email = EmailInput.current.value;
    const Password = PasswordInput.current.value;

    if (UserInfo) {
      if (Email === UserInfo.Email && Password === UserInfo.PasswordInput) {
        Swal.fire({
          title: "Success!",
          text: "You have logged in successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        Swal.fire({
          title: "Error!",
          text: "Incorrect email or password.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "User not found.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleGoogleLogin = (response) => {
    if (response?.credential) {
      // يمكنك تخزين البيانات في LocalStorage أو إرسالها إلى خادمك
      Swal.fire({
        title: "Google Login",
        text: "You have logged in with Google.",
        icon: "success",
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Google login failed.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  useEffect(() => {
    EmailInput.current.value = "";
    PasswordInput.current.value = "";
  }, []);

  return (
    <div className="login-container p-4 vh-100 d-flex align-items-center justify-content-center shadow-lg rounded">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4 text-primary"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
        >
          Login
        </motion.h1>
        <form
          className="mx-auto"
          style={{ maxWidth: "400px" }}
          onSubmit={(e) => handleForm(e)}
        >
          <div className="form-group mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              ref={EmailInput}
              onFocus={(e) =>
                (e.target.style.borderBottom = "2px solid #007bff")
              }
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onFocus={(e) =>
                (e.target.style.borderBottom = "2px solid #007bff")
              }
              ref={PasswordInput}
            />
          </div>
          <motion.button
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{
              padding: "12px 0",
              borderRadius: "25px",
              boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.2)",
            }}
            onClick={() => {
              handelLogin();
            }}
          >
            Login
          </motion.button>
          <div className="d-flex justify-content-center">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() =>
                Swal.fire({
                  title: "Error!",
                  text: "Google login failed.",
                  icon: "error",
                  confirmButtonText: "Try Again",
                })
              }
            />
          </div>
        </form>
        <p className="mt-4 text-center" style={{ fontSize: "16px" }}>
          Don't have an account?{" "}
          <Link to="/register" className="text-decoration-none text-primary">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
