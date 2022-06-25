import React from 'react';
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import "../style/main.css";

const DetailProduct = () => {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementsByTagName("main").style.marginRight = "0";
      }
  return (
    <>
        <Header />
        <SideNav />
        <main class="detail-product-page" onClick={closeNav}>
            <div class="product-detail">
                <div class="detail-image">
                    <img src="/assets/properti/detail-image.jpg" alt="detail" />
                </div>
                <div class="product-description">
                    <h2>Deskripsi</h2>
                    <p id="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="product-response">
                    <h2>Ulasan</h2>
                    <div class="product-rating">
                        <span id="">4.9</span>
                        <p> / 5</p>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="product-comment">
                    <h2>Komentar</h2>
                    <div class="comment-box">
                        <div class="comment-user-image">
                            <img src="/assets/properti/profile-picture.png" alt="user-profile" />
                            <div class="comment-product-ratting">
                                <span id="">4</span>
                                <p> / 5</p>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="comment-user-description">
                            <h3 id="">Username</h3>
                            <p id="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima atque eum, voluptate maiores ex aperiam odit repellendus deserunt eius totam unde sequi in ut cupiditate delectus expedita laboriosam harum voluptatibus!</p>
                        </div>
                    </div>
                    <div class="comment-box">
                        <div class="comment-user-image">
                            <img src="/assets/properti/profile-picture.png" alt="user-profile" />
                            <div class="comment-product-ratting">
                                <span id="">5</span>
                                <p> / 5</p>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="comment-user-description">
                            <h3 id="">Username</h3>
                            <p id="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima atque eum, voluptate maiores ex aperiam odit repellendus deserunt eius totam unde sequi in ut cupiditate delectus expedita laboriosam harum voluptatibus!</p>
                        </div>
                    </div>
                </div>
            </div>
            <aside>
                <h1 id="">SEPATU FORUM LOW</h1>
                <h2 id="">Rp. 2.999.000</h2>
                <div class="product-size">
                    <p>size :</p>
                    <div class="product-size-choose">
                        <span id="">S</span>
                        <span id="">M</span>
                        <span id="">L</span>
                        <span id="">XL</span>
                        <span class="or">/</span>
                        <span class="input"><input type="text" name="product-size-choose" id="" /></span>
                    </div>
                </div>
                <p><span id="notReady" hidden>Tidak Tersedia</span><span id="ready">Tersedia</span></p>
                <div class="product-choose">
                    <p>Jumlah :</p>
                    <div class="product-detail-choose">
                        <button class="min-button"><i class="fa-solid fa-minus"></i></button>
                        <input type="text" name="product-detail-choose" id="" />
                        <button class="plus-button"><i class="fa-solid fa-plus"></i></button>
                    </div>
                </div>
                <div class="product-detail-action">
                    <Link to="/cart"><button class="addtocart-button">Masukkan ke keranjang</button></Link>
                    <a href="/src/page/product/wishlist-page.html"><button class="wishlist-button"><i class="fa-solid fa-heart-circle-plus"></i></button></a>
                </div>
            </aside>
        </main>
        <Footer />
    </>
  )
}

export default DetailProduct