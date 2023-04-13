import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDraggingStatus, removeTask } from '../Redux/TaskBoard';
import { BiTrash } from "react-icons/bi";

const TaskCard = forwardRef((props: any, ref: any) => {
  const dispatch = useDispatch();
  const handleDragStart = (e: any) => {
    e.dataTransfer.setData("text", props.task.id);
    dispatch(setDraggingStatus(true));
  };
  const handleDragEnter = (position: any) => (ref.current = position);
  const handleDragLeave = () => (ref.current = null);

  return (
    <div
      className='taskCard'
      draggable
      onDragEnter={() => handleDragEnter(props.index)}
      onDragLeave={handleDragLeave}
      onDragStart={handleDragStart}
      onDragEnd={() => dispatch(setDraggingStatus(false))}
    >
      <span onClick={() => dispatch(removeTask(props.task.id))}> <BiTrash /></span>
      {props.task.title}
    </div>


  )
})

export default TaskCard