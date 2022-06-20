import React, { useEffect, useState } from 'react';
import {Header, Sidebar} from "../../components/admin";
import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/action';
import '../../style/admin/main.css';

const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const orders = useSelector(state => state.orders);

    const [search, setSearch] = useState("")

    useEffect(()=> {
        if(!localStorage.token) navigate("/login");
        ScriptNavbar();
        dispatch(fetchOrders(localStorage.token, "invoice", search))
    }, [dispatch, navigate, search]);

  return (
    <>
    <Header />
    <Sidebar />
    <main className="orders">
        <div className="orders-box">
            <div className="head-bar-orders">
                <p className="head-bar-title">ORDERS</p>
                <div className="search-bar">
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} className="search-orders" type="search" name="search" placeholder="Search Order List... ." id="" />
                </div>
            </div>
            <div className="body-list-orders">
                <table className="list-orders">
                    <thead>
                        <tr>
                            <td>NO.</td>
                            <td>INVOICE</td>
                            <td>CUSTOMER NAME</td>
                            <td>STATUS</td>
                            <td>GRAND TOTAL</td>
                            <td>DETAIL</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders ? orders.map((e, idx) => {
                            return (
                                <tr key={e.id}>
                                    <td>{idx + 1}</td>
                                    <td>{e.nomor_invoice}</td>
                                    <td>{e.nama_pemesan}</td>
                                    <td className="status">
                                        <i className="fa-solid fa-circle" id="success"></i>
                                        <p className="status-orders" id="">{e.status}</p>
                                    </td>
                                    <td>Rp. {e.total_pembayaran}</td>
                                    <td>
                                    <button onClick={() => navigate(`/detail-order/${e.id}`)} className="detail"><i className="fa-solid fa-list-ul"></i></button>
                                    </td>
                                </tr>
                            )
                        }): null}
                    </tbody>
                </table>
            </div>
        </div>
        <footer>
            Admin Server Site &#169; 2022, Tokopaedi
        </footer>
    </main>
    </>
  )
}

export default Order