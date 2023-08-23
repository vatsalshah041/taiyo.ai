// src/reducers/someReducer.ts
import { ADD_CONTACT } from '../actions/types'; // Import the ADD_CONTACT action type

const initialState = {
  cdata: [] // Initial state properties here
};

const someReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTACT:
        
        console.log("action.payload",action.payload);
        console.log(state.cdata);
      return {
        ...state,
        cdata: [...state.cdata, action.payload] // Append new contact data
      };
    default:
      return state;
  }
};

export default someReducer;
