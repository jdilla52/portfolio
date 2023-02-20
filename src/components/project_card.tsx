import Arrow from "../assets/arrow";
import React, {useEffect} from "react";
import Github from "../assets/github";
import type {Project, Section} from "../pages/projects";
import {goTo} from "../utils/propogation";
import Image from "next/image";

type ProjectCardProps = {
    props: Project,
    expanded: boolean | undefined
    setExpanded: () => void
}

const ProjectCard = ({props, expanded, setExpanded}: ProjectCardProps) => {
    const ref = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (expanded && ref.current)
            ref.current.scrollIntoView({behavior: "smooth", block: "start"})
    }, [expanded])

    // todo refactor for different card states: image, text, link, image + text + link
    // hacked in for now
    return (
        <div className="relative w-full border-2 border-stone-800 font-cairo"
             onClick={() => setExpanded()} ref={ref}>
            <div className="flex flex-col pl-6 p-4">
                    <div className="grow flex flex-row w-full justify-between items-center gap-3">
                        {props.thumb && <div className="h-28 w-36 flex-none">
                            <Image className="h-28 w-36 flex-none" src={props.thumb}
                                   height={100} width={100} alt={"./"}/></div>}
                        <div className="grow w-full">
                            <h3 className="text-lg">{props.name}</h3>
                            <p className="w-full flex-none">{props.description}</p>
                        </div>
                </div>
                {(expanded && props.sections) &&
                    <div className="flex flex-col text-sm gap-1 pt-3 gap-4">
                        {props.sections.map((section: Section) => {
                            return (
                                <div key={section.details}
                                     className={`flex ${section.image ? "flex-col" : "flex-row"} md:flex-row w-full`}>
                                    {section.link &&
                                        <button
                                            className="h-6 w-6 m-4 self-end self-center justify-self-center flex-none"
                                            onClick={(e) => goTo(e, section.link)}>
                                            <Github/>
                                        </button>}
                                    {section.image ?
                                        <Image className="w-full md:w-56 flex-none" src={section.image}
                                               width={400} height={400} alt={"./"}/> : null}
                                    <div className="flex flex-col flex-grow p-2">
                                        {section.title ?
                                            <>
                                                <h4 className="flex-none">{section.title.toUpperCase()}</h4>
                                                <p className="">{section.details}</p>
                                            </> : <p className="md:p-8">{section.details}</p>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>}
            </div>
            {props.link &&
                <button className="absolute right-3 top-4 h-7 w-7"
                        onClick={(e) => goTo(e, props.link)}>
                    <Github/>
                </button>}
            {props.sections &&
                <div className="absolute right-3 bottom-2 h-7 w-7">
                    <Arrow t={expanded ? 1.0 : 0.0}/>
                </div>}
        </div>

    )
}

export default ProjectCard