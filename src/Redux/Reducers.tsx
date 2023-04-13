import { combineReducers } from 'redux';
import tasksSlice from './TaskBoard';

const rootReducer = combineReducers({
    tasks: tasksSlice,
});

export default rootReducer;