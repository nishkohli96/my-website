import React from "react";

import Layout from "_DefaultComps/layout";
import Hi from "_Atoms/Hi";
import Footer from "_Atoms/Footer";

const IndexPage = () => {
    return (
        <Layout title="Home">
            <div className="content">
                <Hi />
            </div>
            <div className="lh:fixed md:fixed bottom-0">
                <Footer />
            </div>
        </Layout>
    );
};

/*  I purposely created a new breakpoint to take care of footer for screens 
    between 380-500px width. Their screen height was quite large and as the 
    page content is less, so the footer exactly wasnt at the bottom of the 
    screen. That custom breakpoint takes care of that. */

export default IndexPage;
