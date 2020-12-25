import React from "react";
import Layout from "_DefaultComps/layout";
import ProjectItem from "_Atoms/ProjectItem";
import { ProjectsList } from "_Constants/projectslist";

const Projects = () => {
    return (
        <Layout title="My Projects">
            <div className="content">
                <div className="text-center">
                    <p className="text-3xl mb-5 text-red-400">
                        Glad to share some of my best work with you...
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {ProjectsList.map(proj => (
                        <div className="col-span-1 m-auto">
                            <ProjectItem project={proj} />
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
