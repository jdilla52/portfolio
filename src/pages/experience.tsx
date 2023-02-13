import React, {useEffect, useRef, useState} from "react";
import ExperienceCard from "../components/experience_card";
import Logo from "../assets/logo";
import Link from "next/link";
import Arrow from "../assets/arrow";

const Experience = () => {

    const [isVisible, setIsVisible] = useState(false)
    // const myRef = useRef(null)

    const toggleVisibility = () => {
        // if (myRef.current && myRef.current > 200) {
        if (window.scrollY > 200) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
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
        <div className="bg-stone-300">
            <div className="w-36 p-6 fixed right-4 top-0">
                <Link href="/">
                    <Logo/>
                </Link>
            </div>
            {isVisible ? <button className="fixed right-10 bottom-10" onClick={()=>scrollToTop()}>
                <Arrow/>
            </button> : null}


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