import {type NextPage} from "next";
import Logo from "../assets/logo";
import React from "react";
import Linkedin from "../assets/linkedin";
import Github from "../assets/github";
import SpecialBullet from "../assets/special_bullet";

const Home: NextPage = () => {
    return (
        <>
            <main className="fixed w-screen h-screen flex flex-col items-center justify-center
            font-sans font-normal leading-relaxed text-stone-800 body-font font-cairo">
                <div className="w-48 p-6">
                    <Logo/>
                </div>

                <div className="flex flex-col items-center justify-center px-4 gap-4">
                    <div className="flex flex-row items-center justify-center gap-9">
                        <a className="h-10" href="https://github.com/jdilla52">
                            <Github/>
                        </a>
                        <a className="h-10" href="https://linkedin.com/in/jacques-perrault">
                            <Linkedin/>
                        </a>
                    </div>
                    <div className="flex flex-col justify-left gap-2 pl-2">
                        <SpecialBullet link={"/experience"} content={"experience"}/>
                        <SpecialBullet link={"/projects"} content={"side projects"}/>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
