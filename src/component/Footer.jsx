import React from "react";
import "../css/footer.css";
import footerImg from "../assets/homepage/11235909_11092.jpg";
import logoFooter from "../assets/homepage/logo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="contact">
        <p>agungdwilaksono60@gmail.com</p>
        <p>(+62) 812-8694-1914</p>
        <p>Jl. Dalang Gg. Semar No.30A, Jakarta Timur - 13850</p>
      </div>
      <div className="link">
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="socialMedia">
        <div className="title">
          <p>Connect with Us </p>
        </div>
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/agung-dwi-laksono"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/agunngdwi" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="mailto:agungdwilaksono60@gmail.com">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/AgunngDwi" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="imageFooter">
        <img
          style={{ width: "100%", height: "200px" }}
          src={footerImg}
          alt="chef-illustration"
        />
      </div>
    </div>
  );
};

export default Footer;
