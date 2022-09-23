import { useContext } from "react";
import todoContext from "../context/Todo-Context-Reducer/todoContext";

export function useTodo (){
    return useContext(todoContext) 
}