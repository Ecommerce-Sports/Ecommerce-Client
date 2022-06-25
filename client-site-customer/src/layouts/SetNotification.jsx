import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import '../style/main.css';

const SetNotification = () => {
  return (
    <>
    <Header />
    <SideNav />
    <main class="setting-page">
        <div class="setting-box">
            <div class="setting-head">
                <Link to="/edit-profile">
                    <div class="menu-box">
                        <i class="fa-solid fa-user"></i>
                        <p>Biodata Diri</p>
                    </div>
                </Link>
                <Link to="/address-list">
                    <div class="menu-box">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <p>Daftar Alamat</p>
                    </div>
                </Link>
                <Link to="/payment-setting">
                    <div class="menu-box">
                        <i class="fa-solid fa-money-bill-wave"></i>
                        <p>Pembayaran</p>
                    </div>
                </Link>
                <Link to="/set-notification">
                    <div class="menu-box">
                        <i class="fa-solid fa-bell"></i>
                        <p>Notifikasi</p>
                    </div>
                </Link>
            </div>
            <hr />
            <div class="setting-body">
                <div class="setnotification-page">
                    <div class="setnotification-title">
                        <h2>Notifikasi</h2>
                        <p>Atur Notifikasi yang ingin kamu terima disini</p>
                    </div>
                    <div class="setnotification-body">
                        <div class="body-title">
                            <p class="transaction">Transaksi</p>
                            <p class="email">E-mail</p>
                        </div>
                        <div class="body-action">
                            <div class="body-action-title">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p>Transaksi Pembelian</p>
                            </div>
                            <hr />
                            <div class="body-action-list">
                                <p>Menunggu Pembayaran</p>
                                <input type="checkbox" name="agree" id="" checked />
                            </div>
                            <hr />
                            <div class="body-action-list">
                                <p>Menunggu Konfirmasi</p>
                                <input type="checkbox" name="agree" id="" checked />
                            </div>
                            <hr />
                            <div class="body-action-list">
                                <p>Pesanan Diproses</p>
                                <input type="checkbox" name="agree" id="" checked />
                            </div>
                            <hr />
                            <div class="body-action-list">
                                <p>Pesanan Dikirim</p>
                                <input type="checkbox" name="agree" id="" checked />
                            </div>
                            <hr />
                            <div class="body-action-list">
                                <p>Pesanan Tiba</p>
                                <input type="checkbox" name="agree" id=""checked />
                            </div>
                            <hr />
                            <div class="body-action-list">
                                <p>Pengingat</p>
                                <input type="checkbox" name="agree" id="" checked />
                            </div>
                            <hr />
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

export default SetNotification