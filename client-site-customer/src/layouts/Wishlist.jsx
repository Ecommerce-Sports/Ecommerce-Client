import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const Wishlist = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };
  return (
    <>
      <Header />
      <SideNav />
      <main className="wishlist-page" onClick={closeNav}>
        <div className="wishlist-box">
          <div className="wishlist-title">
            <p>Wishlist</p>
          </div>
          <hr />
          <div className="wishlist">
            <div className="product-box">
              <div className="product-image">
                <img src="/assets/properti/detail-image.jpg" alt="wishlist" />
              </div>
              <div className="product-detail">
                <a href="/src/page/product/detail-product-page.html">
                  <h3 id="">Sepatu Forum Low</h3>
                </a>
                <p id="">Rp. 399.000</p>
              </div>
              <div className="product-action">
                <i className="fa-solid fa-trash"></i>
                <a href="/src/page/payment/cart-page.html">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
            </div>
            <div className="product-box">
              <div className="product-image">
                <img src="/assets/properti/detail-image.jpg" alt="wishlist" />
              </div>
              <div className="product-detail">
                <a href="/src/page/product/detail-product-page.html">
                  <h3 id="">Sepatu Forum Low</h3>
                </a>
                <p id="">Rp. 399.000</p>
              </div>
              <div className="product-action">
                <i className="fa-solid fa-trash"></i>
                <a href="/src/page/payment/cart-page.html">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
            </div>
            <div className="product-box">
              <div className="product-image">
                <img src="/assets/properti/detail-image.jpg" alt="wishlist" />
              </div>
              <div className="product-detail">
                <a href="/src/page/product/detail-product-page.html">
                  <h3 id="">Sepatu Forum Low</h3>
                </a>
                <p id="">Rp. 399.000</p>
              </div>
              <div className="product-action">
                <i className="fa-solid fa-trash"></i>
                <a href="/src/page/payment/cart-page.html">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Wishlist;
