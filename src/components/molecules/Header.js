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
            <div className="navlink link">About</div>
            <div className="navlink link">Contact</div>
        </div>
    );
};

export default Header;
