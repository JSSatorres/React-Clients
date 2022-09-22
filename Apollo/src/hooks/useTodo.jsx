import { useContext } from "react";
import todoContext from "../contextReducer/Todo-Context-Reducer/todoContext";

export function useTodo (){
    return useContext(todoContext) 
}