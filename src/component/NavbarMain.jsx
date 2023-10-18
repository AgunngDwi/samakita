import logo from "../assets/homepage/logo.svg";
import "../css/navbar.css";

const NavbarMain = ({ btnVis }) => {
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
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
      {!btnVis ? (
        <div className="user-warp">
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      ) : (
        <div className="user-warp">
          <h1></h1>
          <button
            style={{
              backgroundColor: "red",
              fontWeight: "700",
            }}
          >
            Logout
          </button>
          <button
            style={{ border: "transparent", backgroundColor: "transparent" }}
          ></button>
        </div>
      )}
    </div>
  );
};

export default NavbarMain;
