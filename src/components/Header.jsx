import React from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

// Header component form app.js
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li> <Link to="/about">About Us</Link> </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart"><i className="fa-solid fa-cart-arrow-down"></i></Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Header;