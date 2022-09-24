import { combineReducers } from "redux";
import users from "./users/reducer";

/* import thunk from 'redux-thunk'; */

const reducers = combineReducers({
  users,
  // aqui es donde se juntan todos los reducers
});

export default reducers;
