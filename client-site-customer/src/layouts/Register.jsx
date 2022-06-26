import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
    <main className="register-page">
        <div className="title">
            <Link to="/login">
                <div className="login">
                    <p>Masuk</p>
                </div>
            </Link>
            <a href="register-page.html">
                <div className="regist">
                    <p>Daftar</p>
                </div>
            </a>            
        </div><br />                   
        <form className="form-register" action="../home-page.html" method="post">
            <div className="form-group">
                <p>Nama Anda</p>
                <div>
                    <input className="form" type="text" name="first-name" placeholder="Nama Depan*" id="" required /><br />    
                    <input className="form" type="text" name="last-name" placeholder="Nama Belakang *" id="" required />
                </div>
                <p>Telp</p>
                <div>
                    <input className="form" type="number" name="no-telp" placeholder="No Telepon *" id="" required />
                </div>
                <p>Tgl Lahir</p>
                <div>
                    <input className="form" type="date" name="dd" placeholder="dd" id="" required />
                </div>     
                <p>Detail Akun</p>
                <div>
                    <input className="form" type="text" name="username" placeholder="Username *" id="" required />
                    <input className="form" type="text" name="email" placeholder="Email *" id="" required />
                    <input className="form" type="password" name="password" placeholder="Password *" id="" required />
                    <input className="confirm-password" type="password" name="password" placeholder="Konfirmasi Password *" id="" required />
                </div>    
                <div className="form-footer">
                    <p>Dengan menekan "Daftar", saya setuju terikat dengan Tokopaedi</p>
                    <a href="#"><p>Syarat dan Ketentuan</p> </a>
                </div>
                <div>
                    <button type="submit" action="">Daftar</button>
                </div>
            </div> 
        </form>
    </main>
    </>
  )
}

export default Register