import React, {useState} from "react";
import {ButtonChange} from "./ElementComponents/ButtonChange";
import {FilterValuesType, TasksType} from "../App";
import Tasks from "./ElementComponents/Tasks";
import {AddItemForm} from "../AddItemForm";


type PropsToDoListType = {
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

const ToDoList = ({id, title, filter, ...props}: PropsToDoListType) => {

    const addItemCallback = (titleItem: string) => {
        props.addTask(titleItem, id);
    }

    const onRemoveTaskHandler = (tId: string) => {
        props.removeTask(tId, id);
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, id);
    }

    const classNameAll = filter === "all" ? "active-filter" : "";
    const classNameActive = filter === "active" ? "active-filter" : "";
    const classNameCompleted = filter === "completed" ? "active-filter" : "";


    let tasksForTodolist: Array<TasksType> = props.tasks;
    switch(filter) {
        case "active":
            tasksForTodolist = props.tasks.filter(task => !task.isDone);
            break;
        case "completed":
            tasksForTodolist = props.tasks.filter(task => task.isDone);
            break;
    }

    return(
        <div>
            <h3>
                {title}
                <ButtonChange name={"x"} callBack={() => props.removeTodoList(id)}/>
            </h3>
            <AddItemForm addItemCallback={addItemCallback}/>
            <ul>
                {tasksForTodolist.map(task => {
                    return(
                        <Tasks todoListId={id} task={task} onRemoveTaskHandler={onRemoveTaskHandler} changeStatus={props.changeStatus}/>
                    );
                })}
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