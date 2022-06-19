import React, { useEffect } from 'react';
import {Header, Sidebar} from "../../components";
import { ScriptNavbar } from '../../helper/scriptNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCustomerList } from '../../redux/action';
import '../../style/main.css';

const CustomerList = () => {
    const dispatch = useDispatch();
    const customer = useSelector(state => state.customerList);

    useEffect(()=> {
        ScriptNavbar()
        dispatch(fetchCustomerList())
    }, []);

  return (
    <>
    <Header />
    <Sidebar />
    <main className="customerlist">
        <div className="customerlist-box">
            <div className="head-bar-customerlist">
                <p className="head-bar-title">CUSTOMER</p>
                <div className="search-bar">
                    <input className="search-customer" type="search" name="search" placeholder="Search Order List... ." id="" />
                    <button className="search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
            <div className="body-customerlist">
                <table className="list-customer">
                    <thead>
                        <tr>
                            <td>NO.</td>
                            <td>CUSTOMER NAME</td>
                            <td>EMAIL</td>
                            <td>JOIN DATE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {customer ? customer.map((e) => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.nama_lengkap}</td>
                                    <td>{e.email}</td>
                                    <td>{e.createdAt.slice(0, 10)}</td>
                                </tr>
                            )
                        }) : null}
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

export default CustomerList