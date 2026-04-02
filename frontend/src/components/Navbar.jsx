import "./navbar.css";
import logo from "../images/logo.png";


const Navbar = () => {
  return (
    <div className="top-navbar">
            <img src={logo} alt="logo" className="nav-logo" />
      <span className="nav-title">
        Matoshri Pratishthan Group of Institutions, Nanded
      </span>
    </div>
  );
};
export default Navbar;
