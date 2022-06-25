import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import '../style/main.css';

const OrderList = () => {
  return (
    <>
    <Header />
    <SideNav />
    <main class="orderlist-page">
        <div class="orderlist-box">
            <div class="orderlist-head">
                <div class="orderlist-title">
                    <h3>Transaksi Anda</h3>
                </div>
                <div class="orderlist-menu">
                    <a href="#">
                        <div class="menu">
                            <p>Semua</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu">
                            <p>Menunggu Konfirmasi</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu">
                            <p>Pesanan Diproses</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu">
                            <p>Pesanan Dikirim</p>
                        </div>
                    </a>
                    <a href="#">
                        <div class="menu">
                            <p>Sampai Tujuan</p>
                        </div>
                    </a>
                </div>
            </div>
            <hr />
            <div class="orderlist-body">
                <div class="no-transaction-box" hidden>
                    <i class="fa-solid fa-clipboard-question"></i>
                    <h3>Tidak Ada Transaksi</h3>
                    <p>Transaksi kamu masih kosong nih. setelah belanja kamu dapat melihat transaksimu disini</p>
                </div>
                <div class="order-box">
                    <div class="order-status">
                        <span id=""><i class="fa-solid fa-money-bill-1-wave"></i></span>
                        <p><span id="status">Menunggu Pembayaran</span></p>
                        <p><span id="">17 Jun 2022</span></p>
                        <p><span id="">INV-ABCDEF123G</span></p>
                    </div>
                    <div class="order-product">
                        <img src="/assets/properti/detail-image.jpg" alt="" />
                        <div class="order-detail">
                            <h4>SEPATU FORUM LOW</h4>
                            <p><span id="">(x2)</span> <span id="">Rp. 399.000</span></p>
                        </div>
                        <div class="order-total">
                            <div class="order-calculating">
                                <p class="total">Total belanja</p>
                                <p class="payment"><span id="">Rp. 698.000</span></p>
                            </div>
                            <div class="order-action">
                                <a href="#">Lihat detail pemesanan</a>
                                <a href="#">
                                    <button class="pay" id="" style={{ cursor: "pointer", opacity: "100%" }}>Bayar</button>
                                </a>
                                <a href="#">
                                    <button class="success" id="" style={{ cursor: "not-allowed", opacity: "50%" }}>Pesanan diterima</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-box">
                    <div class="order-status">
                        <span id=""><i class="fa-solid fa-arrows-rotate"></i></span>
                        <p><span id="status">Pesanan Diproses</span></p>
                        <p><span id="">17 Jun 2022</span></p>
                        <p><span id="">INV-ABCDEF123G</span></p>
                    </div>
                    <div class="order-product">
                        <img src="/assets/properti/detail-image.jpg" alt="" />
                        <div class="order-detail">
                            <h4>SEPATU FORUM LOW</h4>
                            <p><span id="">(x2)</span> <span id="">Rp. 399.000</span></p>
                        </div>
                        <div class="order-total">
                            <div class="order-calculating">
                                <p class="total">Total belanja</p>
                                <p class="payment"><span id="">Rp. 698.000</span></p>
                            </div>
                            <div class="order-action">
                                <a href="#">Lihat detail pemesanan</a>
                                <a href="#">
                                    <button class="pay" id="" style={{ cursor: "not-allowed", opacity: "50% "}}>Bayar</button>
                                </a>
                                <a href="#">
                                    <button class="success" id="" style={{ cursor: "not-allowed", opacity: "50%" }}>Pesanan diterima</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-box">
                    <div class="order-status">
                        <span id=""><i class="fa-solid fa-truck-fast"></i></span>
                        <p><span id="status">Pesanan Dikirim</span></p>
                        <p><span id="">17 Jun 2022</span></p>
                        <p><span id="">INV-ABCDEF123G</span></p>
                    </div>
                    <div class="order-product">
                        <img src="/assets/properti/detail-image.jpg" alt="" />
                        <div class="order-detail">
                            <h4>SEPATU FORUM LOW</h4>
                            <p><span id="">(x2)</span> <span id="">Rp. 399.000</span></p>
                        </div>
                        <div class="order-total">
                            <div class="order-calculating">
                                <p class="total">Total belanja</p>
                                <p class="payment"><span id="">Rp. 698.000</span></p>
                            </div>
                            <div class="order-action">
                                <a href="#">Lihat detail pemesanan</a>
                                <a href="#">
                                    <button class="pay" id="" style={{ cursor: "not-allowed", opacity: "50%" }}>Bayar</button>
                                </a>
                                <a href="#">
                                    <button class="success" id="" style={{ cursor: "pointer", opacity: "100%" }}>Pesanan diterima</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="order-box">
                    <div class="order-status">
                        <span id=""><i class="fa-solid fa-gift"></i></span>
                        <p><span id="status">Pesanan Telah Sampai</span></p>
                        <p><span id="">17 Jun 2022</span></p>
                        <p><span id="">INV-ABCDEF123G</span></p>
                    </div>
                    <div class="order-product">
                        <img src="/assets/properti/detail-image.jpg" alt="" />
                        <div class="order-detail">
                            <h4>SEPATU FORUM LOW</h4>
                            <p><span id="">(x2)</span> <span id="">Rp. 399.000</span></p>
                        </div>
                        <div class="order-total">
                            <div class="order-calculating">
                                <p class="total">Total belanja</p>
                                <p class="payment"><span id="">Rp. 698.000</span></p>
                            </div>
                            <div class="order-action">
                                <a href="#">Lihat detail pemesanan</a>
                                <a href="#">
                                    <button class="pay" id="" style={{ cursor: "not-allowed", opacity: "50%" }}>Bayar</button>
                                </a>
                                <a href="#">
                                    <button class="success" id="" style={{ cursor: "pointer", opacity: "100%" }}>Pesanan diterima</button>
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
  )
}

export default OrderList