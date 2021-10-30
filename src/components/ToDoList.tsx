import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {ButtonChange} from "./ElementComponents/ButtonChange";
import {FilterValuesType} from "../App";
import {Input} from "./ElementComponents/Input";

export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}

type propsToDoListType = {
    title: string,
    tasks: Array<TasksType>,
    remove_task: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
}

const ToDoList = (props: propsToDoListType) => {
    const [title, setTitle] = useState<string>("");

    const addTask = () => {
        if(title) {
            props.addTask(title);
            setTitle("");
        }
    }

    const onRemoveTaskHandler = (tId: string) => {
        props.remove_task(tId);
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value);
    }

    return(
        <div>
            <h3>{props.title}</h3>
            <Input title={title} setTitle={setTitle} addTask={addTask}/>
            <ButtonChange name={"+"} callBack={addTask}/>
            <ul>
                {props.tasks.map(elem => {
                    return <li key={elem.id}><input type="checkbox" checked={elem.isDone}/>
                    <span>{elem.title}</span>
                    <ButtonChange name={"x"} callBack={() => onRemoveTaskHandler(elem.id)}/>
                </li>})}
            </ul>
            <div>
                <ButtonChange name={"all"} callBack={() => changeFilterHandler("all")}/>
                <ButtonChange name={"active"} callBack={() => changeFilterHandler("active")}/>
                <ButtonChange name={"completed"} callBack={() => changeFilterHandler("completed")}/>
            </div>
        </div>
    );
}

export default ToDoList;
