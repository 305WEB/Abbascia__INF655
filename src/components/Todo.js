import React from "react";

export default function Todo({ todo }) {

    return (

        <div style={{ display: "flex" }}> 

          <input type="checkbox" />
        
          <li style={{ 
              color: "blue",
              textDecoration: todo.completed ? "line-through" : null
          }}> 
          
          {todo.task} </li>
          
          <button>X</button>
          
        </div> // JSX must have a parent element
    );

}