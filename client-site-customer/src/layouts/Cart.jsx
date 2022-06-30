import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import "../style/main.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };
  return (
    <>
      <Header />
      <SideNav />
      <main className="cart-page" onClick={closeNav}>
        <div className="cart-box">
          <div className="cart-title">
            <h2>Keranjang</h2>
            <div className="cart-selectall">
              <input type="checkbox" onclick="toggle(this)" id="" />
              <p>Pilih semua</p>
            </div>
          </div>
          <hr />
          <div className="cart-list">
            <div className="product-list-box">
              <input type="checkbox" name="foo" value="list1" id="" />
              <div className="product-image-list">
                <img
                  src="/assets/properti/detail-image.jpg"
                  alt="product-list"
                />
              </div>
              <div className="product-detail-list">
                <a href="/src/page/product/detail-product-page.html">
                  <h3 id="">Sepatu Forum Low</h3>
                </a>
                <p id="">Rp. 399.000</p>
              </div>
              <div className="product-action-list">
                <i className="fa-solid fa-trash"></i>
                <p>|</p>
                <div className="product-action-add">
                  <i className="fa-solid fa-minus"></i>
                  <input type="text" name="product-action-add" id="" />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="product-list-box">
              <input type="checkbox" name="foo" value="list1" id="" />
              <div className="product-image-list">
                <img
                  src="/assets/properti/detail-image.jpg"
                  alt="product-list"
                />
              </div>
              <div className="product-detail-list">
                <a href="/src/page/product/detail-product-page.html">
                  <h3 id="">Sepatu Forum Low</h3>
                </a>
                <p id="">Rp. 399.000</p>
              </div>
              <div className="product-action-list">
                <i className="fa-solid fa-trash"></i>
                <p>|</p>
                <div className="product-action-add">
                  <i className="fa-solid fa-minus"></i>
                  <input type="text" name="product-action-add" id="" />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="product-list-box">
              <input type="checkbox" name="foo" value="list1" id="" />
              <div className="product-image-list">
                <img
                  src="/assets/properti/detail-image.jpg"
                  alt="product-list"
                />
              </div>
              <div className="product-detail-list">
                <a href="/src/page/product/detail-product-page.html">
                  <h3 id="">Sepatu Forum Low</h3>
                </a>
                <p id="">Rp. 399.000</p>
              </div>
              <div className="product-action-list">
                <i className="fa-solid fa-trash"></i>
                <p>|</p>
                <div className="product-action-add">
                  <i className="fa-solid fa-minus"></i>
                  <input type="text" name="product-action-add" id="" />
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cost-box">
          <div className="cost-title">
            <h3>Ringkasan Pemesanan</h3>
          </div>
          <div className="cost-list">
            <div className="product-list">
              <p className="product-name" id="">
                Nama barang (x<span id="">1</span>)
              </p>
              <p className="product-cost">Rp. 999.000</p>
            </div>
            <div className="product-list">
              <p className="product-name" id="">
                Nama barang (x<span id="">1</span>)
              </p>
              <p className="product-cost">Rp. 999.000</p>
            </div>
            <div className="product-list">
              <p className="product-name" id="">
                Nama barang (x<span id="">1</span>)
              </p>
              <p className="product-cost">Rp. 999.000</p>
            </div>
          </div>
          <hr />
          <div className="cost-total">
            <p className="total">Total</p>
            <p className="payment">Rp. 999.000</p>
          </div>
          <div className="cost-action">
            <a href="#">
              <button className="buy" id="">
                Beli
              </button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
