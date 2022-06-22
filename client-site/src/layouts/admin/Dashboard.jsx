import React, { useEffect } from 'react';
import {Header, Sidebar} from "../../components/admin";
import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useNavigate } from 'react-router-dom';
import '../../style/admin/main.css';

const PerformancePage = () => {
    const navigate = useNavigate()
    useEffect(()=> {
        if(!localStorage.token) navigate("/login")
        ScriptNavbar();
    }, [navigate]);

  return (
    <>
        <Header />
        <Sidebar />
        <main className="peformance">
            <div className="income-box">
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp <span id=''>0</span></p>
                </div>
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp <span id=''>0</span></p>
                </div>
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp <span id=''>0</span></p>
                </div>
            </div>
            <div className="status-box">
                <div className="status-box-preview">
                    <div className="status-color-pending"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">PENDING</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-success"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">SUCCESS</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-expired"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">EXPIRED</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-failed"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">FAILED</p>
                        <p className="status-detail-info"><span id=''>0</span></p>
                    </div>
                    <i className="fa-regular fa-circle-xmark"></i>
                </div>
            </div>
            <div className="recent-order-box">
                <div className="recent-order-title">
                    <p>RECENT ORDER</p>
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <table className="recent-order-table">
                    <thead>
                        <tr>
                            <td>INVOICE Number</td>
                            <td>Customer Name</td>
                            <td>Status</td>
                            <td className='cr'>Created at</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> success</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> pending</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> failed</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> expired</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> success</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> pending</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> failed</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> expired</td>
                            <td className='cr'>Kamis, 26 Mei 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <footer>
                Admin Server Site &#169; 2022, Tokopaedi
            </footer>
        </main>
    </>
  )
}

export default PerformancePage