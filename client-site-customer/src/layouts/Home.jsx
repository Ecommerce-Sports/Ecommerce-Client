import React, { useEffect } from "react";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../style/main.css";

const Home = () => {
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("main").style.marginRight = "0";
  };

  //checkbox select all
  function toggle(source) {
    let checkboxes = document.getElementsByName("foo");
    for (let i = 0, n = checkboxes.length; i < n; i++) {
      checkboxes[i].checked = source.checked;
    }
  }

  //uploadImage
  function loadFile(event) {
    const image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  }

  useEffect(() => {
    //banner slides
    let slideIndex = 0;

    const showSlides = () => {
      let i;
      const slides = document.getElementsByClassName("banner-image");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000);
    };

    showSlides();
  }, []);
  return (
    <>
      <Header />
      <SideNav />
      <main className="body-home-page" onClick={closeNav}>
        <div className="banner">
          <div className="banner-home-box">
            <div className="banner-image fade">
              <img src="/assets/properti/banner-01.png" alt="banner" />
            </div>
            <div className="banner-image fade">
              <img src="/assets/properti/banner-02.jpg" alt="banner" />
            </div>
            <div className="banner-image fade">
              <img src="/assets/properti/banner-03.png" alt="banner" />
            </div>
            <div className="banner-image fade">
              <img src="/assets/properti/banner-04.jpeg" alt="banner" />
            </div>
          </div>
          <div className="banner-description">
            <div className="banner-text">
              <p>THE DREAMS COME TRUES</p>
            </div>
            <div className="banner-text-description">
              <p>Temukan produk impianmu disini</p>
            </div>
            <div className="banner-action">
              <Link to="/all-product">
                <button type="button">Buy now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="featured">
          <div className="featured-header">
            <div className="featured-title">
              <p>Produk Terlaris</p>
              <img src="/assets/tokopaedi-logo.png" alt="tokopaedi-logo" />
            </div>
            <hr />
          </div>
          <div className="featured-product">
            <div className="featured-box">
              <img src="/assets/properti/featured-img2.jpg" alt="featured" />
              <div className="featured-description">
                <p>DRIVER BRIDGESTONE DIAMANA</p>
                <Link to="/detail-product">
                  <button type="button">Buy now</button>
                </Link>
              </div>
            </div>
            <div className="featured-box">
              <img src="/assets/properti//featured-img1.jpg" alt="featured" />
              <div className="featured-description">
                <p>NEW BALANCE</p>
                <Link to="/detail-product">
                  <button type="button">Buy now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="slogan-line">
          <div className="slogan-image">
            <img src="/assets/tokopaedi-logo.png" alt="slogan" />
          </div>
          <div className="slogan-text">
            <p>SPORT AS YOUR LIFE</p>
          </div>
          <div className="slogan-with">
            <p>with</p>
          </div>
          <div className="slogan-logo">
            <img src="/assets/tokopaedi-text-white.png" alt="slogan-logo" />
          </div>
        </div>
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
                  <Link to="/detail-product">
                    <button type="submit">Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="product-more">
            <Link to="/all-product">More</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;