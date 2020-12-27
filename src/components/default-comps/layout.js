import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import Header from "_Atoms/Header";
import Footer from "_Atoms/Footer";

const Layout = ({ title, children }) => {
    return (
        <div className="fullscreen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Header />
            <div className="overflow-y-auto pb-0">
                <main>{children}</main>
            </div>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
