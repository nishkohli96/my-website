import React from "react";

import Layout from "_DefaultComps/layout";
import Hi from "_Atoms/Hi";

const IndexPage = () => {
    return (
        <Layout title="Home">
            <div className="content">
                <Hi />
            </div>
        </Layout>
    );
};

export default IndexPage;
