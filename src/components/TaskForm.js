import React, { useState } from "react";
import TaskData from "./Tasks/TaskData";

export default function TaskForm() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  //   const [taskList, setTaskList] = useState(TaskData);

  const addTask = () => {
    const taskContent = {
      id: Math.floor(Math.random() * 300),
      value: task
    };

    setTaskList([...tasklist, taskContent]);
  };

  const handleSubmit = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <button onClick={addTask}>Add Task</button>

      <br />
      <br />

      <input type="text" id="text" onChange={(e) => handleSubmit(e)} />

      <br />

      <ul style={{ padding: "0" }}>
        {tasklist.map((taskItem) => (
          <li style={{ listStyle: "none" }}>
            {" "}
            <p>{taskItem.value} </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
