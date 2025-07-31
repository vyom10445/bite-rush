import React from "react";

function Header() {
  return (
    <div className="header">
      <div>
        <img className="headerLogo" src="/Bite.png" alt="" />
      </div>
      <div className="list">
        <ul className="unorderedList">
          <li className="listItem">Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Contact Us</li>
          <li className="listItem">Cart</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
