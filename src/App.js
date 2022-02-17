import logo from './logo.svg';
import './App.css';
import Tasks from './components/Tasks';
import MyClassCom from './components/MyClassCom';
import { useState } from 'react';
import TaskData from './components/TaskData';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

// import React from 'react';  // Not needed when using JSX

export default function App() {

  // "Global" State Hook example
  const [taskList, setTaskList] = useState(TaskData);

  const [todos, setTodos] = useState([]);

  // Add new todo to list
function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([...todos, todo ]);
  }


  return (
    <div className="App">  
    
     <h1>Welcome to the Task Manager</h1>

      {/* passes property tasklist as State */}

      <Tasks text="Hello " taskList={ taskList } /> 

      <TodoForm addTodo={ addTodo } />

      <TodoList todos={ todos } />

      {/* <MyClassCom />  Class Test*/}


    </div>
  );
}


