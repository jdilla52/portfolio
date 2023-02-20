import React, {useRef, useState} from "react";
import Logo from "../assets/logo";
import Link from "next/link";
import ProjectCard from "../components/project_card";
import ScrollableArrow from "../assets/scrollable_arrow";
import rawProjects from "../data/projects.json";

export type Section = {
    title: string | null,
    details: string,
    image: string | null,
    link: string | null,

}

export type Project = {
    name: string,
    description: string,
    link: string | null,
    thumb: string | null,
    sections: Array<Section> | null,
}

type ProjectsResponse = {
    projects: Array<Project>
}

const Projects = () => {
    const outerRef = useRef<HTMLInputElement>(null)

    const projectData = rawProjects as unknown as ProjectsResponse;
    const init_state = projectData.projects.reduce<{ [index: string]: boolean }>((acc, project) => {
        acc[project.name] = false
        return acc
    }, {})
    const [expanded, setExpanded] = useState<{ [index: string]: boolean }>({...init_state})
    const getRef = () => {
        return outerRef.current
    }
    const setExpandedState = (name: string) => () => {
        setExpanded({...init_state, [name]: !expanded[name]})
    }
    return (
        <div className="relative fixed w-screen h-screen flex md:flex-row sm:flex-col bg-stone-100">
            <div className="overflow-y-auto w-screen pb-16" ref={outerRef}>
                <div className="grow sm:w-full md:w-[calc(100%-theme(space.36))] md:pl-36 flex flex-col w-md p-4
            text-stone-800 gap-4">
                    {projectData.projects.map((project: Project) =>
                        <ProjectCard key={project.name} props={project} expanded={expanded[project.name]}
                                     setExpanded={setExpandedState(project.name)}/>
                    )}
                </div>
            </div>
            <div
                className="fixed flex md:flex-col bottom-0 left-0 right-0 md:right-0 md:left-[calc(100%-theme(space.36))] md:top-0 items-end md:items-center justify-between bg-stone-100">
                <div className="w-10 md:w-24 h-10 md:h-24 m-4 md:mr-12">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
                <div className="overflow-visible w-8 md:w-10 h-8 mr-8 m-2">
                    <ScrollableArrow outerRef={getRef}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;
