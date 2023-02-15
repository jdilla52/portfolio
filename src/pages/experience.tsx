import React, {useRef} from "react";
import ExperienceCard from "../components/experience_card";
import Logo from "../assets/logo";
import Link from "next/link";
import ScrollableArrow from "../assets/scrollable_arrow";

const Experience = () => {

    const outerRef = useRef<HTMLInputElement>(null)
    const getRef = () => {
        return outerRef.current
    }
    return (
        <div className="flex flex-row bg-stone-300 min-h-screen" ref={outerRef}>
            <div className="grow w-fit flex flex-col items-center p-4
            text-stone-800 overflow-auto scrollbar">
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
                <ExperienceCard title={"test"} company={"test"} description={"test"} link={"example.com"}/>
            </div>
            <div className="w-36">
                <div className="flex flex-col h-screen p-6 fixed place-content-between items-center">
                    <div className="">
                        <Link href="/">
                            <Logo/>
                        </Link>
                    </div>
                    <ScrollableArrow outerRef={getRef}/>
                </div>
            </div>
        </div>
    )
}

export default Experience;