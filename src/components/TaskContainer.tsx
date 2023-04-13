import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import verifyTaskStatusUpdate from "../thunks/verifyTaskStatusUpdate";
import TaskCard from "./TaskCard";
const TaskContainer = (props: any) => {
  const dispatch = useDispatch();
  const { tasksList } = useSelector((state: any) => state.tasks);
  const dragOverItem = useRef(null);
  const status = props?.status
  const handleDragOver = (e: any) => e.preventDefault();
  const handleDrop = (e: any) => {
    e.preventDefault();
    const taskId = +e.dataTransfer.getData("text");
    dispatch(
      verifyTaskStatusUpdate({
        taskId,
        status,
        position: dragOverItem.current,
      }) as any
    );
  };
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className='taskContainer'
    >
      <h3 className='status'>{status}</h3>
      {tasksList.map(
        (task: any, index: any) =>
          task.status === status && (
            <TaskCard key={task.id} task={task} index={index} ref={dragOverItem} />
          )
      )}
    </div>
  );
};

export default TaskContainer;
