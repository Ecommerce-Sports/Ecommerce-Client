import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const AddressList = () => {
  return (
    <>
      <Header />
      <SideNav />
      <main className="setting-page">
        <div className="setting-box">
          <div className="setting-head">
            <Link to="/edit-profile">
              <div className="menu-box">
                <i className="fa-solid fa-user"></i>
                <p>Biodata Diri</p>
              </div>
            </Link>
            <Link to="/address-list">
              <div className="menu-box">
                <i className="fa-solid fa-map-location-dot"></i>
                <p>Daftar Alamat</p>
              </div>
            </Link>
            <Link to="/payment-setting">
              <div className="menu-box">
                <i className="fa-solid fa-money-bill-wave"></i>
                <p>Pembayaran</p>
              </div>
            </Link>
            <Link to="/set-notification">
              <div className="menu-box">
                <i className="fa-solid fa-bell"></i>
                <p>Notifikasi</p>
              </div>
            </Link>
          </div>
          <hr />
          <div className="setting-body">
            <div className="setting-address">
              <div className="address-action">
                <a href="#">
                  <button id="">Tambahkan Alamat</button>
                </a>
              </div>
              <div className="address-list">
                <div className="address-box">
                  <p>
                    <span className="property" id="">
                      Rumah
                    </span>
                    <span className="status" id="">
                      Utama
                    </span>
                  </p>
                  <p>
                    <span className="customer-name" id="">
                      Username
                    </span>
                  </p>
                  <p>
                    <span className="phone" id="">
                      08512456789
                    </span>
                  </p>
                  <p>
                    <span className="address" id="">
                      Jl Mawar GG Melati no 17, Sukolilo, Wonokromo, Kota
                      Surabaya, Jawa Timur
                    </span>
                  </p>
                  <a href="#" id="">
                    Ubah Alamat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddressList;
