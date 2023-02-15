import React, {useEffect, useRef, useState} from "react";
import ExperienceCard from "../components/experience_card";
import Logo from "../assets/logo";
import Link from "next/link";
import Arrow from "../assets/arrow";

const Experience = () => {

    const [scroll, setScroll] = useState(0.5)
    const outerRef = useRef(null)

    const toggleVisibility = () => {
        // interpolate between 0.5 and 1
        setScroll(0.5 + 0.5 * (window.scrollY / (outerRef.current.scrollHeight - window.innerHeight)))
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

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
                    <button className="h-8" onClick={() => scrollToTop()}>
                        <Arrow t={scroll}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Experience;