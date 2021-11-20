import React, { useState, ChangeEvent} from "react";

type EditableSpanPropsType = {
    title: string
    changeTitleCallback: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType ) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [inputField, setInputField] = useState<string>("");

    const onClickHandler = () => {
        setEditMode(true);
        setInputField(props.title)
    }

    const onBlurHandler = () => {
        setEditMode(false);
        props.changeTitleCallback(inputField);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputField(e.currentTarget.value.trim());
    }

    return(
        editMode ? <input autoFocus={true} value={inputField} onChange={onChangeHandler} onBlur={onBlurHandler}></input>
            : <span>{props.title}
                <button onClick={onClickHandler}>edit</button></span>

    );
}