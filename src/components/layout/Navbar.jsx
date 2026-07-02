import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { Logo } from "../../assets/asset";
import "../../assets/Navbar.scss";

function Navbar({ openCart }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo" onClick={() => setIsOpen(false)}>
        <img src={Logo} alt="Logo" />
      </NavLink>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
      </div>

      <div className="nav-icons">
        <span className="cart-icon" onClick={openCart}>
          <FaCartShopping />
        </span>

        <span className="user-icon">
          <FaRegUserCircle />
        </span>
      </div>

      <button className="menu-btn" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;
