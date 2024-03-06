import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginReducer from "../../redux/reducers/loginReducer";
import "../../css/login.css";
import onLogin from "../../redux/actions/loginAction";
import { ClipLoader } from "react-spinners";
import { css } from "@emotion/react";

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, token, role } = useSelector(
    (state) => state.loginReducer
  );
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: form.username,
      password: form.password,
    };
    dispatch(onLogin(data));
  };

  localStorage.getItem("token", token);

  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="login-container">
      {token.length ? alert("Login Berhasil") : null}
      <div className="login-wrapper">
        <h2>Please Login</h2>
        <div className="sub-login">
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
            value={form.username}
            onChange={handleChange}
            name="username"
          />
        </div>
        <div className="sub-login">
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
              value={form.password}
              onChange={handleChange}
              name="password"
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
        <button className="button-login" onClick={handleLogin}>
          {loading ? (
            <ClipLoader
              color={"#ffffff"}
              loading={true}
              css={override}
              size={15}
            />
          ) : (
            "Login"
          )}
        </button>
        <p style={{ fontSize: "12px", marginTop: "5px", fontWeight: "700" }}>
          Belum punya akun?{" "}
          <a href="/register" style={{ color: "#273b7a" }}>
            Klik Disini
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
