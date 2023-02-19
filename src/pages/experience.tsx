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
    image: string | null
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
        <div className="relative fixed w-screen h-screen flex flex-row bg-stone-100">
            <div className="overflow-auto w-screen" ref={outerRef}>
                <div className="grow w-[calc(100%-theme(space.36))] flex flex-col items-center p-4
            text-stone-800 overflow-auto scrollbar">
                    {experienceData.roles.map((role: Role) => {
                        return (
                            <ExperienceCard key={role.headline} props={role} expanded={expanded[getRoleKey(role)]}
                                            setExpanded={setExpandedState(getRoleKey(role))}/>
                        )
                    })}
                </div>
            </div>
            <div className="fixed flex flex-col right-5 h-screen w-36 p-6 justify-between">
                <div className="flex-col items-center">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
                <ScrollableArrow outerRef={getRef}/>
            </div>
        </div>
    )
}

export default Experience;