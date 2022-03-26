import React from "react";
import AddTask from "../Tasks/AddTask";
import Tasks from "../Tasks/Tasks";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.css";
import Navbar from "../Navbar/Navbar";

export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <br />

        <AddTask />
        <h2 className="card">Task List:</h2>
        <Tasks />

        <br />
      </div>
      <Footer />
    </>
  );
}
