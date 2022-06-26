import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/wishlist">
          <p>Wishlist</p>
          <i className="fa-solid fa-heart-circle-plus"></i>
        </Link>
        <Link to="/edit-profile">
          <p>Pengaturan</p>
          <i class="fa-solid fa-gear"></i>
        </Link>
      </div>
      <div className="navbar-logout">
        <Link to="/login">
          <p>Keluar</p>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
