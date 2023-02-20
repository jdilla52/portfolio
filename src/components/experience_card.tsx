import Arrow from "../assets/arrow";
import React, {useEffect} from "react";
import type {Project, Role} from "../pages/experience";
import {goTo} from "../utils/propogation";
import SectionCard from "./section_card";
import Image from "next/image";

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

        <div className="grow flex flex-col md:flex-row font-cairo" ref={ref}>
            {/*{expanded ? <>*/}
            {!expanded && <div className="grow flex md:w-36 border-r-2 border-stone-800 items-center justify-end">
                <div className="pr-6">
                    {props.date.length === 1 && <p className="">{props.date[0]}</p>}
                    {props.date.length === 2 && <p className="">{props.date[0]} - {props.date[1]}</p>}
                </div>
            </div>}
            <div
                className={`grow flex flex-col justify-between border-2 border-stone-800 ${expanded ? "w-full" : "md:w-96"} p-4 md:ml-16 my-4`}
                onClick={() => props.projects ? setExpanded() : () => null}>
                <button className="flex-none flex items-center w-full gap-3 pb-1 hover:underline"
                        onClick={(e) => goTo(e, props.link)}>
                    {props.image &&
                        <div className="h-8 w-8 flex-none"><Image height={90} width={90} src={props.image}
                                                                  alt={"./"}/>
                        </div>}
                    <p className="flex-none text-lg text-left">{props.company}: {props.role}</p>
                </button>
                <p className="flex-none w-full">{props.headline}</p>
                {expanded && props.projects ?
                    <div
                        className="w-full h-full grid sm:grid-cols-1 md:grid-cols-2 place-self-center justify-center text-sm gap-6 p-4">
                        {props.projects.map((project: Project) => {
                            return (
                                <SectionCard key={project.name} props={project}/>
                            )
                        })}
                    </div> : null}
                {props.projects ?
                    <div className="shrink flex-none self-end justify-self-end h-2.5 mt-2">
                        <Arrow t={expanded ? 1.0 : 0.0}/>
                    </div> : null}
            </div>
        </div>
    )
}

export default ExperienceCard