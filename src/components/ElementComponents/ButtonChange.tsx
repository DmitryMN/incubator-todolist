import React from "react";

type buttonChangeProps = {
    name: string
    callBack: () => void
}

export const ButtonChange = (props: buttonChangeProps) => {

    const btnClick = () => {
        props.callBack();
    }

    return(
        <button onClick={btnClick}>{props.name}</button>
    );
}