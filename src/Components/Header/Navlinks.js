import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
    <div className="nav-links">
        <ul>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/about">Projects</NavLink>
            </li>
            <li>
                <a href="https://werick.codes" target="_blank">Blog</a>
            </li>
        </ul>
    </div>
)

export default Nav;
