import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer-list">
          <div className="about-team">
            <h2>Tokopaedi</h2>
            <div className="about-list">
              <a href="#">Tentang Kami</a>
              <a href="#">Team Developer</a>
            </div>
          </div>
          <div className="footer-category">
            <h2>Produk</h2>
            <div className="footer-category-list">
              <a href="/src/page/product/product-category-page.html">
                Sepakbola
              </a>
              <a href="/src/page/product/product-category-page.html">Street</a>
              <a href="/src/page/product/product-category-page.html">Futsal</a>
              <a href="/src/page/product/product-category-page.html">Basket</a>
              <a href="/src/page/product/product-category-page.html">Voli</a>
              <a href="/src/page/product/all-product-page.html">Lainnya</a>
            </div>
          </div>
          <div className="footer-logo">
            <img src="/assets/tokopaedi-logo.png" alt="tokopaedi-logo" />
          </div>
        </div>
        <p>&#169; 2022, CPSG-57 Project Capstone Dicoding Academy Indonesia</p>
    </footer>
  )
}

export default Footer