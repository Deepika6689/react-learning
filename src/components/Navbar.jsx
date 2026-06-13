import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ShopZone</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="cart-btn">🛒 Cart (0)</button>
    </nav>
  );
};

export default Navbar;