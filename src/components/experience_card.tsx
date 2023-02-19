import Arrow from "../assets/arrow";
import React, {useEffect, useState} from "react";
import type {Project, Role} from "../pages/experience";
import {goTo} from "../utils/propogation";
import SectionCard from "./section_card";


type ExperienceCardProps = {
    props: Role,
    expanded: boolean | undefined
    setExpanded: () => void
}

const ExperienceCard = ({props, expanded, setExpanded}: ExperienceCardProps) => {
    const ref = React.useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (expanded && ref.current)
            ref.current.scrollIntoView({behavior: "smooth", block: "start"})
    }, [expanded])
    // todo add collapse on move out of screen
    // todo add animation for expand
    return (
        <div className="flex flex-row font-cairo" ref={ref}>
            {/*{expanded ? <>*/}
            {!expanded &&<div className="flex flex-row w-36 border-r-2 border-stone-800 items-center justify-end">
                <div className="pr-6">
                    {props.date.length === 1 && <p className="">{props.date[0]}</p>}
                    {props.date.length === 2 && <p className="">{props.date[0]} - {props.date[1]}</p>}
                </div>
            </div>}
                    <div className={`flex flex-row grow justify-between border-2 border-stone-800 ${expanded ? "w-full" : "w-96"} p-4 ml-16 my-4`}
                         onClick={() => props.projects ? setExpanded() : () => null}>

                        <div className="shrink flex flex-col items-left justify-center">
                            <button className="flex flex-row items-center gap-3 pb-1 hover:underline"
                                    onClick={(e) => goTo(e, props.link)}>
                                {props.image ? <img className="h-8 w-8" src={props.image}/> : null}
                                <p className="text-lg">{props.company}: {props.role}</p>
                            </button>
                            <div className="shrink">
                                <p className="max-w-prose">{props.headline}</p>
                            </div>
                            {expanded && props.projects ? <div className="grid grid-cols-2 text-sm gap-6 p-4">
                                {props.projects.map((project: Project) => {
                                    return (
                                        <SectionCard key={project.name} props={project}/>
                                    )
                                })}
                            </div> : null}
                        </div>
                        {props.projects ?
                            <div className="self-end justify-self-end flex-none h-2.5 pl-1">
                                <Arrow t={expanded ? 1.0 : 0.0}/>
                            </div> : null}
                    </div>
                {/*</> :*/}
                {/*<>*/}
                {/*    <div className="flex flex-row w-36 border-r-2 border-stone-800 items-center justify-end">*/}
                {/*        <div className="pr-6">*/}
                {/*            {props.date.length === 1 && <p className="">{props.date[0]}</p>}*/}
                {/*            {props.date.length === 2 && <p className="">{props.date[0]} - {props.date[1]}</p>}*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex flex-row grow justify-between border-2 border-stone-800 w-96 p-4 ml-16 my-4"*/}
                {/*         onClick={() => props.projects ? setExpanded() : null}>*/}
                {/*        <div className="flex flex-col items-left justify-center">*/}
                {/*            <button className="flex flex-row items-center gap-3 pb-1 hover:underline"*/}
                {/*                    onClick={(e) => goTo(e, props.link)}>*/}
                {/*                {props.image ? <img className="h-8 w-8" src={props.image}/> : null}*/}
                {/*                <p className="text-lg">{props.company}: {props.role}</p>*/}
                {/*            </button>*/}
                {/*            <p className="">{props.headline}</p>*/}
                {/*        </div>*/}
                {/*        {props.projects ?*/}
                {/*            <div className="self-end justify-self-end flex-none h-2.5 pl-1">*/}
                {/*                <Arrow t={expanded ? 1.0 : 0.0}/>*/}
                {/*            </div> : null}*/}
                {/*    </div>*/}
                {/*</>}*/}
        </div>
    )
}

export default ExperienceCard