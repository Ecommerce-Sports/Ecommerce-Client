import React, { useState, useEffect } from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import "../style/main.css";
import { formatRupiah } from '../utils/formatRupiah';

const Checkout = () => {
    const url = `http://localhost:3000`;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const [alamat, setAlamat] = useState({
        provinsi: [],
        kota: [],
    })
    const [alamatAsal, setAlamatAsal] = useState({
        provinsi: null,
        kota: null
    })
    const [alamatTujuan, setAlamatTujuan] = useState({
        provinsi: null,
        kota: null
    })
    const [ongkir, setOngkir] = useState(0);
    const [kurir, setKurir] = useState("");
    const [pilihanKurir, setPilihanKurir] = useState([]);
    const [disabled, setDisabled] = useState(true);
    // const [disabledCourier, setDisabledCourier] = useState(true);
    let email = localStorage.email;

    const handleCourier = (e) => {
        setKurir(e.target.value);
        fetch(`${url}/rajaongkir/ongkos/${alamatAsal.kota}/${alamatTujuan.kota}/20/${e.target.value}`)
            .then(resp => resp.json())
            .then((data) => {
                console.log(data, `<<<<<< data`);
                setPilihanKurir(data.rajaongkir.results.costs)
            })
    }

    const handlePilihanCourier = () => {

    }

    const tpPagePayment = () => {
        navigate("/payment")
        sessionStorage.setItem('ongkir', ongkir)
        sessionStorage.setItem('kurir', kurir)
    }

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

        const handleDisabledCourier = () => {
            if(alamatAsal.provinsi !== null && alamatAsal.kota !== null && alamatTujuan.provinsi !== null && alamatTujuan.kota !== null) {
                setDisabled(false)
            }
        }

        getProvinsi();
        handleDisabledCourier();
    }, [dispatch, alamatAsal.provinsi, alamatAsal.kota, alamatTujuan.provinsi, alamatTujuan.kota])

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
                                    {/* {alamatAsal.provinsiName ? `Provinsi Asal: ${alamatAsal.provinsiName}` : null}
                                    {alamatAsal.kotaName ? `Kota Asal: ${alamatAsal.kotaName}` : null}
                                    {alamatTujuan.provinsiName ? `Tujuan: ${alamatAsal.provinsiName}` : null}
                                    {alamatTujuan.provinsiName ? `Tujuan: ${alamatTujuan.provinsiName}` : null} */}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="address-action">
                <div className="address-label">
                    <label>Alamat Asal</label>
                    <label>Alamat Tujuan</label>
                </div> 
                <div className="address-loc">
                {/* Kota Asal */}
                    <div className="province">
                        <label className='mob-view'>Alamat Asal</label>
                        <p>Provinsi</p>
                        <select value={alamatAsal.provinsi} onChange={(e) => setAlamatAsal({ ...alamatAsal, provinsi: e.target.value })} >
                            <option >Pilih Provinsi</option>
                            {alamat.provinsi.length > 0
                            ? alamat.provinsi.map((e) => {
                                return (
                                    <option key={e.province_id} value={e.province_id}>{e.province}</option>
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
                                    <option key={e.city_id} value={e.city_id}>{e.city_name}</option>
                                )
                            })
                            : null
                            }
                        </select>
                    </div>

                    {/* Kota Tujuan */}
                    <div className="province">
                        <label className='mob-view'>Alamat Asal</label>
                        <p>Provinsi</p>
                        <select value={alamatTujuan.provinsi} onChange={(e) => setAlamatTujuan({ ...alamatTujuan, provinsi: e.target.value })} >
                            <option >Pilih Provinsi</option>
                            {alamat.provinsi.length > 0
                            ? alamat.provinsi.map((e) => {
                                return (
                                    <option key={e.province_id} value={e.province_id}>{e.province}</option>
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
                                    <option key={e.city_id} value={e.city_id}>{e.city_name}</option>
                                )
                            })
                            : null
                            }
                        </select>
                    </div>
                </div>
                
                {/* <button className="dropbtn" onclick="myFunction()">Pilih Alamat<i className="fa fa-caret-down"></i></button>
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
                    </div> */}
                <div className='kurir-select'>
                    <p>Kurir</p>
                    <select disabled={disabled} value={kurir} onChange={handleCourier}>
                        <option>Pilih Kurir</option>
                        <option value="jne">JNE</option>
                        <option value="jnt">JNT</option>
                        <option value="tiki">TIKI</option>
                        <option value="pos">Pos Indonesia</option>
                    </select>
                    <p>Pilihan</p>
                    <select onChange={handlePilihanCourier}>
                        <option>Pilih Pilihan Paket</option>
                        {pilihanKurir && pilihanKurir.length > 0
                        ?
                            pilihanKurir.map((e, idx) => {
                                return (
                                    <option key={idx} value="jne">{e.service}</option>
                                )
                            })
                        : null
                        }
                    </select>
                </div>
                </div>
            </div>
            <hr />
            <div className="checkout-product">
                <h4>Produk yang ingin dibeli</h4>
                {user && user.Carts && user.Carts[0].order.length > 0
                ?
                    user.Carts[0].order.map((e) => {
                        return (
                            <div key={e.id} className="product-box">
                                <div className="product-image">
                                    <img src={e.gambar_produk} alt="product" />
                                </div>
                                <div className="product-description">
                                    <p id="name">{e.nama_barang}</p>
                                    <p id="size">size : <span id="">{e.size}</span></p>
                                    <p id="amount">jumlah : <span>{e.total}</span> barang</p>
                                </div>
                                <div className="mobile-view" />
                                <div className="product-price">
                                    <p id=""><span id="">{formatRupiah(e.total_harga)}</span></p>
                                </div>
                            </div>
                        )
                    })
                : null
                }
            </div>
            <hr />
            {/* <div className="checkout-courier">
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
            </div> */}
        </div>
        <aside className="payment-box">
            <h4>Ringkasan belanja</h4>
            <div className="total-product">
                <p className="product"><span id="">{user && user.Carts[0].order ? user.Carts[0].order.length : 0}</span> barang</p>
                <p className="payment">
                    <span id="">
                        {user && user.Carts[0].order ? user.Carts[0].order.reduce((hargaAwal, hargaSekarang)=> {
                            return hargaAwal + hargaSekarang.total_harga
                        }, 0)
                        : 0}
                    </span>
                </p>
            </div>
            <div className="total-courier">
                <p className="courier" id="">{kurir}</p>
                <p className="payment">
                    <span id="">
                        {formatRupiah(ongkir)}
                    </span>
                </p>
            </div>
            <hr />
            <div className="total-shop">
                <p className="total">Total</p>
                <p className="payment-total">
                    <span id="">
                    {user && user.Carts[0].order ? user.Carts[0].order.reduce((hargaAwal, hargaSekarang)=> {
                            return hargaAwal + hargaSekarang.total_harga + ongkir
                        }, 0)
                    : null}
                    </span>
                </p>
            </div>
            <button onClick={tpPagePayment} className="payment-btn"><i className="fa-solid fa-money-bill-wave"></i> Pilih Pembayaran</button>
            <button className="done-btn" style={{ cursor: "not-allowed", opacity: "50%" }} disabled>Selesai</button>
        </aside>
        </main>
        <Footer />
    </>
    
  )
}

export default Checkout;