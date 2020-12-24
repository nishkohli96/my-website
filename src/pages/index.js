import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
    return (
        <div className="fullscreen">
            <p className="heading">Hi people</p>
            <Link to="/page2">
                <span className="underline text-red-400">Go to Page2</span>
            </Link>
        </div>
    );
};

export default IndexPage;
