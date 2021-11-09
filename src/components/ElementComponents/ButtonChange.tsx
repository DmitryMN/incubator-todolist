import React from "react";

type buttonChangeProps = {
    name: string
    callBack: () => void
    className?: string
}

export const ButtonChange = ({name, callBack, className}: buttonChangeProps) => {

    const btnClick = () => {
        callBack();
    }

    return(
        <button className={className} onClick={btnClick}>{name}</button>
    );
}