import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const EditProfile = () => {
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
            <div className="setting-biodata">
              <div className="biodata-left">
                <div className="biodata-image-box">
                  <div className="image-view-upload">
                    <p>
                      <input
                        type="file"
                        accept="image/*"
                        name="image"
                        id="file"
                        style={{ display: "none" }}
                      />
                    </p>
                    <p>
                      <img
                        id="output"
                        width="95%"
                        height="300px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        alt=""
                      />
                    </p>
                    <button className="banner-image-upload">
                      <label for="file" style={{ cursor: "pointer" }}>
                        <i className="fa-solid fa-file-arrow-up"></i>
                        UPLOAD
                      </label>
                    </button>
                    <p className="note">
                      Besar file: maksimum 10.000.000 bytes (10 Megabytes).
                      Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="biodata-right">
                <div className="biodata-customer">
                  <h4>Biodata Diri</h4>
                  <div className="list-body">
                    <p style={{ textDecoration: "none" }}>Nama</p>
                    <span id="">Muhammad Alfin</span>
                    <br />
                    <br />
                    <p>Tanggal Lahir</p>
                    <span id="">32 Desember 1999</span>
                    <br />
                    <br />
                    <p>Jenis Kelamin</p>
                    <span id="">Laki-laki</span>
                  </div>
                </div>
                <div className="biodata-contact">
                  <h4>Kontak</h4>
                  <div className="list-body">
                    <p>Username</p>
                    <span id="">finpangestu</span>
                    <br />
                    <br />
                    <p>Email</p>
                    <span id="">muhammadalfinpangestu@gmail.com</span>
                    <br />
                    <br />
                    <p>Telepon</p>
                    <span id="">085123456789</span>
                  </div>
                </div>
                <div className="biodata-account">
                  <h4>Kata Sandi</h4>
                  <div className="list-body">
                    <p>Kata Sandi</p>
                    <span id="">***********</span>
                  </div>
                </div>
                <div className="biodata-career">
                  <h4>Karir</h4>
                  <div className="list-body">
                    <p>Pekerjaan</p>
                    <span id="">3D Modelling</span>
                    <br />
                    <br />
                    <p>Pendapatan</p>
                    <span id="">Rp. 24.000.000</span> /bulan
                  </div>
                </div>
                <div className="biodata-action">
                  <button id="">Edit Profil</button>
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

export default EditProfile;
