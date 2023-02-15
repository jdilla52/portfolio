import Arrow from "./arrow";
import React, {useEffect, useState} from "react";


type ScrollableArrowProps = {
    outerRef: () => HTMLInputElement | null
}
const ScrollableArrow = (props: ScrollableArrowProps) => {
    const [scroll, setScroll] = useState(0.5)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        const toggleVisibility = () => {
            const ref = props.outerRef()
            if (ref) {
                // interpolate between 0.5 and 1
                setScroll(0.5 + 0.5 * (window.scrollY / (ref.scrollHeight - window.innerHeight)))
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [props])

    return (
        <button className="h-4 w-full overflow-visible" onClick={() => scrollToTop()}>
            <Arrow t={scroll}/>
        </button>
    )
}

export default ScrollableArrow;