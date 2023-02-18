import React from "react";


export const goTo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, link: string | null) => {
    event.stopPropagation();
    if (link)
        window.open(link, "_blank");
}