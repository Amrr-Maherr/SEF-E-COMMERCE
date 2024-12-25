import Swal from "sweetalert2"; // بنستورد مكتبة SweetAlert عشان نعرض تنبيهات للمستخدم
import { Link, useNavigate } from "react-router-dom"; // بنستورد Link و useNavigate من react-router-dom للتنقل بين الصفحات
import { useState, useRef, useEffect } from "react"; // بنستورد useState و useRef و useEffect من React لإدارة الحالة والمراجع

function Register() {
  const navigate = useNavigate(); // دي هتساعدنا في التنقل بين الصفحات بعد التسجيل
  const [UserInfo, setUserInfo] = useState({}); // هنا بنعرف الحالة بتاعت البيانات اللي هنسجلها للمستخدم
  // بنعمل مراجع لحقول الإدخال عشان نقدر نaccess البيانات اللي اتكتبت فيها
  const UserNameInput = useRef();
  const EmailInput = useRef();
  const PasswordInput = useRef();

  const handleForm = (e) => {
    e.preventDefault(); // هنا بنمنع إعادة تحميل الصفحة عند تقديم الفورم
  };

  // هنا دالة التسجيل اللي هتتأكد إن كل البيانات متوفرة وتخزن البيانات في الstate
  const handelRegister = () => {
    const UserName = UserNameInput.current.value; // بنجيب اسم المستخدم
    const UserEmail = EmailInput.current.value; // بنجيب البريد الإلكتروني
    const UserPassword = PasswordInput.current.value; // بنجيب كلمة السر

    // هنا لو فيه أي حقل فاضي هنظهر تنبيه للمستخدم
    if (
      UserNameInput.current.value === "" &&
      EmailInput.current.value === "" &&
      PasswordInput.current.value === ""
    ) {
      Swal.fire({
        icon: "error", // نوع التنبيه
        title: "Missing Information", // عنوان التنبيه
        text: "Please complete all the required fields to proceed.", // محتوى التنبيه
      });
    } else if (UserNameInput.current.value === "") {
      Swal.fire({
        icon: "error",
        title: "Username Required",
        text: "Please provide your username to continue.",
      });
    } else if (EmailInput.current.value === "") {
      Swal.fire({
        icon: "error",
        title: "Email Required",
        text: "Please enter a valid email address to proceed.",
      });
    } else if (PasswordInput.current.value === "") {
      Swal.fire({
        icon: "error",
        title: "Password Required",
        text: "Please create a secure password for your account.",
      });
    } else {
      // لو كل البيانات سليمة هنعمل set للstate عشان نخزن البيانات
      setUserInfo({
        Name: UserName,
        Email: UserEmail,
        PasswordInput: UserPassword,
      });

      // هنظهر رسالة تأكيد بنجاح التسجيل
      Swal.fire({
        title: "Success",
        text: "Your information has been submitted successfully.",
        icon: "success",
      });

      // بعد 2 ثانية هينقل المستخدم لصفحة تسجيل الدخول
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  // الـ useEffect هنا عشان لو تم تعديل بيانات المستخدم في الـ state (UserInfo)
  // نخزنها في الـ localStorage بحيث تفضل محفوظة حتى بعد إغلاق المتصفح
  useEffect(() => {
    if (Object.keys(UserInfo).length > 0) {
      localStorage.setItem("UserInfo", JSON.stringify(UserInfo)); // بنخزن البيانات في الـ localStorage
    }
  }, [UserInfo]); // بتتنفذ كلما اتغيرت الـ state بتاعت UserInfo

  return (
    <div className="register-container p-4 vh-100 d-flex align-items-center justify-content-center shadow-lg rounded">
      <div className="container">
        <h1
          className="text-center mb-4 text-primary"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
        >
          Register
        </h1>
        <form
          className="mx-auto"
          style={{ maxWidth: "400px" }}
          onSubmit={handleForm} // لو فيه خطأ هنعمل منع التحديث التلقائي للفورم
        >
          <div className="form-group mb-4">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              placeholder="Enter your username" // placeholder لاسم المستخدم
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")} // عند التفاعل مع العنصر بتغير لون الحدود
              ref={UserNameInput} // الربط بالمراجع
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email" // placeholder للبريد الإلكتروني
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")}
              ref={EmailInput} // الربط بالمراجع
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              placeholder="Enter your password" // placeholder لكلمة السر
              style={{
                borderBottom: "2px solid #ccc",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderRadius: "0",
                transition: "border-bottom 0.3s ease, box-shadow 0.3s ease",
              }}
              onBlur={(e) => (e.target.style.borderBottom = "2px solid #ccc")}
              ref={PasswordInput} // الربط بالمراجع
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{
              padding: "12px 0",
              borderRadius: "25px",
              boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.2)",
            }}
            onClick={() => {
              handelRegister();
            }} // لما المستخدم يضغط على زر التسجيل، الدالة هتشتغل
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center" style={{ fontSize: "16px" }}>
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none text-primary">
            Login 
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register; // تصدير الكود عشان نقدر نستخدمه في مكان تاني
