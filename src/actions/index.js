import {ADD_REMINDER,DELETE_REMINDER} from '../constants';

export const addReminder = (text , dueDate) => {
  const action = {
    type :ADD_REMINDER
    , payload :  {
      text : text ,
      dueDate : dueDate
    }
  }
  console.log('action in addReminder' , action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type : DELETE_REMINDER,
    payload : id
  }
  console.log('action in  deleteReminder');
  return action;
}
