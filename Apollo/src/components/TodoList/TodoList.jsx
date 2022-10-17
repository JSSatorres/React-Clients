import React from "react";
/* import { useTodo } from "../../hooks/useTodo"; */
import { useQuery } from "@apollo/client";
import {GET_TODOS} from "../../graphql/queries"

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
  /* const { todos, dispatch } = useTodo(); */
const { loading, data } = useQuery(GET_TODOS);

  const result =  useQuery(GET_TODOS);

  const load =  loading &&  <TitleH6>loading </TitleH6>
  const handleDeleteTodo = (todoToDelete) => {
   /*  dispatch({
      type: "DELETE_TODO",
      payload: todoToDelete,
    }); */
    console.log(data);
  };

  return (
    <>
      <TitleH6>TodoList</TitleH6>
      {load}
      {data ? (
        data.map((todo, index) => (
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
