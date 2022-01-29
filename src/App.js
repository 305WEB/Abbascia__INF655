import logo from './logo.svg';
import './App.css';
// import React from 'react';  // Not neede when using JSX

function App() {

  const myName = "Claudio";


  const toDoList = [
    {
      id: 1,
      title: "Office Work",
      description: "Setup GITHUB"
    },

    {
      id: 2,
      title: "Design Work",
      description: "Setup oFFICE"
    },
    {
      id: 3,
      title: "Tech Work",
      description: "Setup oFFICE"
    },

  ];

const taskManager = () => {
  const init = Math.floor(Math.random() * 3);
  return toDoList[init].title;

};

  return (
    <div className="App">  
    
     <h1>First React App</h1>

     {/* <p>Hello: {name},tomorrow: {tasks[1].title}</p> */}

     <p className="random">Hello: {myName},tomorrow your task is: {taskManager()}</p>

    </div>
  );
}

// function App() { // Example not using JSX

// return React.createElement("div", {id: "hello", className: "Test"}, React.createElement("h1", null, "Hello World"));

// }

export default App;
