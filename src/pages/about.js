import React from "react";
import Layout from "_DefaultComps/layout";
import * as DP from "_Images/nish.jpg";

const About = () => (
    <Layout title="About Me">
        <div className="content grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="mx-auto">
                {/* <div className="content-center"> */}
                    <img
                        className="rounded-full w-60 h-60 mx-auto"
                        src={DP}
                        alt="nish"
                    />
                {/* </div> */}
                <div className="mx-auto mt-5">
                    <p className="mb-5 text-lg respdiv lg:max-w-lg leading-8">
                        <span className="text-red-600 text-3xl">I</span> was born in June 1996 in Ludhiana, Punjab{" "}
                        <span className="text-yellow-300">
                            ( Punjabi in the house !!! )
                        </span>
                        . I also spent some of my childhood in Amritsar, but
                        completed most of my education in Ludhiana itself.
                    </p>
                </div>
            </div>

            <div className="respdiv lg:max-w-lg m-auto">
                <p className="mb-5 text-lg leading-8">
                    I completed my B.Tech in Computer Science from Manipal
                    Institute of Technology in 2018. Worked for 2 years in L
                    &amp; T Technology Services, and currently I work with{" "}
                    <span className="hreflink">
                        <a
                            href="https://www.storydigital.in/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Story Digital
                        </a>
                    </span>
                    .
                </p>
                <p className="mb-3 text-lg leading-8">
                    Presently, I aspire to continue learning new technologies
                    and improve existing skillset while maintaining a decent
                    work-life balance. I also freelance so that I can
                    collaborate with multiple people and learn from the best in
                    the industry.
                </p>
            </div>
        </div>
    </Layout>
);

export default About;
