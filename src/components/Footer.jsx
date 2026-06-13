import React from 'react';

const Footer = () => {
  return (
    <div className="site-footer">
      <div className="site-name">
        <h2>ShopZone</h2>
      </div>
      <div className="footer-products">
        <h2>Products</h2>
        <ul>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Mobiles</li>
          <li>Shoes</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h2>Contact Us</h2>
        <ul>
          <li>Bengaluru</li>
          <li>+91 9632716689</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;