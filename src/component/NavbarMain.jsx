import logo from "../assets/homepage/logo.svg";
import "../css/navbar.css";

const NavbarMain = () => {
  return (
    <div className="navbar-container">
      <div className="logo-navbar">
        <img
          src={logo}
          alt="samakita-logo"
          style={{ width: "60px", height: "60px" }}
        />
        <p>
          sama<span>kita</span>
        </p>
      </div>
      <div className="list-navbar">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="user-warp">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
    </div>
  );
};

export default NavbarMain;
