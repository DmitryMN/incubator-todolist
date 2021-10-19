import React, { useState } from 'react';
import ToDoList, {TasksType} from "./components/ToDoList";
import './App.css';

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false}
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


    function removeTask(id: number) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    return (
        <div className="App">
            <ToDoList title="What to learn" tasks={tasksForTodolist} remove_task={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
