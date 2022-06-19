import React from 'react';

const header = () => {
  return (
    <header>
        <div className="left-navbar">
            <i className="fa-solid fa-bars"></i>
            <img className="navbar-logo" src="/assets/tokopaedi-text.png" alt="tokopaedi-text" />
        </div>
        <div className="right-navbar">
            <i className="fa-regular fa-bell"></i>
            <div className="profile-box">
                <i className="fa-solid fa-circle" style={{ color: "#61c156" }}></i>
                <p>Admin</p>
            </div>
        </div>
    </header>
  )
}

export default header