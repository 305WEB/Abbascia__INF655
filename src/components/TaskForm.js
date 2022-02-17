import { useState } from "react";


const [task, setTask] = useState();

export default function TaskForm (input) {


return (

    <input 
        type="text"
        value={this.state.inputVal} 
        onChange={(e) => {this.setState({inputVal: e.target.value})}} />

);
}