import React from 'react'
import "./styles/Nav.css"
import { NavLink } from "react-router-dom";
function Nav() {
    const checkActive = (match, location) => {
        if (!location) return false;
        const { pathname } = location;
        console.log(pathname);
        return pathname === "/";
    }
    return (
        <div>
            <ul className="nav">
                <li><NavLink className="NavLink" activeClassName="activeRoute" isActive={checkActive} to="/">Home</NavLink></li>
                <li><NavLink className="NavLink" activeClassName="activeRoute" to="/weather">Search</NavLink></li>
                <li><NavLink className="NavLink" activeClassName="activeRoute" to="/about">About</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
