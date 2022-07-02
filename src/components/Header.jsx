import React from "react";
import PropTypes from "prop-types";
import logoSvg from "../assets/img/pizza-logo.svg";
import Button from "./Button";
import { Link, Route, Routes } from "react-router-dom";
import Carts from "./Carts";
function Header(props) {
  
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width={38} src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Carts />} />
        </Routes>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
