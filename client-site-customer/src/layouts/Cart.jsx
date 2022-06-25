import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";

const Cart = () => {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementsByTagName("main").style.marginRight = "0";
      }
  return (
    <>
    <Header />
    <SideNav />
    <main class="cart-page" onClick={closeNav}>
        <div class="cart-box">
            <div class="cart-title">
                <h2>Keranjang</h2>
                <div class="cart-selectall">
                    <input type="checkbox" onclick="toggle(this)" id=""/>
                    <p>Pilih semua</p>
                </div>
            </div>
            <hr />
            <div class="cart-list">
                <div class="product-list-box">
                    <input type="checkbox" name="foo" value="list1" id="" />
                    <div class="product-image-list">
                        <img src="/assets/properti/detail-image.jpg" alt="product-list" />
                    </div>
                    <div class="product-detail-list">
                        <a href="/src/page/product/detail-product-page.html"><h3 id="">Sepatu Forum Low</h3></a>
                        <p id="">Rp. 399.000</p>
                    </div>
                    <div class="product-action-list">
                        <i class="fa-solid fa-trash"></i>
                        <p>|</p>
                        <div class="product-action-add">
                            <i class="fa-solid fa-minus"></i>
                            <input type="text" name="product-action-add" id="" />
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="product-list-box">
                    <input type="checkbox" name="foo" value="list1" id="" />
                    <div class="product-image-list">
                        <img src="/assets/properti/detail-image.jpg" alt="product-list" />
                    </div>
                    <div class="product-detail-list">
                        <a href="/src/page/product/detail-product-page.html"><h3 id="">Sepatu Forum Low</h3></a>
                        <p id="">Rp. 399.000</p>
                    </div>
                    <div class="product-action-list">
                        <i class="fa-solid fa-trash"></i>
                        <p>|</p>
                        <div class="product-action-add">
                            <i class="fa-solid fa-minus"></i>
                            <input type="text" name="product-action-add" id="" />
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div class="product-list-box">
                    <input type="checkbox" name="foo" value="list1" id="" />
                    <div class="product-image-list">
                        <img src="/assets/properti/detail-image.jpg" alt="product-list" />
                    </div>
                    <div class="product-detail-list">
                        <a href="/src/page/product/detail-product-page.html"><h3 id="">Sepatu Forum Low</h3></a>
                        <p id="">Rp. 399.000</p>
                    </div>
                    <div class="product-action-list">
                        <i class="fa-solid fa-trash"></i>
                        <p>|</p>
                        <div class="product-action-add">
                            <i class="fa-solid fa-minus"></i>
                            <input type="text" name="product-action-add" id="" />
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cost-box">
            <div class="cost-title">
                <h3>Ringkasan Pemesanan</h3>
            </div>
            <div class="cost-list">
                <div class="product-list">
                    <p class="product-name" id="">Nama barang (x<span id="">1</span>)</p>
                    <p class="product-cost">Rp. 999.000</p>
                </div>
                <div class="product-list">
                    <p class="product-name" id="">Nama barang (x<span id="">1</span>)</p>
                    <p class="product-cost">Rp. 999.000</p>
                </div>
                <div class="product-list">
                    <p class="product-name" id="">Nama barang (x<span id="">1</span>)</p>
                    <p class="product-cost">Rp. 999.000</p>
                </div>
            </div>
            <hr />
            <div class="cost-total">
                <p class="total">Total</p>
                <p class="payment">Rp. 999.000</p>
            </div>
            <div class="cost-action">
                <a href="#"><button class="buy" id="">Beli</button></a>
            </div>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default Cart