import React, { useState } from "react";
import { useTodo } from "../../hooks/useTodo";
import { TitleH6,StyledFormWrapper,StyledDivForm ,StyledButton} from "../../componentsStyled";

const CreateTodo = () => {
  const INITIAL_STATE =
      {
        title:"",
        description:""
      }   

  const [newTodo, setNewTodo] = useState(INITIAL_STATE)
  const {addTodo}= useTodo()

  const handleChange = (e) => {
    setNewTodo({...newTodo,[e.target.name]:e.target.value});
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo); 
    setNewTodo("")    
  };  

  return (
    <>
      <TitleH6>CreateTodo</TitleH6>
      <StyledFormWrapper onSubmit={handleSubmit}>
        <StyledDivForm>        
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            placeholder="Enter a new title Todo"
            value={newTodo.title||""}
            required
            minLength="4"
            maxLength="18"
            onChange={handleChange}
          />
        </StyledDivForm>
        <StyledDivForm>        
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Enter a new description Todo"
            value={newTodo.description||""}
            required
            minLength="4"
            maxLength="18"
            onChange={handleChange}
          /> 
        </StyledDivForm>
        <StyledButton type="submit>">Create todo</StyledButton>
      </StyledFormWrapper>
    </>
  );
};

export default CreateTodo;
