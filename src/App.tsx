import React from 'react';
import ToDoList from "./components/ToDoList";
import './App.css';

function App() {

    let tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: true}
    ];

    return (
        <div className="App">
            <ToDoList title="What to learn"/>
            <ToDoList title="Movies"/>
        </div>
    );
}

export default App;
