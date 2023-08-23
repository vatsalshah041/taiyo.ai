// src/actions/someActions.ts
import { ADD_CONTACT } from './types';

export const addcontact = (contactData: any) => {
  return {
    type: ADD_CONTACT,
    payload: contactData,
  };
};