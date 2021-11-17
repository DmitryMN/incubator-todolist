import React, {useState} from "react";
import {ButtonChange} from "./ElementComponents/ButtonChange";
import {FilterValuesType, TasksType} from "../App";
import {Input} from "./ElementComponents/Input";
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
    const [inputField, setInputField] = useState<string>("");
    const [error, setError] = useState<boolean>(false)

    const addTask = () => {
        const trimmedTitle = inputField.trim()
        if(trimmedTitle) {
            props.addTask(trimmedTitle, id);
        } else {
            setError(true);
        }
        setInputField("");
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
            {/*<Input inputField={inputField} setInputField={setInputField} addTask={addTask} error={error} setError={setError}/>*/}
            {/*<ButtonChange name={"+"} callBack={addTask}/>*/}
            <AddItemForm id={id} addTask={props.addTask}/>
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