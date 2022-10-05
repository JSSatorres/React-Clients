import {INITIAL_STATE} from "./state";
import {
  GET_USER,
  DELETE_USER,
  ADD_USER,
  DELETE_ALL,
  EDIT_USER,
} from "./types";

const {db} = INITIAL_STATE

const reducer = (state = db, action) => {
  switch (action.type) {
    case ADD_USER:
      return db;

    case DELETE_USER:
      const newData = state.filter((el) => el.id !== action.payload);
      return newData

    case GET_USER:
      return action.payload.data.data;

    case EDIT_USER:
      return newData

    case DELETE_ALL:
      return db;

    default:
      return state;
  }
};

export default reducer;
