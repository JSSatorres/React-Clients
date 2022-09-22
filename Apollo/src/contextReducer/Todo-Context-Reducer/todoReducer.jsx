import { TODOTYPES } from "./TYPES";
const {ADD_TODO, DELETE_TODO}= TODOTYPES

export const todoReducer =(state ,action)=>{
    switch (action.type) {
        case ADD_TODO :{         
            return [
                ...state,
                {
                    title:action.payload.title,
                    description:action.payload.description, 
                    active:true
                }
            ]
        }
        case DELETE_TODO :{
            return state.filter((todo)=>todo.title !== action.payload)
            
        }
        default:{
                return state;
            }
        }
    
}

     
