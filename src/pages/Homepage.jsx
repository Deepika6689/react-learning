import React from 'react';
import '../styles/global.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const products = [
  { id: 1, name: "Wireless Headphones", price: "$89", img: "https://tse2.mm.bing.net/th/id/OIP.y_2i4EgAMDRZ2QHFK_L_FgHaI3?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 2, name: "Smart Watch", price: "$149", img: "https://tse4.mm.bing.net/th/id/OIP.okPHK-lOk_E5nzOZsGx2dwHaFI?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 3, name: "Bluetooth Speaker", price: "$59", img: "https://tse1.mm.bing.net/th/id/OIP.fXPX5SU-JnLjuILmvYEwVQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 4, name: "Keyboard", price: "$120", img: "https://tse1.explicit.bing.net/th/id/OIP.iRPbUUD_57bV05b8pSMhLAAAAA?w=465&h=465&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 5, name: "Mouse", price: "$45", img: "https://tse1.mm.bing.net/th/id/OIP.cCQmtoZ6aUJHn0If34E-sgHaFf?w=480&h=356&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 6, name: "Mac Studio", price: "$1,999", img: "https://c8.alamy.com/comp/2PKAWNN/apple-mac-studio-m1-max-white-background-2PKAWNN.jpg" },
];

const Homepage = () => {
  return (
    <>
      <Navbar />

      <div className="hero-section">
        <h1>Discover Premium Tech</h1>
        <p>Top-quality gadgets at unbeatable prices.</p>
        <button className="hero-btn">Shop Now</button>
      </div>

      <section className="products-section">
        <h2>Our Products</h2>
        <p className="section-subtitle">Hand-picked favourites just for you</p>
        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="product-img-wrapper">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <span className="price">{p.price}</span>
                <button className="add-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;