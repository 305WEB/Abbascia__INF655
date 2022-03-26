import React from "react";
import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react"; // HOOKS
import TaskContext from "../context/TaskContext";

export default function AddTask({ handleAdd }) {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const { addNextTask, updateTask, taskEdit } = useContext(TaskContext);

  // use Effect

  useEffect(() => {
    // in TaskContext if taskEdit useState object edit (boolean = true)
    if (taskEdit.edit === true) {
      // set useState setTitle
      setTitle(taskEdit.task.title);
      // set useState setDescription (line 9 above)
      setDescription(taskEdit.task.description);
    }
  }, [taskEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length !== 0 && description.trim().length > 3) {
      const newTask = {
        title: title,
        description: description
      };

      // taskEdit = useState in TaskContext

      if (taskEdit.edit === true) {
        updateTask(taskEdit.task.id, newTask);
      } else {
        addNextTask(newTask);
      }

      // addNextTask(newTask);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> Add a Task to List</h2>
        <br />
        <div>
          <input
            className="inputbox"
            onChange={handleTitleChange}
            type="text"
            placeholder="    Task Title"
            value={title}
          />
          <input
            className="inputbox"
            onChange={handleDescriptionChange}
            type="text"
            placeholder="Description (+3 Chars)"
            value={description}
          />
        </div>
        <br /> <br />
        <button className="btn">Add Task</button>
      </form>
    </Card>
  );
}
