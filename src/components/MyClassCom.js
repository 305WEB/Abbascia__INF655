//import { render } from "@testing-library/react";
import React, {Component} from "react";


export default class MyClassCom extends Component {

render() {

    const tasks = ["Office Work", "Garden", "Car Repair"];
    let itemList = tasks.map((task, index) => {
        return <li Key={index}> {task}</li>;

    })

    return  <span>{ itemList }</span>

      
    }

}


