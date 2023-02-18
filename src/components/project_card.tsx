import Arrow from "../assets/arrow";
import React, {useEffect, useState} from "react";
import Github from "../assets/github";
import {Project, Section} from "../pages/projects";
import {Role} from "../pages/experience";


const ProjectCard = ({props}: { props: Project }) => {
    const [expanded, setExpanded] = useState(false)
    const ref = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (expanded && ref.current)
            ref.current.scrollIntoView({behavior: "smooth", block: "start"})
    }, [expanded])
    return (
        <div className="w-full border-2 border-stone-800 font-cairo w-2/3"
             onClick={() => setExpanded(!expanded)} ref={ref}>
            <div className="w-full flex flex-row justify-between content-between pl-6 p-4 gap-7">
                {/*<div className="h-28 w-36 bg-stone-100">*/}
                <div className="grow flex flex-col">
                    <div className="flex flex-row items-center justify-between gap-3 pb-1">
                        {props.thumb ? <img className="h-28 w-36" src={props.thumb}/> : null}
                        <div className="grow flex-none flex flex-col justify-center">
                            <h3 className="text-lg">{props.name}</h3>
                            <p className="flex-none">{props.description}</p>
                        </div>
                    </div>
                    {(expanded && props.sections) ?
                        <div className="flex flex-col text-sm gap-1 pt-3 gap-2">
                            {props.sections.map((section: Section) => {
                                return (
                                    <div key={section.details} className="flex flex-row w-full">
                                        {section.link ?
                                            <a className="h-6 w-6 mr-4 self-end self-center justify-self-center flex-none"
                                               href={section.link}>
                                                <Github/>
                                            </a> : null}
                                        {section.image ? <img className="w-1/2 flex-none" src={section.image}/> : null}
                                        <div className="flex flex-col flex-grow p-2">
                                            {section.title ?
                                                <h4 className="flex-none">{section.title.toUpperCase()}</h4> : null}
                                            <p className="">{section.details}</p>

                                        </div>
                                    </div>
                                )
                            })}
                        </div> : null}
                </div>

                <div
                    className="flex flex-col min-h-max justify-self-end justify-between justify-end contend-end content-between flex-none">
                    {props.link ? <a className="h-7" href={props.link}>
                        <Github/>
                    </a> : null}
                    {props.sections ? <div className="h-3 self-end justify-self-end">
                        <Arrow t={expanded ? 1.0 : 0.0}/>
                    </div> : null}
                </div>
            </div>
        </div>

    )
}

export default ProjectCard