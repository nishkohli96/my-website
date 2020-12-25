import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
// import { useStaticQuery, graphql } from "gatsby";

import Header from "_Molecules/Header";
import Footer from "_Atoms/Footer";
// import "_Css/layout.css";
/* I commented out layout.js as it messing up my full-screen width and height css */

const Layout = ({ title, children }) => {
    // const data = useStaticQuery(graphql`
    //     query SiteTitleQuery {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `);

    return (
        <div className="fullscreen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
            <Header />
            
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
