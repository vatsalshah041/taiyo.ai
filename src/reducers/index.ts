// src/reducers/index.ts
import { combineReducers } from 'redux';
import someReducer from './someReducer'; // Create this file next

const rootReducer = combineReducers({
  someReducer,
  // Add more reducers here
});

export default rootReducer;
