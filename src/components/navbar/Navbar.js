import React from "react";
import "./Navbar.css";
import logo from "../../images/dukaan_logo.png";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_container_left"  >
        <img src={logo} alt="" />
      </div>
      <div className="navbar_container_right">
        <span>Sign In</span>
        <button>Dukaan for PC</button>
      </div>
    </div>
  );
}

export default Navbar;
