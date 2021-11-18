import React, {useState} from "react";
import {ButtonChange} from "./components/ElementComponents/ButtonChange";
import {Input} from "./components/ElementComponents/Input";

type AddItemFormType = {
    addItemCallback: (titleItem: string) => void
}

export const AddItemForm = (props: AddItemFormType) => {
    const errorStyle = {color: "red", fontWeight: 400};
    const [inputField, setInputField] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const addItem = () => {
        const trimmedTitle = inputField.trim()
        if(trimmedTitle) {
            props.addItemCallback(trimmedTitle);
        } else {
            setError(true);
        }
        setInputField("");
    }

    const errorMessage = error && <div style={errorStyle}>Title is required!</div>

    return(
        <div>
            <Input inputField={inputField} setInputField={setInputField} addItem={addItem} error={error} setError={setError}/>
            <ButtonChange name={"+"} callBack={addItem}/>
            {errorMessage}
        </div>
    );
};