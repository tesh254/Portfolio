import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Imgs/logo.svg";

const TopLinks = () => (
  <div className="top-links">
    <NavLink to="/">
      <img src={Logo} alt="mascot logo" className="logo" />
    </NavLink>
  </div>
);

export default TopLinks;
