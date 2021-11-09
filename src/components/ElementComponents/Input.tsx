import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    title: string
    setTitle: (value: string) => void
    addTask: () => void
    error: boolean
    setError: (value: boolean) => void
}

export const Input = ({title, setTitle, addTask, error, setError}: InputPropsType) => {

    const classNameError = error ? "error" : ""

    const onKeyPressAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            addTask();
        }
    }

    const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setTitle(event.currentTarget.value);
    }

    return(
        <input className={classNameError} value={title} placeholder={"Enter your text"}  onKeyPress={onKeyPressAddTaskHandler} onChange={onChangeTitleHandler}/>
    );
}