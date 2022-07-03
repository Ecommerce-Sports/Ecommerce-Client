import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../redux/action';
import "../style/main.css";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [alamat, setAlamat] = useState({
        provinsi: [],
        kota: [],
    })
    const [alamatAsal, setAlamatAsal] = useState({
        provinsi: null,
        kota: null,
    })
    const [alamatTujuan, setAlamatTujuan] = useState({
        provinsi: null,
        kota: null,
    })

    const url = `http://localhost:3000`;

    let email = localStorage.email;

    useEffect(() => {
        dispatch(getOneUser(email, localStorage.token));

        const getProvinsi = () => {
            fetch(`${url}/rajaongkir/provinsi`)
            .then(resp => resp.json())
            .then((data) => {
                setAlamat({
                    ...alamat,
                    provinsi: data.rajaongkir.results
                })
            })
        }
        
        if(alamatAsal.provinsi) {
            const getKota = () => {
                fetch(`${url}/rajaongkir/kota/${alamatAsal.provinsi}`)
                .then(resp => resp.json())
                .then((data) => {
                    console.log(data, `<<<<, data`);
                    setAlamat({
                        ...alamat,
                        kota: data.rajaongkir.results
                    })
                })
            }
            getKota();
        }

        getProvinsi();
    }, [dispatch, alamatAsal.provinsi])

    console.log(user, `<<<<<, user`);

    /*
    Script Dropdown untuk myFunction di address-action
    
    function myFunction() {
        document.getElementById("myDropdown").classNameList.toggle("show");
    
        window.onclick = (e) => {
            if (!e.target.matches('.dropbtn')) {
                const myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classNameList.contains('show')) {
                    myDropdown.classNameList.remove('show');
                }
            }
        }
    }
    */
    
  return (
    <>
        <Header />
        <SideNav />
        <main className="checkout-page">
        <div className="checkout-box">
            <div className="checkout-title">
                <h2>Checkout</h2>
                <button className="back" onclick="window.history.go(-1); return false;"><i className="fa-solid fa-arrow-left-long"></i><p>kembali</p></button>
            </div>
            <div className="checkout-address">
                <h4>Alamat Pengiriman</h4>
                <hr />
                <div className="address-box">
                    <div className="address-list">
                        <div className="address-box">
                            <p><span className="property" id="">Rumah</span><span className="status" id="">Utama</span></p>
                            <p><span className="customer-name" id="">{user.nama_depan} {user.nama_belakang}</span></p>
                            <p><span className="phone" id="">{user.no_telepon}</span></p>
                            <p>
                                <span className="address" id="">

                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="address-action">
                <div className="address-loc">
                {/* Kota Asal */}
                    <div className="province">
                        <p>Provinsi</p>
                        <select value={alamatAsal.provinsi} onChange={(e) => setAlamatAsal({ ...alamatAsal, provinsi: e.target.value })} >
                            <option >Pilih Provinsi</option>
                            {alamat.provinsi.length > 0
                            ? alamat.provinsi.map((e) => {
                                return (
                                    <option value={e.province_id}>{e.province}</option>
                                )
                            })
                            : null
                            }
                        </select>
                    </div>
                    <div className="city">
                        <p>Kabupaten / Kota</p>
                        <select value={alamatAsal.kota} onChange={(e) => setAlamatAsal({ ...alamatAsal, kota: e.target.value })} >
                            <option >Pilih Kota / Kabupaten</option>
                            {alamat.kota.length > 0
                            ? alamat.kota.map((e) => {
                                return (
                                    <option value={e.city_id}>{e.city_name}</option>
                                )
                            })
                            : null
                            }
                        </select>
                    </div>

                    {/* Kota Tujuan */}
                    <div className="province">
                        <p>Provinsi</p>
                        <select value={alamatTujuan.provinsi} onChange={(e) => setAlamatTujuan({ ...alamatTujuan, provinsi: e.target.value })} >
                            <option >Pilih Provinsi</option>
                            {alamat.provinsi.length > 0
                            ? alamat.provinsi.map((e) => {
                                return (
                                    <option value={e.province_id}>{e.province}</option>
                                )
                            })
                            : null
                            }
                        </select>
                    </div>
                    <div className="city">
                        <p>Kabupaten / Kota</p>
                        <select value={alamatTujuan.kota} onChange={(e) => setAlamatTujuan({ ...alamatTujuan, kota: e.target.value })} >
                            <option >Pilih Kota / Kabupaten</option>
                            {alamat.kota.length > 0
                            ? alamat.kota.map((e) => {
                                return (
                                    <option value={e.city_id}>{e.city_name}</option>
                                )
                            })
                            : null
                            }
                        </select>
                    </div>
                </div>
                
                <button className="dropbtn" onclick="myFunction()">Pilih Alamat<i className="fa fa-caret-down"></i></button>
                    <div className="dropdown-content" id="myDropdown">
                    <a href="">
                        <div className="address-box">
                            <p><span className="property" id="">Rumah</span></p>
                            <p><span className="customer-name" id="">Username</span></p>
                            <p><span className="address" id="">Jl Mawar GG Melati no 17, Sukolilo, Wonokromo, Kota Surabaya, Jawa Timur</span></p>
                        </div>
                    </a>
                    <a href="">
                        <div className="address-box">
                            <p><span className="property" id="">Rumah</span></p>
                            <p><span className="customer-name" id="">Username</span></p>
                            <p><span className="address" id="">Jl Mawar GG Melati no 17, Sukolilo, Wonokromo, Kota Surabaya, Jawa Timur</span></p>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="checkout-product">
                <h4>Produk yang ingin dibeli</h4>
                <div className="product-box">
                    <div className="product-image">
                        <img src="/assets/properti/detail-image.jpg" alt="product-image" />
                    </div>
                    <div className="product-description">
                        <p id="name">ADIDAS FORUM LOW - WHITE</p>
                        <p id="size">size : <span id="">40</span></p>
                        <p id="amount">jumlah : <span>1</span> barang</p>
                    </div>
                    <div className="mobile-view" />
                    <div className="product-price">
                        <p id="">Rp. <span id="">399.000</span></p>
                    </div>
                </div>
                <div className="product-box">
                    <div className="product-image">
                        <img src="/assets/properti/detail-image.jpg" alt="product-image" />
                    </div>
                    <div className="product-description">
                        <p id="name">ADIDAS FORUM LOW - WHITE</p>
                        <p id="size">size : <span id="">40</span></p>
                        <p id="amount">jumlah : <span>1</span> barang</p>
                    </div>
                    <div className="mobile-view" />
                    <div className="product-price">
                        <p id="">Rp. <span id="">399.000</span></p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="checkout-courier">
                <h4>Pilih pengiriman <span>( pilih salah satu )</span></h4>
                <div className="courier-list">
                    <div className="courier-box">
                        <input type="checkbox" name="" id="" />
                        <div className="courier-info">
                            <p className="courier-name" id="">JNE Express</p>
                            <p className="courier-estimate" id="">Estimasi tiba 2 - 4 Jul</p>
                        </div>
                        <div className="courier-payment">
                            <p className="payment">Rp. <span id="">19.000</span></p>
                        </div>
                    </div>
                    <div className="courier-box">
                        <input type="checkbox" name="" id="" />
                        <div className="courier-info">
                            <p className="courier-name" id="">JNT Reguler</p>
                            <p className="courier-estimate" id="">Estimasi tiba 2 - 4 Jul</p>
                        </div>
                        <div className="courier-payment">
                            <p className="payment">Rp. <span id="">19.000</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <aside className="payment-box">
            <h4>Ringkasan belanja</h4>
            <div className="total-product">
                <p className="product"><span id="">2</span> barang</p>
                <p className="payment">Rp. <span id="">798.000</span></p>
            </div>
            <div className="total-courier">
                <p className="courier" id="">JNE Express</p>
                <p className="payment">Rp. <span id="">19.000</span></p>
            </div>
            <hr />
            <div className="total-shop">
                <p className="total">Total</p>
                <p className="payment-total">Rp. <span id="">817.000</span></p>
            </div>
            <button className="payment-btn"><i className="fa-solid fa-money-bill-wave"></i> Pilih Pembayaran</button>
            <button className="done-btn" style={{ cursor: "not-allowed", opacity: "50%" }} disabled>Selesai</button>
        </aside>
        </main>
        <Footer />
    </>
    
  )
}

export default Checkout