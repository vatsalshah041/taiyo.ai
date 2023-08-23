// src/actions/someActions.ts
import { ADD_CONTACT } from './types';

export const someAction = (data: any) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};