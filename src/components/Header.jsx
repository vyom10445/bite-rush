import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [accBtn, setAccBtn] = useState("Login");

  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="headerLogo" src="/Bite.png" alt="Bite Rush Logo" />
      </div>
      <nav className="list">
        <ul className="unorderedList">
          <li className="listItem">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Home
            </Link>
          </li>
          <li className="listItem">
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              About
            </Link>
          </li>
          <li className="listItem">
            <Link
              to="/contact"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Contact Us
            </Link>
          </li>

          <li className="listItem">Cart</li>
          <li
            className="listItem"
            onClick={() => {
              accBtn === "Login" ? setAccBtn("Logout") : setAccBtn("Login");
            }}
          >
            {accBtn}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
