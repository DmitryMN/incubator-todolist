import React, { useState } from 'react';
import ToDoList from "./components/ToDoList";
import './App.css';

function App() {

    let tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false}
    ];


    let [tasks, setTasks] = useState(tasks1);

    function removeTask(id: number) {
        console.log(tasks);
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="App">
            <ToDoList title="What to learn" tasks={tasks} remove_task={removeTask}/>
        </div>
    );
}

export default App;
