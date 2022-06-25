import React from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
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
      <main class="all-product-page" onClick="closeNav()">
        <div class="all-product-category">
          <p class="category-title">Sepakbola</p>
          <div class="product-selected-box">
            <div class="category-box">
              <img
                src="/assets/properti/category-image-sepakbola.jpg"
                alt="category"
              />
            </div>
            <div class="product-box">
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <Link to="/detail-product">
                      <button type="submit">Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
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
        <div class="all-product-category">
          <p class="category-title">Sepakbola</p>
          <div class="product-selected-box">
            <div class="category-box">
              <img
                src="/assets/properti/category-image-sepakbola.jpg"
                alt="category"
              />
            </div>
            <div class="product-box">
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
                      <h2>Rp 399.000</h2>
                    </div>
                    <a href="/assets/product/detail-product-page.html">
                      <button type="submit">Buy Now</button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="product-card">
                <div class="card">
                  <div class="imgBx">
                    <img
                      src="https://assets.codepen.io/4164355/shoes.png"
                      alt=""
                    />
                  </div>
                  <div class="contentBx">
                    <h2>Nike Shoes</h2>
                    <div class="price">
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
      <main class="all-product-ready-page" onClick={closeNav}>
        <div class="product">
          <div class="product-title">
            <p>All Product</p>
            <hr />
          </div>
          <div class="product-list">
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
                    <h2>Rp 399.000</h2>
                  </div>
                  <a href="/assets/product/detail-product-page.html">
                    <button type="submit">Buy Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="product-card">
              <div class="card">
                <div class="imgBx">
                  <img
                    src="https://assets.codepen.io/4164355/shoes.png"
                    alt=""
                  />
                </div>
                <div class="contentBx">
                  <h2>Nike Shoes</h2>
                  <div class="price">
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
