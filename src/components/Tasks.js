import React, { useState } from "react";
import Task from "./Task";
// import TaskData from "./TaskData";

export default function Tasks( {text, name, taskList} ) {

// "Local" State Hook example
const [ taskNum, setTaskNum ] = useState(3);

const handleTask = () => {

  setTaskNum((prev) => {

    return prev + 1;
  });
};

if (!taskList) {
   return <p>No Tasks</p>;
}


    return (<div>

         <p>{text} {name}:</p>


        {/* <p className="random">Tomorrow your task is: {taskManager()}</p> */}

        <span className="random">Tomorrow your tasks are: {" "}
        
          {taskList.map((task) => (

            <Task title={task.title} description={task.description} />
          ))}
        </span>

        <button onClick={handleTask}> Add Task </button> 
        <br/> {taskNum}

         </div>);
}

Tasks.defaultProps = {

  name: "Claudio",
};

