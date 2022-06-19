import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login")
    }

  return (
    <nav className="sidebar close">
        <div className="menu-bar">
            <div className="menu">
                <ul className="menu-link">
                    <li className="nav-link">
                        <Link to="/">
                            <i className="fa-solid fa-chart-line"></i>
                            <span className="text nav-text">Peformance</span>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/product">
                            <i className="fa-solid fa-bag-shopping"></i>
                            <span className="text nav-text">Product</span>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/category">
                            <i className="fa-solid fa-list-ul"></i>
                            <span className="text nav-text">Category</span>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/order">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span className="text nav-text">Order</span>
                        </Link>
                    </li>
                    <li className="nav-link ">
                        <Link to="/customer-list">
                            <i className="fa-solid fa-user-group"></i>
                            <span className="text nav-text">Customer</span>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/banner">
                            <i className="fa-solid fa-rectangle-ad"></i>
                            <span className="text nav-text">Advertisement</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bottom-content">
            <li className="">
                <a onClick={handleLogout}>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    <span className="text nav-text">Logout</span>
                </a>
            </li>
        </div>
    </nav>
  )
}

export default Sidebar