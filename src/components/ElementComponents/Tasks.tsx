import React, {ChangeEvent} from "react";
import {ButtonChange} from "./ButtonChange";
import {TasksType} from "../../App";
import {EditableSpan} from "./EditableSpan";

type TasksPropsType = {
    todoListId: string
    task: TasksType
    onRemoveTaskHandler: (tId: string) => void
    changeStatus: (taskId: string, isDone: boolean, todoListID: string) => void
    changeTitleTasks: (taskId: string, title: string, todoListID: string) => void
}

const Tasks = ({todoListId, task, onRemoveTaskHandler, changeStatus, changeTitleTasks}: TasksPropsType) => {

    const onChangeTitleTaskCallback = (title: string) => {
        changeTitleTasks(task.id, title, todoListId);
    }

    const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatus(task.id, e.currentTarget.checked, todoListId)
    }
    return(
        <li key={task.id} className={task.isDone ? "is_done" : ""} >
            <input type="checkbox" checked={task.isDone} onChange={onChangeStatusHandler} />
            <EditableSpan title={task.title} changeTitleCallback={onChangeTitleTaskCallback}/>
            <ButtonChange name={"x"} callBack={() => onRemoveTaskHandler(task.id)} />
        </li>
    );
}

export default Tasks;