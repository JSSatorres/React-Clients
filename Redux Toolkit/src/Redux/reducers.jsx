import { combineReducers } from "redux";
import todo from "./todo/reducer";

/* import thunk from 'redux-thunk'; */

const reducers = combineReducers({
  todo,
  // aqui es donde se juntan todos los reducers
});

export default reducers;
