import React from "react";
import "../css/nav-bar.css";

function Navbar() {
  const location = window.location.href;
  return (
    <div className="navbar-container">
      <div className="navbar-icon">
        {location.endsWith("/") ? (
          <a href="/#about">About</a>
        ) : (
          <a href="/">Home</a>
        )}
      </div>
    </div>
  );
}

export default Navbar;
