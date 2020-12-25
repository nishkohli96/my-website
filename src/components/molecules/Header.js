import React from "react";
import { Link } from "gatsby";

const Header = () => {
    return (
        <div className="navbar">
            <div className="navlink link">
                <Link to="/page2">Home</Link>
            </div>
            <div className="navlink link">Projects</div>
            <div className="navlink link">About</div>
            <div className="navlink link">Contact</div>
        </div>
    );
};

export default Header;
