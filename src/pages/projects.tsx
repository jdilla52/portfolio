import React, {useEffect, useRef, useState} from "react";
import Logo from "../assets/logo";
import Link from "next/link";
import Arrow from "../assets/arrow";
import ProjectCard from "../components/project_card";

const Projects = () => {

    const [scroll, setScroll] = useState(0.5)
    const outerRef = useRef<HTMLInputElement>(null)

    const toggleVisibility = () => {
        if (outerRef.current !== null) {
            // interpolate between 0.5 and 1
            setScroll(0.5 + 0.5 * (window.scrollY / (outerRef.current.scrollHeight - window.innerHeight)))
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
        <div className="flex flex-row bg-stone-300 min-h-screen" ref={outerRef}>
            <div className="grow flex w-fit flex-col items-center text-stone-800 overflow-auto ml-8 mt-8 mr-2 gap-4">
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
                <ProjectCard title={"test"} description={"test"} link={"example.com"}/>
            </div>
            <div className="w-36">
                <div className="flex flex-col h-screen p-6 fixed place-content-between items-center">
                            <Link href="/">
                                <Logo/>
                            </Link>
                    <button className="h-5 w-full overflow-visible" onClick={() => scrollToTop()}>
                        <Arrow t={scroll}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects;