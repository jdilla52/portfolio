import {type NextPage} from "next";
import Logo from "../assets/logo";
import React from "react";
import Linkedin from "../assets/linkedin";
import Github from "../assets/github";
import SpecialBullet from "../assets/special_bullet";

const Home: NextPage = () => {
    return (
        <main className="fixed w-screen h-screen flex flex-col items-center justify-center
            font-sans font-normal leading-relaxed text-stone-800 bg-stone-100 body-font font-cairo gap-5">
            <div className="w-36">
                <Logo/>
            </div>
            <div className="flex w-36 justify-between">
                <a className="h-10 grow" href="https://github.com/jdilla52">
                    <Github/>
                </a>
                <a className="h-10 grow" href="https://linkedin.com/in/jacques-perrault">
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
