import { v4 as uuidv4 } from "uuid";
import Tasks from "./components/Tasks/Tasks";
import MyClassCom from "./components/MyClassCom";
import { useState } from "react";
import TaskData from "./components/Tasks/TaskData";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TaskForm from "./components/TaskForm";
import Card from "./components/shared/Card";
import AddTask from "./components/Tasks/AddTask";
import SearchTask from "./components/Tasks/SearchTask";

// import React from 'react';  // Not needed when using JSX

export default function App() {
  // "Global" State Hook example
  const [taskList, setTaskList] = useState(TaskData);

  // Search
  const [search, setSearch] = useState("");

  const checkTask = (id) => {
    // checks if id we are getting from checkbox exists in tasklist, then will create new array (...task) where checked: false : (or) task
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const deleteTask = (id) => {
    // creates new array without the selected id
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const addNextTask = (newTask) => {
    newTask.id = uuidv4();
    // to test console.log(newTask)
    // adds newTask to array taskList
    setTaskList([newTask, ...taskList]);
    // console.log(newTask);
  };

  return (
    <div className="App container" style={{ width: "60%", margin: " 0 auto" }}>
      <br />

      <h1>Welcome to Task Manager</h1>

      {/* <TaskForm /> */}

      <br />

      <AddTask handleAdd={addNextTask}></AddTask>

      <SearchTask search={search} setSearch={setSearch} />

      <Tasks
        taskList={taskList.filter((task) =>
          task.title.toLowerCase().includes(search.toLowerCase())
        )}
        handleDelete={deleteTask}
        handleCheck={checkTask}
      />

      <br />

      {/* <MyClassCom />  Class Test*/}
    </div>
  );
}
