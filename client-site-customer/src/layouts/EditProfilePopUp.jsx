import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../redux/action';
import { useNavigate } from 'react-router-dom';

function EditProfilePopUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [biodata, setBiodata] = useState({
    nama_depan: user.nama_depan,
    tanggal_lahir: user.tanggal_lahir,
    username: user.username,
    email: user.email,
    no_telepon: user.no_telepon,
    // password: user.password,
    pekerjaan: user.pekerjaan,
  })

  let email = localStorage.email;

  useEffect(()=> {
    dispatch(getOneUser(email, localStorage.token))
  }, [dispatch, email])

  return (
    <>
      <Header />
      <SideNav />
        <form className='edit-profile' method='post'>
            <h2>Edit Profil</h2>
            <h4>Ubah Biodata Diri</h4>
            <p>Nama</p>
            <input type={'text'} value={biodata.nama_depan} placeholder="Nama Anda" />
            <p>Tanggal lahir</p>
            <input type={'date'} value={biodata.tanggal_lahir} id="dateBirth" />
            <h4>Ubah kontak</h4>
            <p>Username</p>
            <input type={'text'} value={biodata.username} placeholder="Username" />
            <p>Email</p>
            <input type={'email'} value={biodata.email} placeholder="example@gmail.com" />
            <p>Telepon</p>
            <input type={'tel'} value={biodata.no_telepon} placeholder="08xxxxxxx" />
            {/* <h4>Ubah kata sandi</h4>
            <p>Kata sandi</p>
            <input type={'password'} value={biodata.password} /> */}
            <h4>Ubah karir</h4>
            <p>Pekerjaan</p>
            <input type={'text'} value={biodata.pekerjaan} />
            <button className='submitEdit' type='submit'>Simpan</button>
            <button  onClick={()=> navigate("/edit-profile")} className='cancelEdit' type='cancel'>Batal</button>
        </form>
        {/* <Footer /> */}
    </>
  );
};

export default EditProfilePopUp;