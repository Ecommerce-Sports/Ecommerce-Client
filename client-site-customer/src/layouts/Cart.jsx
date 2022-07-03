import React, { useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';
import { getOneCart, changeCart, deleteCart } from '../redux/action';
// import { Link } from "react-router-dom";
import "../style/main.css";
import { formatRupiah } from "../utils/formatRupiah";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  let email = localStorage.email;

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };

  const handleMinusQty = (id) => {
    console.log(id, `<<<<< id`);
  }

  const handleDeleteProduct = (id) => {
    console.log(id, `<<<<< id`);
    dispatch(deleteCart(cart.id, localStorage.token))
  }

  useEffect(()=> {
    dispatch(getOneCart(email, localStorage.token))
  }, [dispatch, email])

  console.log(cart, `<<<< cart`);

  return (
    <>
      <Header />
      <SideNav />
      <main className="cart-page" onClick={closeNav}>
        <div className="cart-box">
          <div className="cart-title">
            <h2>Keranjang</h2>
            <div className="cart-selectall">
              <input type="checkbox" onclick="toggle(this)" id="" />
              <p>Pilih semua</p>
            </div>
          </div>
          <hr />
          <div className="cart-list">
            {cart && Object.keys(cart).length > 0 
            ?
              cart.order.map((e) => {
                return (
                  <div key={e.id} className="product-list-box">
                    <input type="checkbox" name="foo" value="list1" id="" />
                    <div className="product-image-list">
                      <img
                        src={e.gambar_produk}
                        alt="product-list"
                      />
                    </div>
                    <div className="product-detail-list">
                        <h3 id="">{e.nama_barang}</h3>
                      <p id="">{formatRupiah(e.harga)}</p>
                    </div>
                    <div className="product-action-list">
                      <i onClick={()=> handleDeleteProduct(e.id)} className="fa-solid fa-trash"></i>
                      <div className="product-action-add">
                        <i onClick={()=>handleMinusQty(e.id)} className="fa-solid fa-minus" style={{ marginRight: "5px" }}></i>
                        <p>||</p>
                        {/* <input type="text" name="product-action-add" id="" /> */}
                        <i className="fa-solid fa-plus" style={{ marginLeft: "5px" }}></i>
                      </div>
                    </div>
                  </div>
                )
              })
            : null
            }
          </div>
        </div>

        <div className="cost-box">
          <div className="cost-title">
            <h3>Ringkasan Pemesanan</h3>
          </div>
          <div className="cost-list">
          {cart && Object.keys(cart).length > 0 
          ?
            cart.order.map((e) => {
              return(
                <div key={e.id} className="product-list">
                  <p className="product-name" id="">
                    {e.nama_barang} (x<span id="">{e.total}</span>)
                  </p>
                  <p className="product-cost">{formatRupiah(e.harga * e.total)}</p>
                </div>
              )
            })
          : null
          }
          </div>
          <hr />
          <div className="cost-total">
            <p className="total">Total</p>
            <p className="payment">
              {cart && Object.keys(cart).length > 0 
              ? cart.order.reduce((e)=> {
                return e.total_harga + e.total_harga
              })
              : null
              }
            </p>
          </div>
          <div className="cost-action">
            <a href="#">
              <button className="buy" id="">
                Beli
              </button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
