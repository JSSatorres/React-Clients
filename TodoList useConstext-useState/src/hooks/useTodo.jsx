import { useContext } from "react";
import todoContext from "../context/Todo-Context/todoContext";

export function useTodo (){
    return useContext(todoContext) 
}