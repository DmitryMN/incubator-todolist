import React from "react";
import {FilterValuesType} from "../../App";

type buttonChangeProps = {
    name: string
    callBack: () => void
    className?: string
}

export const ButtonChange = (props: buttonChangeProps) => {

    const btnClick = () => {
        props.callBack();
    }

    return(
        <button className={props.className} onClick={btnClick}>{props.name}</button>
    );
}