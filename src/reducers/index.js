import {ADD_REMINDER,DELETE_REMINDER} from '../constants'
import {bake_cookie , read_cookie} from  'sfcookies';

const reminder = (action) => {
  return {
    text : action.payload.text,
    dueDate : action.payload.dueDate,
    id : Math.random()
  }
}

const removeById = (state = [] , id) => {
  console.log('id',id);
  const reminders = state.filter(reminder => {
      return reminder.id !== id ;
  })
  console.log('removeById' ,reminders);
   return reminders;
}

const reminders = (state =[] , action) => {
  let rem = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
      rem = [...state ,  reminder(action)];
    //  console.log('rem' , rem);
     bake_cookie('reminders' ,rem );
      return rem;
   case DELETE_REMINDER:
        rem =removeById(state , action.payload);
        bake_cookie('reminders' ,rem );
       return rem;
    default:
      return state;

  }
}

export default reminders;
