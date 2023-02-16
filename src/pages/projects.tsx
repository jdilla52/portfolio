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
        <div className="flex flex-row bg-stone-300 min-h-screen" ref={outerRef}>
            <div className="grow flex w-fit flex-col items-center text-stone-800 overflow-auto ml-8 mt-8 mr-2 gap-4">
                {projectData.projects.map((project: Project) => {
                    return (
                        <ProjectCard key={project.name} props={project} expanded={expanded[project.name]}
                                     setExpanded={setExpandedState(project.name)}/>
                    )
                })
                }
            </div>
            <div className="w-36">
                <div className="flex flex-col h-screen p-6 fixed place-content-between items-center">
                    <Link href="/">
                        <Logo/>
                    </Link>
                    <ScrollableArrow outerRef={getRef}/>
                </div>
                <ScrollableArrow outerRef={getRef}/>
            </div>
        </div>
    )
}

export default Projects;
