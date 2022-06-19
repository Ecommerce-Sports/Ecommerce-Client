import React, { useEffect } from 'react';
import {Header, Sidebar} from "../../components";
import { ScriptNavbar } from '../../helper/scriptNavbar';
import '../../style/main.css';

const PerformancePage = () => {
    useEffect(()=> {
        ScriptNavbar()
    }, []);

  return (
    <>
        <Header />
        <Sidebar />
        <main className="peformance">
            <div className="income-box">
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp 5.990.990</p>
                </div>
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp 5.990.990</p>
                </div>
                <div className="income-box-preview">
                    <p className="income-title">MONTHLY REVENUE - BULAN</p>
                    <p className="income-detail">Rp 5.990.990</p>
                </div>
            </div>
            <div className="status-box">
                <div className="status-box-preview">
                    <div className="status-color-pending"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">PENDING</p>
                        <p className="status-detail-info">35</p>
                    </div>
                    <i className="fa-solid fa-clock-rotate-left"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-success"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">SUCCESS</p>
                        <p className="status-detail-info">35</p>
                    </div>
                    <i className="fa-regular fa-circle-check"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-expired"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">EXPIRED</p>
                        <p className="status-detail-info">35</p>
                    </div>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div className="status-box-preview">
                    <div className="status-color-failed"></div>
                    <div className="status-detail">
                        <p className="status-detail-title">FAILED</p>
                        <p className="status-detail-info">35</p>
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
                            <td>Created at</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="success"></i> success</td>
                            <td>Kamis, 26 Mei 202</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="pending"></i> pending</td>
                            <td>Kamis, 26 Mei 202</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="failed"></i> failed</td>
                            <td>Kamis, 26 Mei 202</td>
                        </tr>
                        <tr>
                            <td>INV-ABCDEF123G</td>
                            <td>Jhon Doe</td>
                            <td><i className="fa-solid fa-circle" id="expired"></i> expired</td>
                            <td>Kamis, 26 Mei 202</td>
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