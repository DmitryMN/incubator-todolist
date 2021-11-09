import React, {ChangeEvent, useState} from "react";
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
    changeStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
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

    const classNameAll = props.filter === "all" ? "active-filter" : "";
    const classNameActive = props.filter === "active" ? "active-filter" : "";
    const classNameCompleted = props.filter === "completed" ? "active-filter" : "";

    return(
        <div>
            <h3>{props.title}</h3>
            <Input title={title} setTitle={setTitle} addTask={addTask} />
            <ButtonChange name={"+"} callBack={addTask}/>
            <ul>
                {props.tasks.map(elem => {
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatus(elem.id, e.currentTarget.checked)
                    }
                    return <li className={elem.isDone ? "is_done" : ""} key={elem.id}><input type="checkbox" checked={elem.isDone} onChange={onChangeStatusHandler} />
                    <span>{elem.title}</span>
                    <ButtonChange name={"x"} callBack={() => onRemoveTaskHandler(elem.id)} />
                </li>})}
            </ul>
            <div>
                <ButtonChange name={"all"} callBack={() => changeFilterHandler("all")} className={classNameAll} />
                <ButtonChange name={"active"} callBack={() => changeFilterHandler("active")} className={classNameActive} />
                <ButtonChange name={"completed"} callBack={() => changeFilterHandler("completed")} className={classNameCompleted}/>
            </div>
        </div>
    );
}

export default ToDoList;
