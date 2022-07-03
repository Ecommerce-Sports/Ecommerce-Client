import React, { useEffect } from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser, deleteCart, getOneCart } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import { formatRupiah } from '../utils/formatRupiah';
import "../style/main.css";

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);
    let email = localStorage.email;

    const toPageSuccess = () => {
        navigate("/payinfo");
        dispatch(deleteCart(cart.id, localStorage.token))
    }

    useEffect(()=> {
        dispatch(getOneUser(email, localStorage.token))
        dispatch(getOneCart(email, localStorage.token))
    }, [dispatch, email])

  return (
    <>
        <Header />
        <SideNav />
        <main className="payment-page">
        <div className="payment-title">
            <h2>Pembayaran</h2>
            <button className="back" onclick="window.history.go(-1); return false;"><i className="fa-solid fa-arrow-left-long"></i><p>kembali</p></button>
        </div>
        <div className="select-payment">
            <h4>Metode Pembayaran</h4>
            <div className="payment-list">
                <div className="payment-box">
                    <img src="/assets/properti/payment-list-1.jpg" alt="payment-img" />
                    <p>Direct Debit <span id="">BANK BRI</span></p>
                    <input type="radio" name="payment-select" id="" value="" />
                </div>
                <div className="payment-box">
                    <img src="/assets/properti/payment-list-2.jpg" alt="payment-img" />
                    <p>Direct Debit <span id="">BANK BCA</span></p>
                    <input type="radio" name="payment-select" id="" value="" />
                </div>
            </div>
        </div>
        <hr />
        <div className="detail-payment">
            <h4>Ringkasan Pembayaran</h4>
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
                <p className="courier" id="">
                    {sessionStorage.kurir}
                </p>
                <p className="payment">
                    <span id="">
                        {formatRupiah(43000)}
                    </span>
                </p>
            </div>
        </div>
        <div className="payment-action">
            <div className="payment-total">
                <p className="title">Total</p>
                <p className="total-pay">
                    <span id="">
                    {/* {user && user.Carts[0].order ? user.Carts[0].order.reduce((hargaAwal, hargaSekarang)=> {
                            return hargaAwal + hargaSekarang.total_harga + Number(sessionStorage.ongkir)
                        }, 0)
                    : null} */}
                    {user && user.Carts[0].order ? user.Carts[0].order.reduce((hargaAwal, hargaSekarang)=> {
                            return hargaAwal + hargaSekarang.total_harga + 43000
                        }, 0)
                    : null}
                    </span>
                </p>
            </div>
            <button onClick={toPageSuccess} className="pay" id=""><i className="fa-solid fa-shield"></i>Bayar</button>
        </div>
        </main>
        <Footer />
    </>
  )
}

export default Payment