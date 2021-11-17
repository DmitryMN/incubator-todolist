import React, {useState} from "react";
import {ButtonChange} from "./components/ElementComponents/ButtonChange";
import {Input} from "./components/ElementComponents/Input";

type AddItemFormType = {
    id: string
    addTask: (title: string, todoListID: string) => void
}

export const AddItemForm = ({id, ...props}: AddItemFormType) => {
    const errorStyle = {color: "red", fontWeight: 400};
    const [inputField, setInputField] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const addTask = () => {
        const trimmedTitle = inputField.trim()
        if(trimmedTitle) {
            props.addTask(trimmedTitle, id);
        } else {
            setError(true);
        }
        setInputField("");
    }

    const errorMessage = error && <div style={errorStyle}>Title is required!</div>

    return(
        <div>
            <Input inputField={inputField} setInputField={setInputField} addTask={addTask} error={error} setError={setError}/>
            <ButtonChange name={"+"} callBack={addTask}/>
            {errorMessage}
        </div>
    );
}