import React, {useContext, useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteOneTodo,getAllTodo } from "../../Redux/todo/actions"
import { FcImport } from "react-icons/fc";
import {
  TitleH6,
  TodoListDivStly,
  DivFlexRow,
  DivFlexColunm,
  TodoDescription,
  TodoTitle,
} from "../../componentsStyled";


const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDeleteTodo = (deleteTodo) => {
    dispatch(deleteOneTodo(deleteTodo));
  };

  useEffect(() => {
    dispatch(getAllTodo())
  }, [])
  

  return (
    <>
      <TitleH6>TodoList</TitleH6>
      {todos.length > 0 ? (
        todos.map((todo, index) => (
          <TodoListDivStly key={index}>
            <DivFlexRow>
              <DivFlexColunm>
                <TodoTitle> {todo.title}</TodoTitle>
                <TodoDescription> {todo.description}</TodoDescription>
              </DivFlexColunm>
              <FcImport onClick={() => handleDeleteTodo(todo.title)}>
              </FcImport>
            </DivFlexRow>
          </TodoListDivStly>
        ))
      ) : (
        <TitleH6>any todo </TitleH6>
      )}
    </>
  );
};

export default TodoList;
