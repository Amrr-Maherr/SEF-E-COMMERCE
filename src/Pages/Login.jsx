import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function Login() {
  const handleForm = (e) => {
    e.preventDefault(); // هنا بنوقف الإجراء الافتراضي علشان نتعامل مع البيانات يدويًا
  };

  const EmailInput = useRef();
  const PasswordInput = useRef();
  const navigate = useNavigate(); // يمكن استخدامه للتوجيه إلى صفحة أخرى بعد تسجيل الدخول

const handelLogin = () => {
  const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
  const Email = EmailInput.current.value;
  const Password = PasswordInput.current.value;

  if (UserInfo) {
    // التحقق من أن البريد الإلكتروني وكلمة المرور صحيحين
    if (Email === UserInfo.Email && Password === UserInfo.PasswordInput) {
      Swal.fire({
        title: "Success!",
        text: "You have logged in successfully.",
        icon: "success",
        confirmButtonText: "OK",
      })
      setTimeout(() => {
          navigate("/");
        },1000)
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

  return (
    <div className="login-container p-4 vh-100 d-flex align-items-center justify-content-center shadow-lg rounded">
      <div className="container">
        <h1
          className="text-center mb-4 text-primary"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
        >
          Login
        </h1>
        <form
          className="mx-auto"
          style={{ maxWidth: "400px" }}
          onSubmit={(e) => handleForm(e)} // استخدمنا onSubmit بدلاً من onChange هنا
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
          <button
            type="submit" // هنا استخدمنا type="submit" علشان يتم إرسال البيانات لما يتم الضغط على الزر
            className="btn btn-primary w-100 mb-3"
            style={{
              padding: "12px 0",
              borderRadius: "25px",
              boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.2)",
            }}
            onClick={()=>{handelLogin()}}
          >
            Login
          </button>
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
