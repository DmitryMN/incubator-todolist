import React from "react";
import {FilterValuesType} from "../App";

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type propsToDoListType = {
    title: string,
    tasks: Array<TasksType>,
    remove_task: (id: number) => void,
    changeFilter: (value: FilterValuesType) => void
}

function ToDoList(props: propsToDoListType) {
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(elem => <li key={elem.id}><input type="checkbox" checked={elem.isDone}/>
                    <span>{elem.title}</span>
                    <button onClick={() => {props.remove_task(elem.id)}}>x</button>
                </li>)}
            </ul>
            <div>
                <button onClick={() => {props.changeFilter("all")}}>All</button>
                <button onClick={() => {props.changeFilter("active")}}>Active</button>
                <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    );
}

export default ToDoList;
