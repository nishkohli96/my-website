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
            <div className="md:fixed bottom-0">
                <Footer />
            </div>
        </Layout>
    );
};

export default IndexPage;
