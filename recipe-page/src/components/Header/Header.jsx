import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/SOC-Logo.png";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/" className="LogoWrapper">
        <img src={logo} alt="" />
      </Link>
      <h1 className="Strap">Scones: the most resplendent of snacks</h1>
    </header>
  );
};

export default Header;
