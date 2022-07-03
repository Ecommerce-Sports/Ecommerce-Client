import React from 'react';
import Header from '../components/header';
import SideNav from '../components/sideNav';
import Footer from '../components/footer';
import "../style/main.css";

function PayInfo() {
  return (
    <>
        <Header />
        <SideNav />
        <div className='pay-info'>
            <div className='info-box'>
                <i class="fa-solid fa-circle-check"></i>
                <h3>SELAMAT! transaksi anda telah diajukan.</h3>
                <p>Silahkan menunggu konfirmasi.</p>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default PayInfo;