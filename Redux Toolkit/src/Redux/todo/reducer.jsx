import {INITIAL_STATE} from "./state";
import {
  GET_TODO ,
  DELETE_TODO ,
  ADD_TODO ,
  DELETE_ALL,
  EDIT_TODO ,
} from "./types";


const todo = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case ADD_TODO :
      return [...state, action.payload];

    case DELETE_TODO :
      const newData = state.filter((el) => el.title !== action.payload);
      return newData

    case GET_TODO :
      return action.payload;

    case EDIT_TODO :
      return newData

    case DELETE_ALL:
      return [];

    default:
      return state;
  }
};

export default todo;
