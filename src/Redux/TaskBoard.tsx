import { createSlice } from '@reduxjs/toolkit';
import { getItemsByKey, setItemsByKey } from '../utils/localDB';

const initialState = {
  taskStatus: ["todo", "in-progress", "done"],
  isDragging: false,
  tasksList: getItemsByKey('tasksList'),
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTasksList = [...state.tasksList, action.payload];
      setItemsByKey('tasksList', newTasksList);
      state.tasksList = newTasksList;
    },
    setDraggingStatus: (state, action) => {
      state.isDragging = action.payload;
    },
    taskStatusUpdate: (state, action) => {
      const { taskId, status, position } = action.payload;
      const updatedTaskList = [...state.tasksList];
      const taskIndex = updatedTaskList.findIndex((task) => task.id === taskId);

      updatedTaskList[taskIndex].status = status;
      if (position !== null) {
        const currentItem = updatedTaskList.splice(taskIndex, 1)[0];
        updatedTaskList.splice(position, 0, currentItem);
      }

      setItemsByKey('tasksList', updatedTaskList);
      state.tasksList = updatedTaskList;
      state.isDragging = false;
    },
    removeTask: (state, action) => {
      const remainingTasks = state.tasksList.filter((task: any) => task.id !== action.payload);
      setItemsByKey('tasksList', remainingTasks);
      state.tasksList = remainingTasks;
    },
  },
});

export const { addTask, setDraggingStatus, taskStatusUpdate, removeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
