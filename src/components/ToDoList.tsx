import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "../App";

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

function ToDoList(props: propsToDoListType) {
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


    const changeFilterAllHandler = () => props.changeFilter("all");
    const changeFilterActiveHandler = () => props.changeFilter("active");
    const changeFilterCompletedHandler = () => props.changeFilter("completed");

    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title} placeholder="Enter your text"
                       onKeyPress={onKeyPressAddTaskHandler}
                       onChange={onChangeTitleHandler}/>
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map(elem => {
                    const onRemoveTaskHandler = () => props.remove_task(elem.id);
                    return <li key={elem.id}><input type="checkbox" checked={elem.isDone}/>
                    <span>{elem.title}</span>
                    <button onClick={onRemoveTaskHandler}>x</button>
                </li>})}
            </ul>
            <div>
                <button onClick={changeFilterAllHandler}>All</button>
                <button onClick={changeFilterActiveHandler}>Active</button>
                <button onClick={changeFilterCompletedHandler}>Completed</button>
            </div>
        </div>
    );
}

export default ToDoList;
