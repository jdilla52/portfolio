import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";

function useHover(): [React.RefObject<HTMLDivElement>, boolean] {
    const [value, setValue] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener("mouseover", handleMouseOver);
                node.addEventListener("mouseout", handleMouseOut);
                return () => {
                    node.removeEventListener("mouseover", handleMouseOver);
                    node.removeEventListener("mouseout", handleMouseOut);
                };
            }
        },
        [] // Recall only if ref changes
    );
    return [ref, value];
}

type SpecialBulletProps = {
    content: string
    link: string
}

const SpecialBullet = (props: SpecialBulletProps) => {
    const [hover, isHover] = useHover()
    return (
        <div ref={hover} className="flex flex-row items-center gap-2 body-font font-cairo">
            <div className="w-3 pt-1">
                <svg className="stroke-stone-800 stroke-1" width="100%" height="100%" viewBox="0 0 9 9" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4.53552L10 4.53552"/>
                    {isHover && <path d="M1.46448 8.07104L8.53555 0.999977"/>}
                </svg>
            </div>
            <Link href={props.link}>{props.content}</Link>
        </div>
    )
}

export default SpecialBullet;
