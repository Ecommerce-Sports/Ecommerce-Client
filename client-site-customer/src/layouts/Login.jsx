import React, { useState } from "react";
import { Link } from "react-router-dom";import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios({
      method: 'post',
      // url: 'http://localhost:3000/user/login',
      url: 'https://ecommerce-sports-server.herokuapp.com',
      data: {
        email: email,
        password: password
      }
    })
    .then((res) => {
      console.log(res, `<<<< res`);
      if(res.data.token) {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('email', res.data.email)
        if(res.data.role === 'customer') {
          navigate(`/?email=${res.data.email}`)
        }
      }
    })
  }

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
        <form onSubmit={handleSubmitLogin} className="form-login" action="../home-page.html" method="post">
          <div className="form-goup">
            <input
              className="email"
              type="email"
              name="email"
              placeholder="Email *"
              id="email"
              required
              value={email} 
              onChange={handleEmail}
            />
            <br />
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Password *"
              id="password"
              required
              value={password} onChange={handlePassword}
            />
          </div>
          <button className="login">Masuk</button>
        </form>
      </main>
    </>
  );
};

export default Login;
