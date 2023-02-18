import React, {useRef, useState} from "react";
import ExperienceCard from "../components/experience_card";
import Logo from "../assets/logo";
import Link from "next/link";
import ScrollableArrow from "../assets/scrollable_arrow";
import rawExperience from "../data/experience.json";

export type Project = {
    name: string,
    description: string,
    link: string | null,
    details: Array<string> | null,
}

export type Role = {
    company: string,
    link: string | null,
    date: Array<string>,
    role: string,
    headline: string,
    image: string | null,
    projects: Array<Project> | null
}

type RoleResponse = {
    roles: Array<Role>
}

const getRoleKey = (role: Role) => `${role.role}-${role.company}`
const Experience = () => {

    const outerRef = useRef<HTMLInputElement>(null)

    // todo cast json to role response - will move to api
    const experienceData = rawExperience as unknown as RoleResponse;
    const init_state = experienceData.roles.reduce<{ [index: string]: boolean }>((acc, role) => {
        acc[getRoleKey(role)] = false
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
        <div className="flex flex-row bg-stone-300 min-h-screen" ref={outerRef}>
            <div className="grow w-fit flex flex-col items-center p-4
            text-stone-800 overflow-auto scrollbar">
                {experienceData.roles.map((role: Role) => {
                    return (
                        <ExperienceCard key={role.headline} props={role} expanded={expanded[getRoleKey(role)]}
                                        setExpanded={setExpandedState(getRoleKey(role))}/>
                    )
                })}
            </div>
            <div className="w-36 flex-none">
                <div className="flex flex-col h-screen p-6 fixed place-content-between items-center">
                    <div className="">
                        <Link href="/">
                            <Logo/>
                        </Link>
                    </div>
                    <ScrollableArrow outerRef={getRef}/>
                </div>
            </div>
        </div>
    )
}

export default Experience;