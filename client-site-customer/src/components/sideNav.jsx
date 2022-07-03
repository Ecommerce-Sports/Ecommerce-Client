import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../redux/action';

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  let email = localStorage.email;

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };

  useEffect(()=> {
    dispatch(getOneUser(email, localStorage.token));
  }, [dispatch, email])

  return (
    <nav id="mySidenav" className="sidenav">
      <button className="closebtn" onClick={closeNav}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="nav-profile-box">
        <div className="profile">
          <div className="profile-image">
            <img src="/assets/properti/profile-picture.png" alt="profile" />
          </div>
          <div className="profile-detail">
            <h2 id="">{user.nama_belakang} {user.nama_belakang}</h2>
            <p>
              Join Date : <span id="">{user.createdAt.slice(0, 10)}</span>
            </p>
          </div>
        </div>
        <Link to="/edit-profile">
          <div className="profile-action">
            <i className="fa-solid fa-gear"></i>
            <p>Edit Profil</p>
          </div>
        </Link>
      </div>
      <div className="navbar-action">
        <Link to="/order-list">
          <p>Pembelian</p>
          <i className="fa-solid fa-truck-fast"></i>
        </Link>
        <Link to="/wishlist">
          <p>Wishlist</p>
          <i className="fa-solid fa-heart-circle-plus"></i>
        </Link>
        <Link to="/edit-profile">
          <p>Pengaturan</p>
          <i class="fa-solid fa-gear"></i>
        </Link>
      </div>
      <div className="navbar-logout">
        <Link to="/login">
          <p>Keluar</p>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
