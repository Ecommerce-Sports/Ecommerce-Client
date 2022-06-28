import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const OrderList = () => {
  return (
    <>
      <Header />
      <SideNav />
      <main className="orderlist-page">
        <div className="orderlist-box">
          <div className="orderlist-head">
            <div className="orderlist-title">
              <h3>Transaksi Anda</h3>
            </div>
            <div className="orderlist-menu">
              <a href="#">
                <div className="menu">
                  <p>Semua</p>
                </div>
              </a>
              <a href="#">
                <div className="menu">
                  <p>Menunggu Konfirmasi</p>
                </div>
              </a>
              <a href="#">
                <div className="menu">
                  <p>Pesanan Diproses</p>
                </div>
              </a>
              <a href="#">
                <div className="menu">
                  <p>Pesanan Dikirim</p>
                </div>
              </a>
              <a href="#">
                <div className="menu">
                  <p>Sampai Tujuan</p>
                </div>
              </a>
            </div>
          </div>
          <hr />
          <div className="orderlist-body">
            <div className="no-transaction-box" hidden>
              <i className="fa-solid fa-clipboard-question"></i>
              <h3>Tidak Ada Transaksi</h3>
              <p>
                Transaksi kamu masih kosong nih. setelah belanja kamu dapat
                melihat transaksimu disini
              </p>
            </div>
            <div className="order-box">
              <div className="order-status">
                <span id="">
                  <i className="fa-solid fa-money-bill-1-wave"></i>
                </span>
                <p>
                  <span id="status">Menunggu Pembayaran</span>
                </p>
                <p>
                  <span id="date">17 Jun 2022</span>
                </p>
                <p>
                  <span id="invoice">INV-ABCDEF123G</span>
                </p>
              </div>
              <div className="order-product">
                <img src="/assets/properti/detail-image.jpg" alt="" />
                <div className="order-detail">
                  <h4>SEPATU FORUM LOW</h4>
                  <p>
                    <span id="">(x2)</span> <span id="">Rp. 399.000</span>
                  </p>
                </div>
                <div className="order-total">
                  <div className="order-calculating">
                    <p className="total">Total belanja</p>
                    <p className="payment">
                      <span id="">Rp. 698.000</span>
                    </p>
                  </div>
                  <div className="order-action">
                    <a href="#">Lihat detail pemesanan</a>
                    <a href="#">
                      <button
                        className="pay"
                        id=""
                        style={{ cursor: "pointer", opacity: "100%" }}
                      >
                        Bayar
                      </button>
                    </a>
                    <a href="#">
                      <button
                        className="success"
                        id=""
                        style={{ cursor: "not-allowed", opacity: "50%" }}
                      >
                        Pesanan diterima
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-box">
              <div className="order-status">
                <span id="">
                  <i className="fa-solid fa-arrows-rotate"></i>
                </span>
                <p>
                  <span id="status">Pesanan Diproses</span>
                </p>
                <p>
                  <span id="date">17 Jun 2022</span>
                </p>
                <p>
                  <span id="invoice">INV-ABCDEF123G</span>
                </p>
              </div>
              <div className="order-product">
                <img src="/assets/properti/detail-image.jpg" alt="" />
                <div className="order-detail">
                  <h4>SEPATU FORUM LOW</h4>
                  <p>
                    <span id="">(x2)</span> <span id="">Rp. 399.000</span>
                  </p>
                </div>
                <div className="order-total">
                  <div className="order-calculating">
                    <p className="total">Total belanja</p>
                    <p className="payment">
                      <span id="">Rp. 698.000</span>
                    </p>
                  </div>
                  <div className="order-action">
                    <a href="#">Lihat detail pemesanan</a>
                    <a href="#">
                      <button
                        className="pay"
                        id=""
                        style={{ cursor: "not-allowed", opacity: "50% " }}
                      >
                        Bayar
                      </button>
                    </a>
                    <a href="#">
                      <button
                        className="success"
                        id=""
                        style={{ cursor: "not-allowed", opacity: "50%" }}
                      >
                        Pesanan diterima
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-box">
              <div className="order-status">
                <span id="">
                  <i className="fa-solid fa-truck-fast"></i>
                </span>
                <p>
                  <span id="status">Pesanan Dikirim</span>
                </p>
                <p>
                  <span id="date">17 Jun 2022</span>
                </p>
                <p>
                  <span id="invoice">INV-ABCDEF123G</span>
                </p>
              </div>
              <div className="order-product">
                <img src="/assets/properti/detail-image.jpg" alt="" />
                <div className="order-detail">
                  <h4>SEPATU FORUM LOW</h4>
                  <p>
                    <span id="">(x2)</span> <span id="">Rp. 399.000</span>
                  </p>
                </div>
                <div className="order-total">
                  <div className="order-calculating">
                    <p className="total">Total belanja</p>
                    <p className="payment">
                      <span id="">Rp. 698.000</span>
                    </p>
                  </div>
                  <div className="order-action">
                    <a href="#">Lihat detail pemesanan</a>
                    <a href="#">
                      <button
                        className="pay"
                        id=""
                        style={{ cursor: "not-allowed", opacity: "50%" }}
                      >
                        Bayar
                      </button>
                    </a>
                    <a href="#">
                      <button
                        className="success"
                        id=""
                        style={{ cursor: "pointer", opacity: "100%" }}
                      >
                        Pesanan diterima
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-box">
              <div className="order-status">
                <span id="">
                  <i className="fa-solid fa-gift"></i>
                </span>
                <p>
                  <span id="status">Pesanan Telah Sampai</span>
                </p>
                <p>
                  <span id="date">17 Jun 2022</span>
                </p>
                <p>
                  <span id="invoice">INV-ABCDEF123G</span>
                </p>
              </div>
              <div className="order-product">
                <img src="/assets/properti/detail-image.jpg" alt="" />
                <div className="order-detail">
                  <h4>SEPATU FORUM LOW</h4>
                  <p>
                    <span id="">(x2)</span> <span id="">Rp. 399.000</span>
                  </p>
                </div>
                <div className="order-total">
                  <div className="order-calculating">
                    <p className="total">Total belanja</p>
                    <p className="payment">
                      <span id="">Rp. 698.000</span>
                    </p>
                  </div>
                  <div className="order-action">
                    <a href="#">Lihat detail pemesanan</a>
                    <a href="#">
                      <button
                        className="pay"
                        id=""
                        style={{ cursor: "not-allowed", opacity: "50%" }}
                      >
                        Bayar
                      </button>
                    </a>
                    <a href="#">
                      <button
                        className="success"
                        id=""
                        style={{ cursor: "pointer", opacity: "100%" }}
                      >
                        Pesanan diterima
                      </button>
                    </a>
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

export default OrderList;
