import React, { useEffect, useState } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getOneProducts, getOneUser, fetchCart, addCart } from '../redux/action';
import { formatRupiah } from "../utils/formatRupiah";
import "../style/main.css";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector(state => state.product);
  const user = useSelector(state => state.user);
  const carts = useSelector(state => state.carts);
  const [jumlahBarang, setJumlahBarang] = useState(0)
  const [size, setSize] = useState("")
  let {id} = useParams()
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };

  let email = localStorage.email;

  const addToCart = () => {
    let payload = {
        UserId: user.id,
        email: email,
        order: [
            {
                id: carts[carts.length - 1].id + 1,
                nama_barang: product.nama_produk,
                gambar_produk: product.gambar_produk,
                size: size,
                kategori: product.CategoryId,
                total: jumlahBarang,
                harga: product.harga_produk,
                total_harga: product.harga_produk * jumlahBarang
            }
        ]
    }
    dispatch(addCart(payload, localStorage.token));
    navigate("/cart")
    console.log(payload, `<<<< payload`);
  }

  const handleSize = (e) => {
    setSize(e.target.value)
  }

  useEffect(()=> {
    dispatch(getOneProducts(id, localStorage.token));
    dispatch(getOneUser(email, localStorage.token));
    dispatch(fetchCart(localStorage.token));
  }, [dispatch, email, id])

  console.log(product, `<<<<< product`);
  console.log(user, `<<<<< user`);
  // console.log(carts[carts.length - 1].id + 1, `<<<<< carts`);
  console.log(id, `<<< id`);
  

  return (
    <>
      <Header />
      <SideNav />
      <main className="detail-product-page" onClick={closeNav}>
        <div className="product-detail">
          <div className="detail-image">
            <img src={product.gambar_produk} alt="detail" />
          </div>
          <div className="product-description">
            <h2>Deskripsi</h2>
            <p id="">
              {product.deskripsi}
            </p>
          </div>
          {/* <div className="product-response">
            <h2>Ulasan</h2>
            <div className="product-rating">
              <span id="">4.9</span>
              <p> / 5</p>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="product-comment">
            <h2>Komentar</h2>
            <div className="comment-box">
              <div className="comment-user-image">
                <img
                  src="/assets/properti/profile-picture.png"
                  alt="user-profile"
                />
                <div className="comment-product-ratting">
                  <p><span id="">4</span> / 5 <i className="fa-solid fa-star"></i></p>
                </div>
              </div>
              <div className="comment-user-description">
                <h3 id="">Username</h3>
                <p id="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima atque eum, voluptate maiores ex aperiam odit
                  repellendus deserunt eius totam unde sequi in ut cupiditate
                  delectus expedita laboriosam harum voluptatibus!
                </p>
              </div>
            </div>
            <div className="comment-box">
              <div className="comment-user-image">
                <img
                  src="/assets/properti/profile-picture.png"
                  alt="user-profile"
                />
                <div className="comment-product-ratting">
                  <span id="">5</span>
                  <p> / 5</p>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <div className="comment-user-description">
                <h3 id="">Username</h3>
                <p id="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Minima atque eum, voluptate maiores ex aperiam odit
                  repellendus deserunt eius totam unde sequi in ut cupiditate
                  delectus expedita laboriosam harum voluptatibus!
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <aside>
          <h1 id="">{product.nama_produk}</h1>
          <h2 id="">{formatRupiah(product.harga_produk)}</h2>
          <div className="product-size">
            <p>size :</p>
            <span className="input">
              <select value={size} onChange={handleSize} name="size" id="size">
                <option value="">Pilih ukuran</option>
                <option value="34">34</option>
                <option value="36">36</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="m">M</option>
              </select>
            </span>
          </div>
          <div className="product-choose">
            <p>Jumlah :</p>
            <div className="product-detail-choose">
              {/* <button onClick={handleMinusQty}>-</button> */}
              <button onClick={() => setJumlahBarang(jumlahBarang - 1)} className="min-button">
                <i className="fa-solid fa-minus"></i>
              </button>
              {jumlahBarang}
              {/* <input type="number" value={jumlahBarang} onChange={handleValue} name="product-detail-choose" id="" /> */}
              <button onClick={() => setJumlahBarang(jumlahBarang + 1)} className="plus-button">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="product-detail-action">
            {/* <Link to="/cart"> */}
              <button onClick={addToCart} className="addtocart-button">
                <i className="fa-solid fa-plus"></i> keranjang
              </button>
            {/* </Link> */}
            {/* <a href="/src/page/product/wishlist-page.html">
              <button className="wishlist-button">
                <i className="fa-solid fa-heart-circle-plus"></i>
              </button>
            </a> */}
          </div>
        </aside>
      </main>
      <div className="product-footer">
        <Footer />
      </div>
    </>
  );
};

export default DetailProduct;
