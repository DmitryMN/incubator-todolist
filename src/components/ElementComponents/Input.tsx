import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    title: string
    setTitle: (value: string) => void
    addTask: () => void
}

export const Input = ({title, setTitle, addTask, ...props}: InputPropsType) => {

    const onKeyPressAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            addTask();
        }
    }

    const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    return(
        <input value={title} placeholder={"Enter your text"}  onKeyPress={onKeyPressAddTaskHandler} onChange={onChangeTitleHandler}/>
    );
}