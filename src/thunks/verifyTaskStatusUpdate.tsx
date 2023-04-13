import { taskStatusUpdate } from '../Redux/TaskBoard';
import { toast } from "react-toastify";

const verifyTaskStatusUpdate = (taskUpdateData: any) => {


  return (dispatch: any, getState: any) => {
    const { tasksList } = getState().tasks;
    dispatch(taskStatusUpdate(taskUpdateData));

 
    // ####### for restricting backward move #########
    // const currentStatus = tasksList.find(
    //   (task: any) => task.id === taskUpdateData.taskId
    // ).status;
    // if (
    //   currentStatus === taskUpdateData.status ||
    //   taskUpdateData.status === "done" ||
    //   currentStatus === "todo"
    // ) {
    //   dispatch(taskStatusUpdate(taskUpdateData));
    // } else {
    //   toast.error("Not allowed....", {
    //     position: toast.POSITION.BOTTOM_RIGHT,
    // });
    // }
  };
};

export default verifyTaskStatusUpdate;
