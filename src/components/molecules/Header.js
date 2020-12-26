import React from "react";
import { Link } from "gatsby";

const Header = () => {
    return (
        <div className="navbar fixed">
            <div className="navlink link">
                <Link to="/">Home</Link>
            </div>
            <div className="navlink link">
                <Link to="/projects">Projects</Link>
            </div>
            <div className="navlink link"><Link to="/about">About</Link></div>
            <div className="navlink link"><Link to="/contact">Contact</Link></div>
        </div>
    );
};

export default Header;
