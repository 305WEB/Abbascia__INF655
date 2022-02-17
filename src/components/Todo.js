import React from "react";

export default function Todo({ todo }) {

    return (

        <div style={{ display: "flex" }}> 

          {/* <input type="checkbox" /> */}
        
          <li>  {todo.task} </li>
          
          {/* <button>X</button> */}
          
        </div> // JSX must have a parent element
    );

}