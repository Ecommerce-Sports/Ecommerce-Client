import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main className="login-box">
        <div className="title">
          <Link to="">
            <div className="login">
              <p>Masuk</p>
            </div>
          </Link>
          <Link to="/register">
            <div className="regist">
              <p>Daftar</p>
            </div>
          </Link>
        </div>
        <img
          className="logo-text"
          src="/assets/tokopaedi-text.png"
          alt="tokopaedi-logo-with-text"
        />
        <div className="slogan-line">
          <p className="slogan-text">SPORT AS YOUR LIFE</p>
        </div>
        <form className="form-login" action="../home-page.html" method="post">
          <div className="form-goup">
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email *"
              id=""
              required
            />
            <br />
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password *"
              id=""
              required
            />
          </div>
          <button className="login">Login</button>
        </form>
      </main>
    </>
  );
};

export default Login;
