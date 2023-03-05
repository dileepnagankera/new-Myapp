import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="lontainer">
        <h1 className="logo">
          <NavLink to="/">logo</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink className="current" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
