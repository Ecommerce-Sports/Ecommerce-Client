import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const DetailProduct = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };
  return (
    <>
      <Header />
      <SideNav />
      <main className="detail-product-page" onClick={closeNav}>
        <div className="product-detail">
          <div className="detail-image">
            <img src="/assets/properti/detail-image.jpg" alt="detail" />
          </div>
          <div className="product-description">
            <h2>Deskripsi</h2>
            <p id="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="product-response">
            <h2>Ulasan</h2>
            <div className="product-rating">
              <span id="">4.9</span>
              <p> / 5</p>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="product-comment">
            <h2>Komentar</h2>
            <div className="comment-box">
              <div className="comment-user-image">
                <img
                  src="/assets/properti/profile-picture.png"
                  alt="user-profile"
                />
                <div className="comment-product-ratting">
                  <p><span id="">4</span> / 5 <i className="fa-solid fa-star"></i></p>
                </div>
              </div>
              <div className="comment-user-description">
                <h3 id="">Username</h3>
                <p id="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima atque eum, voluptate maiores ex aperiam odit
                  repellendus deserunt eius totam unde sequi in ut cupiditate
                  delectus expedita laboriosam harum voluptatibus!
                </p>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-user-image">
                <img
                  src="/assets/properti/profile-picture.png"
                  alt="user-profile"
                />
                <div className="comment-product-ratting">
                  <span id="">5</span>
                  <p> / 5</p>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="comment-user-description">
                <h3 id="">Username</h3>
                <p id="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima atque eum, voluptate maiores ex aperiam odit
                  repellendus deserunt eius totam unde sequi in ut cupiditate
                  delectus expedita laboriosam harum voluptatibus!
                </p>
              </div>
            </div>
          </div>
        </div>
        <aside>
          <h1 id="">SEPATU FORUM LOW - WHITE</h1>
          <h2 id="">Rp. 2.999.000</h2>
          <div className="product-size">
            <p>size :</p>
            <span className="input">
              <select name="size" id="size">
                <option value="">Pilih ukuran</option>
                <option value="34">34</option>
                <option value="36">36</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="m">M</option>
              </select>
            </span>
          </div>
          <div className="product-choose">
            <p>Jumlah :</p>
            <div className="product-detail-choose">
              <button className="min-button">
                <i className="fa-solid fa-minus"></i>
              </button>
              <input type="text" name="product-detail-choose" id="" />
              <button className="plus-button">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-detail-action">
            <Link to="/cart">
              <button className="addtocart-button">
              <i className="fa-solid fa-plus"></i> keranjang
              </button>
            </Link>
            <a href="/src/page/product/wishlist-page.html">
              <button className="wishlist-button">
                <i className="fa-solid fa-heart-circle-plus"></i>
              </button>
            </a>
          </div>
        </aside>
      </main>
      <div className="product-footer">
        <Footer />
      </div>
    </>
  );
};

export default DetailProduct;
