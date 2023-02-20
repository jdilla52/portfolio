import type {Project} from "../pages/experience";
import {useState} from "react";
import {goTo, onClick} from "../utils/propogation";
import Info from "../assets/info";
import Image from "next/image";

type SectionCardProps = {
    props: Project
}
const SectionCard = ({props}: SectionCardProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="flex flex-col w-56">
            <div className="relative h-56">
                {props.image &&
                    <Image className="h-full w-full object-cover" src={props.image} fill={true} alt={"./"}/>}
                {(expanded || !props.image) && props.details &&
                    <div className="absolute top-0 left-0 w-full h-full bg-stone-100 opacity-90">
                        <ol className="h-min list-disc list-inside p-3 justify-self-center self-center flex flex-col gap-1">
                            {props.details.map((detail: string) => {
                                return (<li key={detail}>{detail}</li>)
                            })}
                        </ol>
                    </div>}
            </div>
            <div className="justify-self-end pt-2 w-full h-10 flex flex-row items-center justify-between">
                {props.image && <button className="h-6 w-6 flex-none ml-2"
                                        onClick={(e) => onClick(e, () => setExpanded(!expanded))}>
                    <Info/>
                </button>}
                <button className="" onClick={(e) => goTo(e, props.link)}>{props.name}</button>
                <div className="w-6 h-6 mr-2 flex-none">
                </div>
            </div>
        </div>
    )
}

export default SectionCard;