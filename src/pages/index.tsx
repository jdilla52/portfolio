import {type NextPage} from "next";
import Logo from "../assets/logo";
import React from "react";
import Linkedin from "../assets/linkedin";
import Github from "../assets/github";
import SpecialBullet from "../assets/special_bullet";
import Resume from "../assets/resume";

const Home: NextPage = () => {
    return (
        <main className="fixed w-screen h-screen flex flex-col items-center justify-center
            font-sans font-normal leading-relaxed text-stone-800 bg-stone-100 body-font font-cairo gap-5">
            <div className="w-40">
                <Logo/>
            </div>
            <div className="flex flex-row w-40 justify-between">
                <a className="h-10 w-10" href="https://github.com/jdilla52">
                    <Github/>
                </a>
                <a className="h-10 w-10" href="/resume_2023_2.pdf" download="/resume_2023_2.pdf">
                    <Resume/>
                </a>
                <a className="h-10 w-10" href="https://linkedin.com/in/jacques-perrault">
                    <Linkedin/>
                </a>
            </div>
            <div className="flex flex-col justify-left gap-2 pl-2">
                <SpecialBullet link={"/experience"} content={"experience"}/>
                <SpecialBullet link={"/projects"} content={"side projects"}/>
            </div>
        </main>
    );
};

export default Home;
