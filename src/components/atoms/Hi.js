import React from "react";

const Hi = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pt-5">
            <div className="col-span-1 mx-auto">
                <p className="text-5xl my-5"> Hi There 👋 </p>
                <p className="text-3xl mt-10"> Nice to meet you. </p>
            </div>
            <div className="mx-auto col-span-1 pt-5 max-w-xs sm:max-w-sm md:max-w-md">
                <p className="text-lg"> Myself Nishant. I am a Self-taught FullStack Developer with two years of experience
                    currently working with Story Digital. I am also practicing Freelancing.
                    My core skillset includes ReactJS and React-Native along with relevant
                    experience in NodeJS, Express, Fastify, MongoDB etc.
                </p>
                <p className="text-lg mt-5"> I keep enhancing my technical knowledge by learning new technologies as well as improve
                    existing skillset.
                </p>
                <p className="text-lg mt-5"> Besides that I love travelling ✈, watching movies 📺, listening music &#127925;, playing video games 🎮, hanging out 
                    with friends 👨‍👦‍👦 and all that good stuff...
                </p>
            </div>
        </div>
    );
};

export default Hi;
