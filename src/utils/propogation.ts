import React from "react";


export const goTo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, link: string | null) => {
    event.stopPropagation();
    if (link)
        window.open(link, "_blank");
}

export const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, fn: ()=>void) => {
    event.stopPropagation();
    fn();
}