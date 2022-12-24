import {
  GET_TODO,
  DELETE_TODO,
  ADD_TODO,
  EDIT_TODO,
  DELETE_ALL,
} from "./types";
import { dataApi } from "../../api/dataApi"

export const addTodo = (data) => ({
  type: ADD_TODO,
  payload: data
});

export const deleteOneTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const getAllTodo= () => {
  // es un dispacth dentro de un dispact y entre medias el Thunk  que hace de midelware en el archivo "store"
  return async (dispatch) => {
    try {
      const apiResult = await dataApi();
      dispatch({ type: GET_TODO, payload: apiResult });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editTodo = (id) => ({
  type: EDIT_TODO,
  payload: id,
});

export const resetTodo = () => ({
  type: DELETE_ALL,
});
