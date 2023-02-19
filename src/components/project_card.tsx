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
        <div className="w-full border-2 border-stone-800 font-cairo w-4/5"
             onClick={() => setExpanded()} ref={ref}>
            <div className="flex flex-row justify-between content-between pl-6 p-4 gap-7">
                <div className="grow flex flex-col">
                    <div className="flex flex-row items-center justify-between gap-3 pb-2">
                        {props.thumb && <div className="h-28 w-36 flex-none">
                            <Image className="h-28 w-36 flex-none" src={props.thumb}
                                   height={100} width={100} alt={"./"}/></div>}
                        <div className="grow flex-none flex flex-col justify-center">
                            <h3 className="text-lg">{props.name}</h3>
                            <p className="flex-none">{props.description}</p>
                        </div>
                    </div>
                    {(expanded && props.sections) &&
                        <div className="flex flex-col text-sm gap-1 pt-3 gap-4">
                            {props.sections.map((section: Section) => {
                                return (
                                    <div key={section.details} className="flex flex-row w-full">
                                        {section.link &&
                                            <button
                                                className="h-6 w-6 mr-4 self-end self-center justify-self-center flex-none"
                                                onClick={(e) => goTo(e, section.link)}>
                                                <Github/>
                                            </button>}
                                        {section.image ?
                                            <Image className="w-1/2 flex-none" src={section.image}
                                                   width={400} height={400} alt={"./"}/> : null}
                                        <div className="flex flex-col flex-grow p-2">
                                            {section.title ?
                                                <>
                                                    <h4 className="flex-none">{section.title.toUpperCase()}</h4>
                                                    <p className="">{section.details}</p>
                                                </> : <p className="p-8">{section.details}</p>}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>}
                </div>
                <div
                    className="flex flex-col min-h-max justify-self-end justify-between justify-end contend-end content-between flex-none">
                    {props.link ?
                        <button className="h-7"
                                onClick={(e) => goTo(e, props.link)}>
                            <Github/>
                        </button> : null}
                    {props.sections ? <div className="h-3 self-end justify-self-end">
                        <Arrow t={expanded ? 1.0 : 0.0}/>
                    </div> : null}
                </div>
            </div>
        </div>

    )
}

export default ProjectCard