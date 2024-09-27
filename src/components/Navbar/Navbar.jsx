import React from "react";
import { Login } from "../Login/Login";
import { Search } from "../../components/Search/Search";
import { SingIn } from "../SingIn/SingIn"
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="." className="navbar-brand ms-3">
            Vicio
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <Search />
              </li>
              <li className="nav-item d-flex">
                <Login />
              </li>
              <li className="nav-item d-flex">
                <SingIn /></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { Navbar };
