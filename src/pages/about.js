import React from 'react';
import Layout from "_DefaultComps/layout";
import * as DP from "_Images/nish.jpg";

const About = () => (
    <Layout title="About Me">
        <div className="content grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="m-auto">
                <img className="rounded-full w-60 h-60" src={DP} />
                <p className="mb-3 text-lg">
                    I was born in June 1996 in Ludhiana, Punjab (Punjabi in the house !!! ).
                    I spent some of my childhood in Amritsar, but completed most of my education
                    in Ludhiana itself.
                </p>
            </div>

            <div className="respdiv mx-auto">
                <p className="mb-3 text-lg">
                    I completed my B.Tech in Computer Science from Manipal Institute of
                    Technology in 2018. Worked for 2 years in L &amp; T Technology Services, and
                    currently I work with <span className="hreflink">
                        <a
                            href="https://www.storydigital.in/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Story Digital
                        </a>
                    </span>.
                </p>
                <p className="mb-3 text-lg">
                    Presently, I aspire to continue learning new technologies and improve existing
                    skillset while maintaining a decent work-life balance. I&apos; also freelance so that
                    I can collaborate with multiple people and learn from the best in the industry.
                </p>
            </div>
        </div>
    </Layout>
);

export default About;