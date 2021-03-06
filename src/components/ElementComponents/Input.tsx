import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    inputField: string
    setInputField: (value: string) => void
    addItem: () => void
    error: boolean
    setError: (value: boolean) => void
}

export const Input = ({inputField, setInputField, addItem, error, setError}: InputPropsType) => {

    const classNameError = error ? "error" : ""

    const onKeyPressAddTaskHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            addItem();
        }
    }

    const onChangeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false);
        setInputField(event.currentTarget.value);
    }

    return(
        <input className={classNameError} value={inputField} placeholder={"Enter your text"}  onKeyPress={onKeyPressAddTaskHandler} onChange={onChangeTitleHandler}/>
    );
}