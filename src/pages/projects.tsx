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
        <div className="relative fixed w-screen h-screen flex flex-row bg-stone-100">
            <div className="overflow-auto w-screen" ref={outerRef}>
                <div className="grow w-[calc(100%-theme(space.36))] flex flex-col items-center p-6 pl-16
            text-stone-800 overflow-auto scrollbar gap-4">
                    {projectData.projects.map((project: Project) => {
                        return (
                            <ProjectCard key={project.name} props={project} expanded={expanded[project.name]}
                                         setExpanded={setExpandedState(project.name)}/>
                        )
                    })
                    }
                </div>
            </div>
            <div className="fixed flex flex-col right-5 h-screen w-36 p-6 justify-between">
                <div className="flex-col items-center">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
                <ScrollableArrow outerRef={getRef}/>
            </div>
        </div>
    )
}

export default Projects;
