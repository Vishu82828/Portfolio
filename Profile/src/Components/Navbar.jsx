import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
// import { FaCartPlus } from "react-icons/fa";
// import { IoBagCheckOutline } from "react-icons/io5";
// import menuIcon from "../assets/nav/menuIcon.png";
// import closeIcon from "../assets/nav/closeIcon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/experience", name: "Experience" },
    { id: 4, path: "/projects", name: "Projects" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="navbar__nav">
      <div className="navbar__logo">
        <Link className="navbar__brand" to="/">
          Portfolio
        </Link>
        <div
          className={`navbar__hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleNav}
        >
          {/* <img src={isOpen ? closeIcon : menuIcon} alt="Menu Icon" /> */}
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
          <span className="navbar__bar"></span>
        </div>
      </div>
      <div className={`navbar__section ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            className={`navbar__text navbar__${item.name}`}
            to={item.path}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={`navbar__icons ${isOpen ? "open" : ""}`}>
        {/* <Link className="navbar__text navbar__cart" to="/cart" title="Cart">
          <FaCartPlus className="navbar__icon" />
        </Link>
        <Link
          className="navbar__text navbar__checkout"
          to="/checkout"
          title="CheckOut"
        >
          <IoBagCheckOutline className="navbar__icon" />
        </Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
