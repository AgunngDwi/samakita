import React from "react";
import "../../css/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Silahkan Login</h2>
        <div className="sub-login">
          <p>Username : </p>
          <input style={{ width: "100%", height: "30px" }} type="text" />
        </div>
        <div className="sub-login">
          <p>Password :</p>
          <input style={{ width: "100%", height: "30px" }} type="text" />
        </div>
        <button className="button-login">Login</button>
      </div>
    </div>
  );
};

export default Login;
