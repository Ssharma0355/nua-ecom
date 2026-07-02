import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Logo } from "../../assets/asset";
import "../../assets/Navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/products" onClick={() => setIsOpen(false)}>
          Products
        </NavLink>

        <NavLink to="/cart" onClick={() => setIsOpen(false)}>
          Cart
        </NavLink>
      </div>

      <div className="nav-icons">
        <FaCartShopping />
        <FaRegUserCircle />
      </div>

      <button
        className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;