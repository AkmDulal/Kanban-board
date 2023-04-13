import { addTask} from '../Redux/TaskBoard';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
const prepareTask = (taskTitle: any) => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
    const { tasksList } = getState().tasks;

    const titleExist = tasksList.find(
      (task: any) => task.title.toLowerCase() === taskTitle.toLowerCase()
    );
    if (!titleExist) {
      const newTask = {
        id: Date.now(),
        title: taskTitle,
        status: "todo",
      };
      dispatch(addTask(newTask));
    } else {
    }
  };
};

export default prepareTask;

