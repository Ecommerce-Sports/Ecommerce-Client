import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const SetNotification = () => {
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
            {/* <Link to="/address-list">
              <div className="menu-box">
                <i className="fa-solid fa-map-location-dot"></i>
                <p>Daftar Alamat</p>
              </div>
            </Link> */}
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
            <div className="setnotification-page">
              <div className="setnotification-title">
                <h2>Notifikasi</h2>
                <p>Atur Notifikasi yang ingin kamu terima disini</p>
              </div>
              <div className="setnotification-body">
                <div className="body-title">
                  <p className="transaction">Transaksi</p>
                  <p className="email">E-mail</p>
                </div>
                <div className="body-action">
                  <div className="body-action-title">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p>Transaksi Pembelian</p>
                  </div>
                  <hr />
                  <div className="body-action-list">
                    <p>Menunggu Konfirmasi</p>
                    <input type="checkbox" name="agree" id="" checked />
                  </div>
                  <hr />
                  <div className="body-action-list">
                    <p>Menunggu Pembayaran</p>
                    <input type="checkbox" name="agree" id="" />
                  </div>
                  <hr />
                  <div className="body-action-list">
                    <p>Pesanan Diproses</p>
                    <input type="checkbox" name="agree" id="" />
                  </div>
                  <hr />
                  <div className="body-action-list">
                    <p>Pesanan Dikirim</p>
                    <input type="checkbox" name="agree" id="" />
                  </div>
                  <hr />
                  <div className="body-action-list">
                    <p>Pesanan Tiba</p>
                    <input type="checkbox" name="agree" id="" />
                  </div>
                  <hr />
                  {/* <div className="body-action-list">
                    <p>Pengingat</p>
                    <input type="checkbox" name="agree" id=""  />
                  </div> */}
                  <hr />
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

export default SetNotification;
