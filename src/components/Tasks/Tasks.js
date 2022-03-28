import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import Task from "./Task";
import SearchTask from "../Tasks/SearchTask";
// import TaskData from "./TaskData";

export default function Tasks() {
  // Uses TaskList from TaskContext instead of passing it throough Task (param)
  const { taskList } = useContext(TaskContext);

  // Search
  const [search, setSearch] = useState("");

  const result = taskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!result || result.length === 0) {
    return <p>No Tasks</p>;
  }

  return (
    <div>
      <SearchTask search={search} setSearch={setSearch} />

      <div>
        {result.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            checked={task.checked}
            // passes property to Task component (prop)
            task={task}
          />
        ))}
      </div>
    </div>
  );
}

// Tasks.defaultProps = {

//   name: "Claudio",
// };
