import React from 'react';
import ToDoList from "./components/ToDoList";
import './App.css';

function App() {
  return (
      <div className="App">
        <ToDoList/>
        <ToDoList/>
        <ToDoList/>
      </div>
  );
}

export default App;
