import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import "../style/main.css";

const Payment = () => {
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
                <p className="product"><span id="">2</span> barang</p>
                <p className="payment">Rp. <span id="">798.000</span></p>
            </div>
            <div className="total-courier">
                <p className="courier" id="">JNE Express</p>
                <p className="payment">Rp. <span id="">19.000</span></p>
            </div>
        </div>
        <div className="payment-action">
            <div className="payment-total">
                <p className="title">Total</p>
                <p className="total-pay">Rp. <span id="">814.000</span></p>
            </div>
            <button className="pay" id=""><i className="fa-solid fa-shield"></i>Bayar</button>
        </div>
        </main>
        <Footer />
    </>
  )
}

export default Payment