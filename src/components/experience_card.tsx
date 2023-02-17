import Arrow from "../assets/arrow";
import {useState} from "react";
import type {Project, Role} from "../pages/experience";

const ExperienceCard = ({props}: { props: Role }) => {
    const [expanded, setExpanded] = useState(false)
    // todo add scroll on expand
    // todo add collapse on move out of screen
    // todo add animation for expand
    return (
        <>
            {expanded ? <div className="flex flex-row">
                    <div className="flex flex-row grow justify-between border-2 border-stone-800 w-full p-4 ml-16 my-4"
                         onClick={() => props.projects ? setExpanded(!expanded) : () => null}>
                        <div className="flex flex-col items-left justify-center">
                            <div className="flex flex-row items-center gap-3 pb-1">
                                {props.image ? <img className="h-8 w-8" src={props.image}/> : null}
                                <p className="text-lg">{props.company}: {props.role}</p>
                            </div>
                            <p className="">{props.headline}</p>
                            {props.projects ? <div className="flex flex-col text-sm gap-1">
                                {props.projects.map((project: Project) => {
                                    return (
                                        <div key={project.name} className="flex flex-col">
                                            <p className="">{project.name.toUpperCase()}: {project.description}</p>
                                            {project.details ? <ol className="list-disc list-inside pl-2">
                                                {project.details.map((detail: string) => {
                                                    return (<li key={detail}>{detail}</li>)
                                                })}
                                            </ol>: null}
                                        </div>
                                    )
                                })}
                            </div> : null}
                        </div>
                        {props.projects ?
                            <div className="self-end justify-self-end flex-none h-2.5 pl-1">
                                <Arrow t={expanded ? 1.0 : 0.0}/>
                            </div> : null}
                    </div>
                </div> :
                <div className="flex flex-row">
                    <div className="flex flex-row w-36 border-r-2 border-stone-800 items-center justify-end">
                        <div className="pr-6">
                            {props.date.length === 1 && <p className="">{props.date[0]}</p>}
                            {props.date.length === 2 && <p className="">{props.date[0]} - {props.date[1]}</p>}
                        </div>
                    </div>
                    <div className="flex flex-row grow justify-between border-2 border-stone-800 w-96 p-4 ml-16 my-4"
                         onClick={() => props.projects ? setExpanded(!expanded) : () => null}>
                        <div className="flex flex-col items-left justify-center">
                            <div className="flex flex-row items-center gap-3 pb-1">
                                {props.image ? <img className="h-8 w-8" src={props.image}/> : null}
                                <p className="text-lg">{props.company}: {props.role}</p>
                            </div>
                            <p className="">{props.headline}</p>
                        </div>
                        {props.projects ?
                            <div className="self-end justify-self-end flex-none h-2.5 pl-1">
                                <Arrow t={expanded ? 1.0 : 0.0}/>
                            </div> : null}
                    </div>
                </div>}
        </>
    )
}

export default ExperienceCard