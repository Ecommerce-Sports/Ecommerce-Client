import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import '../style/main.css';

const AddressList = () => {
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
                <div class="setting-address">
                    <div class="address-action">
                        <a href="#">
                            <button id="">Tambahkan Alamat</button>
                        </a>
                    </div>
                    <div class="address-list">
                        <div class="address-box">
                            <p><span class="property" id="">Rumah</span><span class="status" id="">Utama</span></p>
                            <p><span class="customer-name" id="">Username</span></p>
                            <p><span class="phone" id="">08512456789</span></p>
                            <p><span class="address" id="">Jl Mawar GG Melati no 17, Sukolilo, Wonokromo, Kota Surabaya, Jawa Timur</span></p>
                            <a href="#" id="">Ubah Alamat</a>
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

export default AddressList