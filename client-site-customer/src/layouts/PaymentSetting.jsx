import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import '../style/main.css';

const PaymentSetting = () => {
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
                <div class="setting-payment">
                    <div class="payment-title-box">
                        <div class="payment-title">
                            <h2>Daftar Rekening Bank</h2>
                            <li>Akun Rekening Bank yang aktif maksimal berjumlah 3 (tiga) buah.</li>
                            <li>Pastikan anda memasukkan data yang benar dan valid</li>
                        </div>
                        <div class="payment-action">
                            <a href="#" id="">
                                <button id="">Tambahkan Rekening</button>
                            </a>
                        </div>
                    </div>
                    <div class="payment-list-box">
                        <div class="payment-box">
                            <div class="payment-image">
                                <img src="/assets/properti/payment-list-1.jpg" alt="PT Bank Rakyat Indonesia, Tbk." />
                            </div>
                            <div class="payment-description">
                                <p class="payment-bank"><span id="">PT. BANK RAKYAT INDONESIA (BRI) (PERSERO)</span></p>
                                <p class="payment-rek"><span id="">041000000000000</span></p>
                                <p class="payment-customer">a.n. <span id="">MUHAMMAD ALFIN PANGESTU</span></p>
                            </div>
                            <div class="payment-action">
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
  )
}

export default PaymentSetting