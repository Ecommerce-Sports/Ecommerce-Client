import React from 'react';

function EditProfilePopUp() {
  return (
    <>
        <form className='edit-profile' method='post'>
            <h2>Edit Profil</h2>
            <h4>Ubah Biodata Diri</h4>
            <p>Nama</p>
            <input type={'text'} id="" placeholder="Nama Anda" />
            <p>Tanggal lahir</p>
            <input type={'date'} id="dateBirth" />
            <h4>Ubah kontak</h4>
            <p>Username</p>
            <input type={'text'} id="" placeholder="Username" />
            <p>Email</p>
            <input type={'email'} id="" placeholder="example@gmail.com" />
            <p>Telepon</p>
            <input type={'tel'} id="" placeholder="08xxxxxxx" />
            <h4>Ubah kata sandi</h4>
            <p>Kata sandi</p>
            <input type={'password'} id="" />
            <p>Konfirmasi kata sandi</p>
            <input type={'password'} id="" />
            <h4>Ubah karir</h4>
            <p>Pekerjaan</p>
            <input type={'text'} id="" />
            <p>Pendapatan per bulan</p>
            <input type={'text'} id="" placeholder="Ex. Rp 4.000.000" />
            <button className='submitEdit' type='submit'>Simpan</button>
            <button className='cancelEdit' type='cancel'>Batal</button>
        </form>
    </>
  );
};

export default EditProfilePopUp;