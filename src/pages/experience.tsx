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
        <div className="relative fixed w-screen h-screen flex md:flex-row sm:flex-col bg-stone-100">
            <div className="overflow-y-auto w-screen pb-16 md:mb-0" ref={outerRef}>
                <div className="grow sm:w-full md:w-[calc(100%-theme(space.36))] flex flex-col items-center p-4
            text-stone-800">
                    {experienceData.roles.map((role: Role) => {
                        return (
                            <ExperienceCard key={role.headline} props={role} expanded={expanded[getRoleKey(role)]}
                                            setExpanded={setExpandedState(getRoleKey(role))}/>
                        )
                    })}
                </div>
                <div
                    className="fixed flex md:flex-col bottom-0 left-0 right-0 md:right-0 md:left-[calc(100%-theme(space.36))] md:top-0 items-end md:items-center justify-between">
                    <div className="w-10 md:w-24 h-10 md:h-24 m-4 md:mr-12">
                        <Link href="/">
                            <Logo/>
                        </Link>
                    </div>
                    <div className="overflow-visible w-8 md:w-10 h-8 mr-8 m-2">
                        <ScrollableArrow outerRef={getRef}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;