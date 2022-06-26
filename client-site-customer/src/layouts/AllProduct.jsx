import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const AllProduct = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };
  return (
    <>
      <Header />
      <SideNav />
      <main className="all-product-page" onClick="closeNav()">
        <div className="all-product-category">
          <p className="category-title">Sepakbola</p>
          <div className="product-selected-box">
            <div className="category-box">
              <img
                src="/assets/properti/category-image-sepakbola.jpg"
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
        <div className="all-product-category">
          <p className="category-title">Sepakbola</p>
          <div className="product-selected-box">
            <div className="category-box">
              <img
                src="/assets/properti/category-image-sepakbola.jpg"
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
      </main>
      <main className="all-product-ready-page" onClick={closeNav}>
        <div className="product">
          <div className="product-title">
            <p>All Product</p>
            <hr />
          </div>
          <div className="product-list">
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
      </main>
      <Footer />
    </>
  );
};

export default AllProduct;
