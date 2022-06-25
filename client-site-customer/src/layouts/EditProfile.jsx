import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import '../style/main.css';

const EditProfile = () => {
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
                <div class="setting-biodata">
                    <div class="biodata-left">
                        <div class="biodata-image-box">
                            <div class="image-view-upload">
                                <p>
                                    <input type="file"  accept="image/*" name="image" id="file" style={{ display: "none" }} />
                                </p>
                                <p>
                                    <img id="output" width="95%" height="300px" style={{ objectFit: "cover", objectPosition: "center"}} alt='' />
                                </p>
                                <button class="banner-image-upload">
                                    <label for="file" style={{ cursor: "pointer" }}>
                                    <i class="fa-solid fa-file-arrow-up"></i>
                                        UPLOAD
                                    </label>
                                </button>
                                <p class="note">Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG </p> 
                            </div>
                        </div>
                    </div>
                    <div class="biodata-right">
                        <div class="biodata-customer">
                            <h4>Ubah Biodata Diri</h4>
                            <div class="list-body">
                                <p style={{ textDecoration: "none" }}>Nama</p><span id="">Muhammad Alfin</span><a href="#" id="">Ubah</a><br />
                                <br />
                                <p>Tanggal Lahir</p><span id="">32 Desember 1999</span><a href="#" id="">Ubah</a><br />
                                <br />
                                <p>Jenis Kelamin</p><span id="">Laki-laki</span>
                            </div>
                        </div>
                        <div class="biodata-contact">
                            <h4>Ubah Kontak</h4>
                            <div class="list-body">
                                <p>Username</p><span id="">finpangestu</span><a href="#" id="">Ubah</a><br />
                                <br />
                                <p>Email</p><span id="">muhammadalfinpangestu@gmail.com</span><a href="#" id="">Ubah</a><br />
                                <br />
                                <p>Telepon</p><span id="">085123456789</span><a href="#" id="">Ubah</a>
                            </div>
                        </div>
                        <div class="biodata-account">
                            <h4>Ubah Kata Sandi</h4>
                            <div class="list-body">
                                <p>Kata Sandi</p><span id="">***********</span><a href="#" id="">Ubah</a>
                            </div>
                        </div>
                        <div class="biodata-career">
                            <h4>Ubah Karir</h4>
                            <div class="list-body">
                                <p>Pekerjaan</p><span id="">3D Modelling</span><a href="#" id="">Ubah</a><br />
                                <br />
                                <p>Pendapatan</p><span id="">Rp. 24.000.000</span>/bulan<a href="#" id="">Ubah</a>
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

export default EditProfile