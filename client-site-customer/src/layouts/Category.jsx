import React, { useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { useDispatch, useSelector } from 'react-redux';
import { getOneCategory } from '../redux/action';
import { useParams } from "react-router-dom";
import { formatRupiah } from "../utils/formatRupiah";
import "../style/main.css";

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category);
  let {id} = useParams();

  useEffect(() => {
    dispatch(getOneCategory(id, localStorage.token));
  }, [dispatch, id])

  return (
    <>
      <Header />
      <SideNav />
      <main className="product-category-page" onclick="closeNav()">
        <div className="product-category">
          <div className="product-category-title">
            <p>
              Produk : <span id="">{category.nama_kategori}</span> 
            </p>
            <hr />
          </div>
          <div className="product-category-list">
            {category && category.Products ? category.Products .map((e) => {
              return (
                <div key={e.id} className="product-card">
                  <div className="card">
                    <div className="imgBx">
                      <img src={e.gambar_produk} alt="" />
                    </div>
                    <div className="contentBx">
                      <h2>{e.nama_produk}</h2>
                      <div className="price">
                        <h2>{formatRupiah(e.harga_produk)}</h2>
                      </div>
                      <a href="/src/page/product/detail-product-page.html">
                        <button type="submit">Buy Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            }) : null}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Category;
