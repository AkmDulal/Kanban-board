import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const Store = configureStore({
  reducer: rootReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;