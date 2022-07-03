import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const PaymentSetting = () => {
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
            <div className="setting-payment">
              <div className="payment-title-box">
                <div className="payment-title">
                  <h2>Daftar Rekening Bank</h2>
                  <li>
                    Akun Rekening Bank yang aktif maksimal berjumlah 3 (tiga)
                    buah.
                  </li>
                  <li>Pastikan anda memasukkan data yang benar dan valid</li>
                </div>
                <div className="payment-action">
                  <a href="#" id="">
                    <button id="">Tambahkan Rekening</button>
                  </a>
                </div>
              </div>
              <div className="payment-list-box">
                <div className="payment-box">
                  <div className="payment-image">
                    <img
                      src="/assets/properti/payment-list-1.jpg"
                      alt="PT Bank Rakyat Indonesia, Tbk."
                    />
                  </div>
                  <div className="payment-description">
                    <p className="payment-bank">
                      <span id="">
                        PT. BANK RAKYAT INDONESIA (BRI) (PERSERO)
                      </span>
                    </p>
                    <p className="payment-rek">
                      <span id="">041000000000000</span>
                    </p>
                    <p className="payment-customer">
                      a.n. <span id="">MUHAMMAD ALFIN PANGESTU</span>
                    </p>
                  </div>
                  <div className="payment-action">
                    <button id="">Hapus</button>
                  </div>
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

export default PaymentSetting;
