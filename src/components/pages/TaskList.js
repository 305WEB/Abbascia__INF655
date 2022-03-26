import react from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import Tasks from "../Tasks/Tasks";

export default function TaskList() {
  return (
    <>
      <Header />

      <Navbar />

      <div className="container">
        <br />
        <br />

        <h1 className="card">Task List</h1>
        <Tasks />

        <br />
      </div>
      <Footer />
    </>
  );
}
