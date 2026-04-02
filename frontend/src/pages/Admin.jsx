// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Admin.css";
// import { Link } from "react-router-dom";

// export default function Admin() {
//   const [adminEmail, setAdminEmail] = useState("");
//   const [adminPassword, setAdminPassword] = useState("");
//   const navigate = useNavigate();

//   const handleAdminLogin = (e) => {
//     e.preventDefault();

//     if (adminEmail === "tuba@gmail.com" && adminPassword === "Tuba123") {
//       localStorage.setItem("isAdminLoggedIn", "true");
//       navigate("/notifications");
//     } else {
//       alert("Invalid Admin Credentials");
//     }
//   };

//   return (
//     <div className="admin-login-container">
//       <form className="admin-login-form" onSubmit={handleAdminLogin}>
//         <h2 className="admin-login-title">Admin Login</h2>

//         <input
//           className="admin-login-input"
//           type="email"
//           placeholder="Admin Email"
//           value={adminEmail}
//           onChange={(e) => setAdminEmail(e.target.value)}
//           required
//         />

//         <input
//           className="admin-login-input"
//           type="password"
//           placeholder="Password"
//           value={adminPassword}
//           onChange={(e) => setAdminPassword(e.target.value)}
//           required
//         />

//         <button className="admin-login-button" type="submit">
//           Login
//         </button>
//         <Link to="/" className="homeAdmin"> Home</Link>
//       </form>
   
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";
import "./Admin.css";

export default function Admin() {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (adminEmail === "tuba@gmail.com" && adminPassword === "Tuba123") {
      localStorage.setItem("isAdminLoggedIn", "true");

      // 🔥 IMPORTANT FIX
      navigate("/admin/notifications");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <>
      <div className="admin-login-container">
        <form className="admin-login-form" onSubmit={handleAdminLogin}>
          <h2 className="admin-login-title">Admin Login</h2>

          <input
            className="admin-login-input"
            type="email"
            placeholder="Admin Email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            required
          />

          <input
            className="admin-login-input"
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />

          <button className="admin-login-button" type="submit">
            Login
          </button>

          <Link to="/" className="homeAdmin">Home</Link>
        </form>
      </div>

      {/* 🔥 VERY IMPORTANT FOR NESTED ROUTES */}
      <Outlet />
    </>
  );
}
