import { useContext } from "react";
import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Card from "../shared/Card";
import TaskContext from "../context/TaskContext";

export default function Task({ id, title, description, checked, task }) {
  // Passing all functions from TaskContext
  const { deleteTask, checkTask, editTask } = useContext(TaskContext);

  return (
    <Card>
      <input
        className="item"
        type="checkbox"
        checked={checked}
        onChange={() => {
          checkTask(id);
        }}
      ></input>

      <p
        style={checked ? { textDecoration: "line-through" } : null}
        className="text-display"
      >
        {" "}
        {title}
      </p>

      <p style={checked ? { textDecoration: "line-through" } : null}>
        {" "}
        - {description}{" "}
      </p>

      <button
        className="edit"
        onClick={() => {
          editTask(task);
        }}
      >
        <FaEdit />
      </button>

      <button
        className="delete"
        onClick={() => {
          deleteTask(id);
        }}
      >
        <FaTrashAlt />
      </button>
    </Card>
  );
}

Task.propTypes = {
  // id is string b/c uuidv4 uses --
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
