import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskContainer from "./TaskContainer";
import prepareTask from "../thunks/prepareTask";


import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const KanbanBoard = () => {
  const taskStatus = useSelector((state: any) => state.tasks.taskStatus);
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();
  console.log(taskStatus, "taskStatus taskStatus");

  const handleTaskAdd = () => {
    if (taskTitle) {
      dispatch(prepareTask(taskTitle) as any);
      setTaskTitle("");
    } else {}
  };

  const handleEnterKeyDown = (key: any) => {
    if (key === "Enter") {
      handleTaskAdd();
    }
  };
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className='addTask'>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            onKeyDown={(e) => handleEnterKeyDown(e.key)}
            placeholder="Write your task..."
          />
          <button onClick={handleTaskAdd}>Add</button>
        </div>
        <div className='containers'>
          {taskStatus.map((status: any) => (
            <Droppable key={status} droppableId={status}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TaskContainer status={status} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default KanbanBoard;
