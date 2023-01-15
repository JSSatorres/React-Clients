import { useReducer } from "react"
import  todoContext  from "./todoContext"
import { todoReducer } from "./todoReducer"

export function TodoProvider ({children}){
    const [todos, dispatch] = useReducer(todoReducer, []) 
    
    const value ={
        todos,
        dispatch
    }

    return(
        <todoContext.Provider value={value}>
            {children}
        </todoContext.Provider>
    )
}