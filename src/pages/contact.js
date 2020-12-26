import React from "react";
import Layout from "_DefaultComps/layout";

const Contact = () => (
    <Layout title="About Me">
        <div className="content">
            <div className="text-center">
                <p className="text-xl mb-5 ">Feel free to drop an email on -</p>
                <p className="sub-heading hreflink">nishkohli96@gmail.com</p>
            </div>
            <div className="text-center mt-10">
                <p className="text-xl mb-10 ">You can also find me at -</p>
            </div>
            <div className="content-center">
                <div className="flex flex-row">
                    <div>
                        <a
                            href="https://www.linkedin.com/in/nishant-kohli-452481109/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                                className="icon"
                                alt="linkedin"
                            />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://github.com/nishkohli96"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/000000/github.png"
                                className="icon"
                                alt="github"
                            />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://www.instagram.com/nocturnal_nish/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://img.icons8.com/fluent/48/000000/instagram-new.png"
                                className="icon"
                                alt="instagram"
                            />
                        </a>
                    </div>

                    <div>
                        <a
                            href="https://stackoverflow.com/users/6395102/nishant-kohli"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src="https://img.icons8.com/color/48/000000/stackoverflow.png"
                                className="icon"
                                alt="stack-overflow"
                            />
                        </a>
                    </div>
                </div>
            </div>
            </div>
    </Layout>
);

export default Contact;
