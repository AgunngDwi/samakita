import logo from "../assets/homepage/logo.svg";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";

const NavbarMain = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload(false);
  };

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

      {!token ? (
        <div className="user-warp">
          <button className="login" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="register" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      ) : (
        <div className="user-warp">
          <p
            style={{
              fontSize: "15px",
              fontWeight: "700",
              marginRight: "7px",
            }}
          >
            Hello {role}
          </p>

          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavbarMain;
