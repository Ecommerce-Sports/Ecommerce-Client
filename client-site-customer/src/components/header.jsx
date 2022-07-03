import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/action';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(state => state.categories);

  //side nav bar
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "450px";
    document.getElementsByTagName("main").style.marginRight = "450px";
  };

  const handleToCategoryPage = (e) => {
    navigate(`/category/${e.id}`)
  }

  useEffect(()=> {
    dispatch(fetchCategories(localStorage.token));
  }, [dispatch])

  // console.log(categories, `<<<<< categories`);

  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/tokopaedi-text.png" alt="tokopaedi-text" />
        </Link>
      </div>
      <div className="header-category">
        <div className="category-toggle">
          <button className="dropbtn">
            <p>Kategori</p>
            <i className="fa-solid fa-chevron-down"></i>
          </button>
          <div className="dropdown-content">
            {categories.map((e) => {
              return (
                <div onClick={()=> handleToCategoryPage(e)} key={e.id}>{e.nama_kategori}</div> 
              )
            })}
          </div>
        </div>
      </div>
      <div className="header-search">
        <div className="search-box">
          <input
            type="search"
            name="search"
            className="search-input"
            id=""
            placeholder="Cari Barang ..."
          />
          <button type="button" className="search-button" id="">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="header-action">
        <div className="notification-action">
          <a href="" className="dropbtn">
            <i className="fa-solid fa-bell"></i>
          </a>
          <div className="dropdown-content">
            <div className="notification-title">
              <h4>Notifikasi</h4>
            </div>
            <div className="order-list">
              <div className="order-list-title">
                <p>Pembelian</p>
              </div>
              <div className="order-list-action">
                <a href="#">
                  <div className="order-confirmation">
                    <i className="fa-regular fa-clock"></i>
                    <p>Menunggu Konfirmasi</p>
                  </div>
                </a>
                <a href="#">
                  <div className="order-process">
                    <i className="fa-solid fa-arrows-rotate"></i>
                    <p>Pesanan Diproses</p>
                  </div>
                </a>
                <a href="#">
                  <div className="order-sending">
                    <i className="fa-solid fa-truck-fast"></i>
                    <p>Pesanan Dikirim</p>
                  </div>
                </a>
                <a href="#">
                  <div className="order-success">
                    <i className="fa-solid fa-map-location-dot"></i>
                    <p>Sampai Tujuan</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="notification-list">
              <div className="notification-list-title">
                <p>Untuk Kamu</p>
              </div>
              <div className="notification-list-body">
                <a href="#" id="">
                  <div className="notification-list-box" id="">
                    <p id="">15 Juni 2022</p>
                    <h5 id="">Pembelian Sepatu Forum Low</h5>
                    <p className="invoice">
                      No Invoice : <span id="">INV-ABCDEF123G</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-action">
          <a href="/src/page/payment/cart-page.html">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
      <div className="header-profile">
        <div className="profile-box" onClick={openNav}>
          <div className="profile-picture">
            <img src="/assets/properti/profile-picture.png" alt="profile" />
          </div>
          <div className="profile-name">
            <p>Username</p>
          </div>
          <div className="profile-navbar">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
