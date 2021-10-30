import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {ButtonChange} from "./ButtonChange";

type FullInputPropsType = {
    placeholder: string
    addTask: (title: string) => void
}


export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState<string>("");

    const addTask = () => {
        if(title) {
            props.addTask(title);
            setTitle("");
        }
    }

    const onKeyPressAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            addTask();
        }
    }

    const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    return(
        <div>
            <input value={title} placeholder={props.placeholder} onKeyPress={onKeyPressAddTaskHandler} onChange={onChangeTitleHandler}/>
            <ButtonChange name={"+"} callBack={addTask}/>
        </div>
    );
}