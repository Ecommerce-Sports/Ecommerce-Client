import React from "react";
import {Link} from "react-router-dom";

const SideNav = () => {
    
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };

  return (
    <nav id="mySidenav" className="sidenav">
      <a className="closebtn" onClick={closeNav}>
        <i className="fa-solid fa-xmark"></i>
      </a>
      <div className="nav-profile-box">
        <div className="profile">
          <div className="profile-image">
            <img src="/assets/properti/profile-picture.png" alt="profile" />
          </div>
          <div className="profile-detail">
            <h2 id="">Username</h2>
            <p>
              Join Date : <span id="">18 Feb 2022</span>
            </p>
          </div>
        </div>
        <Link to="/edit-profile">
          <div className="profile-action">
            <i className="fa-solid fa-gear"></i>
            <p>Edit Profil</p>
          </div>
        </Link>
      </div>
      <div className="navbar-action">
        <Link to="/order-list">
          <p>Pembelian</p>
          <i className="fa-solid fa-truck-fast"></i>
        </Link>
        <a href="/src/page/product/wishlist-page.html">
          <p>Wishlist</p>
          <i className="fa-solid fa-heart-circle-plus"></i>
        </a>
        <a href="/src/page/payment/cart-page.html">
          <p>Keranjang</p>
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
        <a href="/src/page/product/all-product-page.html">
          <p>Product</p>
          <i className="fa-solid fa-bag-shopping"></i>
        </a>
        <a href="/src/page/setting/edit-profile-page.html">
          <p>Pengaturan</p>
          <i className="fa-solid fa-gear"></i>
        </a>
      </div>
      <div className="navbar-logout">
        <a href="/src/page/login/login-page.html">
          <p>Keluar</p>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </a>
      </div>
    </nav>
  );
};

export default SideNav;
