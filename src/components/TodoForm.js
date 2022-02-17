import React, { useState } from "react";
import  {v4 as uuid} from "uuid";

export default function TodoForm( {addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    // (e) contains the event target value from user
    function handleTaskInputChange(e) {

        setTodo({ ...todo, task: e.target.value });
      }


    // handle submit
    function handleSubmit (e) {

        // prevents browser from refreshing
        e.preventDefault();

        // Only gets call in field is empty
        if (todo.task.trim()) {

           addTodo( { ...todo, id: uuid.v4() } );

           // reset task input
           setTodo( { ...todo, task: "" });

        }
    }

  return (  
    <form onSubmit={handleSubmit}>
        <input 
            name="task"
            type="text" 
            value={ todo.task } // This value is what user will update each time
            onChange={handleTaskInputChange} 
            />

        <button type="submit">Submit</button>

    </form>
    );
}