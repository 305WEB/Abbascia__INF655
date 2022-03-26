import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskData from "../Tasks/TaskData";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  //Brings in data from TaskDatea component
  const [taskList, setTaskList] = useState(TaskData);

  // To edit tasks
  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false
  });

  // ----------------------------------- FUNTIONS

  // To add New Task
  const addNextTask = (newTask) => {
    newTask.id = uuidv4();
    // to test console.log(newTask)
    // adds newTask to array taskList
    setTaskList([newTask, ...taskList]);
    // console.log(newTask);
  };

  // To edit task

  const editTask = (task) => {
    setTaskEdit({ task, edit: true });
  };

  // To check the Task
  const checkTask = (id) => {
    // checks if id we are getting from checkbox exists in tasklist, then will create new array (...task) where checked: false : (or) task
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  // To Delete task
  const deleteTask = (id) => {
    // creates new array without the selected id
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // To Edit Task (upd= updated value)
  const updateTask = (id, updTask) => {
    setTaskList(
      taskList.map((task) =>
        // checks "id", then combines add new data to task
        task.id === id ? { ...task, ...updTask } : task
      )
    );
  };

  return (
    // all needed functions can be passed globally from here
    <TaskContext.Provider
      value={{
        taskList,
        taskEdit,
        checkTask,
        deleteTask,
        addNextTask,
        editTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
