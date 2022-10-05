import {
  GET_USER,
  DELETE_USER,
  ADD_USER,
  EDIT_USER,
  DELETE_ALL,
} from "./types";
import { dataAxios } from "./services";

export const addUser = (data) => ({
  type: ADD_USER,
});

export const deleteOneUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const getAllUser = (data) => {
  //es un dispacth dentro de un dispact y entre medias el Thunk  que hace de midelware en el archivo "store"
  return async (dispatch) => {
    try {
      const apiResult = await dataAxios();
      dispatch({ type: GET_USER, payload: apiResult });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (id) => ({
  type: EDIT_USER,
  payload: id,
});

export const resetUser = () => ({
  type: DELETE_ALL,
});
