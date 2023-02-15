import Arrow from "../assets/arrow";
import React, {useState} from "react";
import Github from "../assets/github";

type ProjectCardProps = {
    title: string
    description: string
    link: string
}

const ProjectCard = ({title, description, link}: ProjectCardProps) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-full flex flex-col justify-center border-2 border-stone-800"
             onClick={() => setToggle(!toggle)}>
            <div className="w-full flex flex-row justify-left pl-6 p-4 gap-7">
                <div className="h-28 w-36 bg-stone-100"></div>
                <div className="grow flex flex-col items-left justify-center">
                    <h3 className="text-lg">{title}</h3>
                    <p className="">{description}</p>
                    {toggle && <p className="">test</p>}
                </div>
                <div className="justify-self-end place-content-between flex flex-col">
                    <a className="h-7" href={link}>
                        <Github/>
                    </a>
                    <div className="h-5">
                        <Arrow t={toggle ? 1.0 : 0.0}/>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default ProjectCard