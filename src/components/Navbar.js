import React from "react";
import logo from "./image/Vector.png"

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>
    </>
  );
};

export default Navbar;
