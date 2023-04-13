import { Key, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToastContainer } from "react-toastify";
import { Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import KanbanBoard from "./components/KanbanBoard";
function App() {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  return (
    <div className="App">
      <ToastContainer />
      <KanbanBoard />
    </div>
  )
}

export default App
