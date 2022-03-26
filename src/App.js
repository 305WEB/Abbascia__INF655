import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./components/context/TaskContext";
import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
import TaskList from "./components/pages/TaskList";
import Tasks from "./components/Tasks/Tasks";
import Users from "./components/User/Users";

// import React from 'react';  // Not needed when using JSX

export default function App() {
  return (
    <>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tasklist" element={<TaskList />} />
            <Route path="/users/:id/:name" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </>
  );
}
