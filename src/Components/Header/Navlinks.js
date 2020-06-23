import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
    <div className="nav-links">
        <ul>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
                <a href="https://bywachira.com" target="_blank" rel="noopener noreferrer">Blog</a>
            </li>
        </ul>
    </div>
)

export default Nav;
