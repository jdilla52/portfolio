import React from "react";
import ExperienceCard from "../components/experience_card";
import Logo from "../components/logo";

const FirstPost = () => {
    return (
        <div className="min-h-screen  min-w-screen bg-stone-300">
            <div className="w-36 p-4 absolute right-0">
                <Logo/>
            </div>
            <div className="flex flex-col items-center
            font-sans font-normal leading-relaxed text-stone-800 font-base">
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
            </div>
        </div>
    )
}

export default FirstPost;