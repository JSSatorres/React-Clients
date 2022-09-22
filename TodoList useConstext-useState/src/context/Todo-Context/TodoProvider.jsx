import { useState } from "react"
import  todoContext  from "./todoContext"

export function TodoProvider ({children}){
    const [todos, setTodos] = useState([])
    
    const addTodo = (newTodo)=>{
        setTodos([...todos,newTodo])
    }

    const deleteTodo=(todoToRemove)=>{
        const newTodos = todos.filter((todos) => todos.title !== todoToRemove);
        setTodos(newTodos)
    }

    
    const value= {
        todos,
        addTodo,
        deleteTodo
    }

    return(
        <todoContext.Provider value={value}>
            {children}
        </todoContext.Provider>
    )
}