import React from "react";
import "./navbar.scss";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__upper">
        <img src={logo} alt="logo" />
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      
        <ul className="navbar__grid">
          <li>Home</li>
          <li>Latest News</li>
          <li>Portfolio</li>
          <li>About Us</li>
          <li className="last">Contact</li>
        </ul>
      
    </div>
  );
};

export default Navbar;
