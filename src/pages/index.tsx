import {type NextPage} from "next";
import Link from "next/link";
import Logo from "../assets/logo";
import React from "react";
import Linkedin from "../assets/linkedin";
import Github from "../assets/github";

const Home: NextPage = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center bg-stone-400
            font-sans font-normal leading-relaxed text-stone-800 font-base">
                <div className="w-48 p-6">
                    <Logo/>
                </div>

                <div className="flex flex-col items-center justify-center px-4 gap-4">
                    <div className="flex flex-row items-center justify-center gap-10">
                        <a className="h-10" href="https://github.com/jdilla52">
                            <Github/>
                        </a>
                        <a className="h-10" href="https://linkedin.com/in/jacques-perrault">
                            <Linkedin/>
                        </a>
                    </div>
                    <ol className="flex flex-col justify-left gap-2 list-disc">
                        <li>
                            <Link href="/experience">experience</Link>
                        </li>
                        <li>
                            <Link href="/projects">side projects</Link>
                        </li>
                    </ol>
                </div>
            </main>
        </>
    );
};

export default Home;
