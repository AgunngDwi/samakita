import React, { useState } from "react";
import "../../css/register.css";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2>Welcome </h2>
        <div className="sub-register">
          <p>Name : </p>
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "4px",
              fontSize: "15px",
              padding: "5px",
              marginTop: "5px",
            }}
            type="text"
          />
        </div>
        <div className="sub-register">
          <p>Username : </p>
          <input
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "4px",
              fontSize: "15px",
              padding: "5px",
              marginTop: "5px",
            }}
            type="text"
          />
        </div>
        <div className="sub-register">
          <p>Password :</p>
          <div className="password-input">
            <input
              style={{
                width: "80%",
                height: "30px",
                borderRadius: "4px",
                fontSize: "15px",
                border: "transparent",
                outline: "none",
              }}
              type={showPassword ? "text" : "password"}
            />
            <span onClick={handleShowPass} style={{ cursor: "pointer" }}>
              {showPassword ? (
                <i class="fa-regular fa-eye-slash"></i>
              ) : (
                <i class="fa-solid fa-eye-slash"></i>
              )}
            </span>
          </div>
        </div>
        <div className="sub-register">
          <p>Role : </p>
          <select
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "4px",
              fontSize: "15px",
              padding: "5px",
              marginTop: "5px",
            }}
          >
            <option value="1">Employee</option>
            <option value="2">Customer</option>
          </select>
        </div>
        <button className="button-register">Register</button>
        <p style={{ fontSize: "12px", marginTop: "5px", fontWeight: "700" }}>
          Sudah punya akun?{" "}
          <a href="/login" style={{ color: "#ffc61b" }}>
            Login Disini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
