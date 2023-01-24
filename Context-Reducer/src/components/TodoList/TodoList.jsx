import { Droppable, Draggable } from "@hello-pangea/dnd";
import useFetch from "../../hooks/useFetch";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const url = 'http://localhost:5000/api/todo'
  const { data:todos, loading, error } = useFetch(url)
  
  return ( 

    <Droppable droppableId="todos">
    {(droppableProvided) => (
      <div
        ref={droppableProvided.innerRef}
        {...droppableProvided.droppableProps}
        className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
      >
      {todos?.map((todo, index) => (
        <Draggable
          key={todo._id}
          // drag and drop configuration Draggable
          index={index}
          draggableId={`${todo._id}`}
        >
        {(draggableProvided) => (
          <TodoItem
           // TODO: add the function by context
            todo={todo}
            // removeTodo={removeTodo}
            // updateTodo={updateTodo}
            drag and drop configuration
            ref={draggableProvided.innerRef}
            {...draggableProvided.dragHandleProps}
            {...draggableProvided.draggableProps}
          />
        )}
        </Draggable>
      ))}
      {/* reserved the blank positon */}
      {droppableProvided.placeholder}
      </div>
    )}
    </Droppable>
  );
};

export default TodoList;