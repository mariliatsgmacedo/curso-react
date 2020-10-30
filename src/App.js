import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import TaskList from "./components/taskList/TaskList";
import "./styles.css";

let idAcc = 0;
const generateId = () => {
  return idAcc++;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };

    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        return task.id === id ? { ...task, title, state } : task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList
          title="Pendente"
          onAddTask={addTask}
          taskState="Pendente"
          tasks={tasks.filter((item) => item.state === "Pendente")}
          onTaskUpdate={updateTask}
          onDeleteTask = {deleteTask}
        />
        <TaskList
          title="Fazendo"
          onAddTask={addTask}
          taskState="Fazendo"
          tasks={tasks.filter((item) => item.state === "Fazendo")}
          onTaskUpdate={updateTask}
          onDeleteTask = {deleteTask}
        />
        <TaskList
          title="Completo"
          onAddTask={addTask}
          taskState="Completo"
          tasks={tasks.filter((item) => item.state === "Completo")}
          onTaskUpdate={updateTask}
          onDeleteTask = {deleteTask}
        />
      </div>
    </div>
  );
}
