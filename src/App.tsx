import React, { useState } from 'react';
import ToDoList from "./components/ToDoList";
import {v1} from "uuid";
import './App.css';

export type FilterValuesType = "all" | "active" | "completed";

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

type TodoListType = {
   id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key: string]: Array<TasksType>
}

const App = () => {
    //BLL
    const todoListID_1 = v1();
    const todoListID_2 = v1();
    const [todoLists, setTodoLists] = useState<Array<TodoListType>>([
        { id: todoListID_1, title: "What to learn", filter: "all" },
        { id: todoListID_2, title: "What to by", filter: "all" }
    ]);

    let [tasksState, setTasksState] = useState<TasksStateType>({
        [todoListID_1]: [
            {id: v1(), title: "CSS", isDone: false},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false}
        ],
        [todoListID_2]: [
            {id: v1(), title: "Meat", isDone: false},
            {id: v1(), title: "Beer", isDone: false},
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "Bread", isDone: false}
        ]
    });

    // let [tasks, setTasks] = useState<Array<TasksType>>([
    //     {id: v1(), title: "CSS", isDone: false},
    //     {id: v1(), title: "JS", isDone: false},
    //     {id: v1(), title: "React", isDone: false},
    //     {id: v1(), title: "Redux", isDone: false}
    // ]);
    // const [filter, setFilter] = useState<FilterValuesType>("all");

    // let tasksForTodolist = tasks;
    //
    // switch(filter) {
    //     case "active":
    //         tasksForTodolist = tasks.filter(task => !task.isDone);
    //         break;
    //     case "completed":
    //         tasksForTodolist = tasks.filter(task => task.isDone);
    //         break;
    // }

    const removeTodoList = (todoListID: string) => {
        setTodoLists(todoLists.filter(todoList => todoList.id !== todoListID));
        delete tasksState[todoListID];
    }

    function removeTask(id: string, todoListID: string) {
        setTasksState({...tasksState, [todoListID]: tasksState[todoListID].filter(task => task.id !== id)})
    }

    function changeFilter(filter: FilterValuesType, todoListID: string) {
        setTodoLists(todoLists.map(todoList => todoList.id === todoListID ? {...todoList, filter} : todoList));
    }

    function addTask(title: string, todoListID: string) {
        const newTask: TasksType = {
            id: v1(),
            title: title,
            isDone: true
        }
        setTasksState({...tasksState, [todoListID]: [newTask, ...tasksState[todoListID]]})
    }

    const changeStatus = (taskId: string, isDone: boolean, todoListID: string) => {
        const task =  tasksState[todoListID].find(task => task.id === taskId)
        if(task) {
            task.isDone = isDone;
        }
        setTasksState({...tasksState, [todoListID]: [...tasksState[todoListID]]});
    }

    const todoListComponents = todoLists.map(todoList => {
        let tasksForTodolist: Array<TasksType> = tasksState[todoList.id];
        switch(todoList.filter) {
            case "active":
                tasksForTodolist = tasksState[todoList.id].filter(task => !task.isDone);
                break;
            case "completed":
                tasksForTodolist = tasksState[todoList.id].filter(task => task.isDone);
                break;
        }

        return(
            <ToDoList
                key={todoList.id}
                id={todoList.id}
                title={todoList.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus={changeStatus}
                filter={todoList.filter}
                removeTodoList={removeTodoList}
            />
        );
    })

    return (
        <div className="App">
            {todoListComponents}
        </div>
    );
}

export default App;
