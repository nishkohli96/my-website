import React from "react";
import Layout from "_DefaultComps/layout";
import ProjectItem from "_Atoms/ProjectItem";
import { ProjectsList } from "_Constants/projectslist";
import Footer from "_Atoms/Footer";

const Projects = () => {
    return (
        <Layout title="My Projects">
            <div className="content">
                <div className="text-center">
                    <p className="sub-heading mb-5 text-red-400">
                        Glad to share some of my works with you...
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {ProjectsList.map(proj => (
                        <div className="col-span-1 m-auto" key={proj.name}>
                            <ProjectItem project={proj} />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-lg md:text-xl text-yellow-400 mt-5">
                        There&apos;s always something interesting brewing in my
                        &nbsp;
                        <span className="hreflink">
                            <a
                                href="https://github.com/nishkohli96"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Github
                            </a>
                        </span>
                    </p>
                </div>
            </div>
            <div className="md:fixed bottom-0">
                <Footer />
            </div>
        </Layout>
    );
};

export default Projects;
