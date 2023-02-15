import Arrow from "../assets/arrow";
import {useState} from "react";

type ExperienceCardProps = {
    title: string
    company: string
    description: string
    link: string
}

const ExperienceCard = ({title, company, description, link}: ExperienceCardProps) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex flex-row">
            <div className="flex flex-row w-36 border-r-2 border-stone-800">
                <div className="flex flex-col p-4 justify-center">
                    10.1.2023
                </div>
            </div>
            <div className="flex flex-row grow justify-between border-2 border-stone-800 w-80 p-4 ml-16 my-4"
                 onClick={() => setToggle(!toggle)}>
                <div className="flex flex-col items-left justify-center">
                    <div className="flex flex-row items-left justify-left gap-4 text-lg">
                        <h3 className="">{title}:</h3>
                        <h3 className="" href={link}>{company} </h3>
                    </div>
                    <p className="text-lg">{description}</p>
                    {toggle && <p className="text-lg">test</p>}
                </div>
                <div className="self-end h-4">
                    <Arrow t={toggle ? 1.0 : 0.0}/>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard