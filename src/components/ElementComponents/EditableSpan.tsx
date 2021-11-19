import React, { useState, ChangeEvent} from "react";

type EditableSpanPropsType = {
    title: string
    changeTitleCallback: (title: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType ) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const onDoubleClickHandler = () => {
        setEditMode(true);
    }

    const onBlurHandler = () => {
        setEditMode(false);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTitleCallback(e.currentTarget.value);
    }

    return(
        editMode ? <input onChange={onChangeHandler} onBlur={onBlurHandler}></input> : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    );
}