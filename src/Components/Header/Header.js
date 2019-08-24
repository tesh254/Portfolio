import React from "react";
import TopLinks from "./TopLinks";
import Nav from "./Navlinks";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <section>
      <TopLinks />
      <Nav />
    </section>
  </header>
);

export default Header;
