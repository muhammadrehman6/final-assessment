import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./CartBtn";
import LoginBtn from "./LoginBtn";
import LogOut from "./LogOut";
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            E store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <LoginBtn  />
            <LogOut />
            <CartBtn />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
