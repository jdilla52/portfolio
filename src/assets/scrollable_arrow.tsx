import Arrow from "./arrow";
import React, {useEffect, useState} from "react";


type ScrollableArrowProps = {
    outerRef: () => HTMLDivElement | null
}
const ScrollableArrow = (props: ScrollableArrowProps) => {
    const [scroll, setScroll] = useState(0.5)

    const scrollToTop = () => {
        props.outerRef()?.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            const ref = props.outerRef()

            if (ref) {
                // interpolate between 0.5 and 1
                setScroll(0.5 + 0.5 * (ref.scrollTop / (ref.scrollHeight - window.innerHeight)))
            }
        }

        const ref = props.outerRef();
        if (ref) {
            ref.addEventListener('scroll', toggleVisibility)
        }

        return () => {
            if (ref) {
                ref.removeEventListener('scroll', toggleVisibility)
            }
        }
    }, [props])

    return (
        <button className="h-4 w-full overflow-visible" onClick={() => scrollToTop()}>
            <Arrow t={scroll}/>
        </button>
    )
}

export default ScrollableArrow;