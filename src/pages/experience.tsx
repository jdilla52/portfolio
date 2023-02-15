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
        <div className="bg-stone-300" ref={outerRef}>
            <div className="w-36 p-6 fixed right-4 top-0">
                <Link href="/">
                    <Logo/>
                </Link>
            </div>
           <button className="fixed right-10 bottom-10" onClick={()=>scrollToTop()}>
                <Arrow t={scroll}/>
            </button>

            <div className="flex flex-col items-center p-4
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
        </div>
    )
}

export default Experience;