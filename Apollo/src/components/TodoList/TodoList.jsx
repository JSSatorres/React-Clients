import React from "react";
import { useTodo } from "../../hooks/useTodo";
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
  const { todos, dispatch } = useTodo();

  const handleDeleteTodo = (todoToDelete) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todoToDelete,
    });
  };

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
