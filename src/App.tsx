import './App.css'
import { ToastContainer } from "react-toastify";
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
