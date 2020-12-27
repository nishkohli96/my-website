import React from "react";
import { Link } from "gatsby";
import * as Logo from "_Images/logo.png";

const Header = () => {
    return (
        <div className="navbar fixed ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

            <div className="hidden sm:inline-block col-span-1">
                <img src={Logo} alt="nish" className="w-16 h-8 md:w-20 md:h-10" />
            </div>

            <div className="col-span-1">
                <div className="navlink link">
                    <Link to="/">Home</Link>
                </div>
                <div className="navlink link">
                    <Link to="/projects">Projects</Link>
                </div>
                <div className="navlink link">
                    <Link to="/about">About</Link>
                </div>
                <div className="navlink link">
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;
