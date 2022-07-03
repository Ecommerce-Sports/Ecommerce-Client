import React, { useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../redux/action';
import { formatRupiah } from "../utils/formatRupiah";
import { useNavigate } from 'react-router-dom';
import "../style/main.css";

const AllProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products);
  // const categories = useSelector(state => state.categories);

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };

  const toPageDetail = (id) => {
    // e.preventDefault();
    console.log(id, `<<< id`);
    navigate(`/detail-product/${id}`)
  }

  useEffect(() => {
    dispatch(fetchProducts(localStorage.token));
    // dispatch(fetchCategories(localStorage.token));
  }, [dispatch])

  return (
    <>
      <Header />
      <SideNav />
      {/* <main className="all-product-page" onClick={closeNav}>
        {categories && categories.length > 0
        ?
        categories.map((e, idx) => {
          if(idx < 2) {
            return (
              <div key={e.id} className="all-product-category">
                <p className="category-title">{e.nama_kategori}</p>
                <div className="product-selected-box">
                  <div className="category-box">
                    <img
                      src={e.gambar_produk}
                      alt="category"
                    />
                  </div>
                  <div className="product-box">
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <Link to="/detail-product">
                            <button type="submit">Buy Now</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="card">
                        <div className="imgBx">
                          <img
                            src="https://assets.codepen.io/4164355/shoes.png"
                            alt=""
                          />
                        </div>
                        <div className="contentBx">
                          <h2>Nike Shoes</h2>
                          <div className="price">
                            <h2>Rp 399.000</h2>
                          </div>
                          <a href="/assets/product/detail-product-page.html">
                            <button type="submit">Buy Now</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })
        : null
        }
      </main> */}
      <main className="all-product-ready-page" onClick={closeNav}>
        <div className="product">
          <div className="product-title">
            <p>All Product</p>
            <hr />
          </div>
          <div className="product-list">
            {products && products.length > 0
            ?
            products.map((e) => {
              console.log(e, `<<< e`);
              return (
                <div key={e.id} className="product-card">
                  <div className="card">
                    <div className="imgBx">
                      <img
                        src={e.gambar_produk}
                        alt=""
                      />
                    </div>
                    <div className="contentBx">
                      <h2>{e.nama_produk}</h2>
                      <div className="price">
                        <h2>{formatRupiah(e.harga_produk)}</h2>
                      </div>
                      <a>
                        <button onClick={()=> toPageDetail(e.id)} type="submit">Buy Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
            : null
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllProduct;
