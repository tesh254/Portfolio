import React from "react";
import TopLinks from "./TopLinks";
import Nav from "./Navlinks";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <TopLinks />
    <Nav />
  </header>
);

export default Header;
