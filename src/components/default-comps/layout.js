/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
// import "@Css/layout.css";
/* I commented out layout.js as it messing up my full-screen width and height css */

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div>
                <main>
                    <p className="text-red-400">Test stmt</p>
                    {children}
                </main>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
