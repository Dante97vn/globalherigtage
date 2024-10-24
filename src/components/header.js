//Nhap mô-dun(thư viện) hoạt động React
import React from "react";

import { Link } from "react-router-dom";

//Import component
import Navbar from "./navbar.js";

function Header() {
  return (
    <header className="bg-light bg-gradient py-0 container d-flex align-items-center container">
      {/* Logo bên trái */}
      <div className="">
        <Link className="nav-link" to="home">
          <img
            src="./img/logo.png"
            alt="Logo"
            className="img-fluid d-inline-block"
            style={{ maxWidth: "90px" }}
          />
        </Link>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
