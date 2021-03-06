module.exports = {
    siteMetadata: {
        title: `Nishant's Website`,
        description: `My personal website`,
        author: `@nishkohli96`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: "gatsby-plugin-module-resolver",
            options: {
                root: "./src",
                aliases: {
                    _Atoms: "./components/atoms",
                    _Constants: "./constants",
                    _Css: "./assets/css",
                    _DefaultComps: "./components/default-comps",
                    _Images: "./assets/images",
                    _Pages: "./pages",
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
