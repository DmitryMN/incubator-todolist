import React, { useState } from 'react';
import ToDoList, {TasksType} from "./components/ToDoList";
import {v1} from "uuid";
import './App.css';

export type FilterValuesType = "all" | "active" | "completed";

const App = () => {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: "CSS", isDone: false},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ]);
    const [filter, setFilter] = useState<FilterValuesType>("all");

    let tasksForTodolist = tasks;

    switch(filter) {
        case "active":
            tasksForTodolist = tasks.filter(task => !task.isDone);
            break;
        case "completed":
            tasksForTodolist = tasks.filter(task => task.isDone);
            break;
    }


    function removeTask(id: string) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function addTask(title: string) {
        const newTask: TasksType = {
            id: v1(),
            title: title,
            isDone: true
        }
        setTasks([ newTask, ...tasks]);
    }

    const changeStatus = (taskId: string, isDone: boolean) => {
        console.log(taskId);
        let task = tasks.find(item => item.id === taskId);
        if(task) {
            task.isDone = isDone;
        }
        setTasks([...tasks])
    }

    return (
        <div className="App">
            <ToDoList title="What to learn" tasks={tasksForTodolist} remove_task={removeTask} changeFilter={changeFilter} addTask={addTask} changeStatus={changeStatus}/>
        </div>
    );
}

export default App;
