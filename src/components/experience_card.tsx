import Arrow from "../assets/arrow";
import {useState} from "react";
import type {Project, Role} from "../pages/experience";

const ExperienceCard = ({props}: { props: Role }) => {
    const [expanded, setExpanded] = useState(false)
    return (
        <>
            {expanded ? <div className="flex flex-row">
                    <div className="flex flex-row grow justify-between border-2 border-stone-800 w-full p-4 ml-16 my-4"
                         onClick={() => props.projects ? setExpanded(!expanded) : () => null}>
                        <div className="flex flex-col items-left justify-center">
                            <h3 className="text-lg">{props.company}: {props.role}</h3>
                            <p className="">{props.headline}</p>
                            {props.projects ? <p className="flex flex-col text-sm">
                                {props.projects.map((project: Project) => {
                                    return (
                                        <div key={project.name} className="flex flex-col">
                                            <p className="">{project.name}</p>
                                            <p className="">{project.description}</p>
                                            <p className="">{project.details}</p>
                                        </div>
                                    )
                                })}
                            </p> : null}
                        </div>
                        {props.projects ?
                            <div className="self-end justify-self-end flex-none h-2.5">
                                <Arrow t={expanded ? 1.0 : 0.0}/>
                            </div> : null}
                    </div>
                </div> :
                <div className="flex flex-row">
                    <div className="flex flex-row w-36 border-r-2 border-stone-800">
                        <div className="flex flex-col p-4 justify-center">
                            10.1.2023
                        </div>
                    </div>
                    <div className="flex flex-row grow justify-between border-2 border-stone-800 w-96 p-4 ml-16 my-4"
                         onClick={() => props.projects ? setExpanded(!expanded) : () => null}>
                        <div className="flex flex-col items-left justify-center">
                            <h3 className="text-lg">{props.company}: {props.role}</h3>
                            <p className="">{props.headline}</p>
                        </div>
                        {props.projects ?
                            <div className="self-end justify-self-end flex-none h-2.5">
                                <Arrow t={expanded ? 1.0 : 0.0}/>
                            </div> : null}
                    </div>
                </div>}
        </>
    )
}

export default ExperienceCard