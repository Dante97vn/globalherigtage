//Nhap mô-dun(thư viện) hoạt động React
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Link } from "react-router-dom";

import VisitCount from "./visitcount.js";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="container-fluid ">
        <Link className="brandStyle navbar-brand  " to="home">
          GLOBAL HERITAGE
        </Link>

        <div className="collapse navbar-collapse  " id="navbarNavDropdown">
          <ul className="navbar-nav justify-content-between container fw-bolder">
            {/*Homepage*/}
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="home">
                Homepage
              </Link>
            </li>

            {/*Monuments*/}
            <li className="nav-item ">
              <Link className="nav-link" to="monuments">
                Monuments
              </Link>
            </li>

            {/*Gallery*/}

            <li className="nav-item ">
              <Link className="nav-link" to="gallery">
                Gallery
              </Link>
            </li>

            {/*Feedback*/}

            <li className="nav-item ">
              <Link className="nav-link" to="feedback">
                Feedback
              </Link>
            </li>

            {/*Contact us*/}

            <li className="nav-item ">
              <Link className="nav-link" to="contact">
                Contact us
              </Link>
            </li>

            {/*About us*/}

            <li className="nav-item">
              <Link className="nav-link" to="aboutus">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <VisitCount />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
