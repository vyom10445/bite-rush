import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="header-logo-container">
        <img className="headerLogo" src="/Bite.png" alt="Bite Rush Logo" />
      </div>
      <nav className="list">
        <ul className="unorderedList">
          <li className="listItem">Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Contact Us</li>
          <li className="listItem">Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
