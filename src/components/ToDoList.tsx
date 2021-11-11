import React, {ChangeEvent, useState} from "react";
import {ButtonChange} from "./ElementComponents/ButtonChange";
import {FilterValuesType} from "../App";
import {Input} from "./ElementComponents/Input";
import {TasksType} from "../App";


type propsToDoListType = {
    id: string
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string, todoListID: string) => void
    changeFilter: (value: FilterValuesType, todoListID: string) => void
    addTask: (title: string, todoListID: string) => void
    changeStatus: (taskId: string, isDone: boolean, todoListID: string) => void
    filter: FilterValuesType
    removeTodoList: (todoListID: string) => void
}

const ToDoList = (props: propsToDoListType) => {
    const [title, setTitle] = useState<string>("");
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimmedTitle = title.trim()
        if(trimmedTitle) {
            props.addTask(trimmedTitle, props.id);
        } else {
            setError(true);
        }
        setTitle("");
    }

    const onRemoveTaskHandler = (tId: string) => {
        props.removeTask(tId, props.id);
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id);
    }

    const classNameAll = props.filter === "all" ? "active-filter" : "";
    const classNameActive = props.filter === "active" ? "active-filter" : "";
    const classNameCompleted = props.filter === "completed" ? "active-filter" : "";

    return(
        <div>
            <h3>
                {props.title}
                <ButtonChange name={"x"} callBack={() => props.removeTodoList(props.id)}/>
            </h3>
            <Input title={title} setTitle={setTitle} addTask={addTask} error={error} setError={setError}/>
            <ButtonChange name={"+"} callBack={addTask}/>
            <ul>
                {props.tasks.map(elem => {
                    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeStatus(elem.id, e.currentTarget.checked, props.id)
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
