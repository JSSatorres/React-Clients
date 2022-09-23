import { TodoProvider } from "./context/Todo-Context-Reducer/TodoProvider"; 
import { ThemeProviderContextAndStyleComponents } from "./context/Theme-Context/themeProvider";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import ThemeButton from "./components/ThemeButton"; 
import {TitleH2,StyledWrapper} from "./componentsStyled"

function App() {

  return (
    <TodoProvider>
      <ThemeProviderContextAndStyleComponents>
        <ThemeButton />  
        <StyledWrapper>
          <TitleH2>Todo List</TitleH2>      
          <CreateTodo /> 
          <TodoList  />
        </StyledWrapper>
      </ThemeProviderContextAndStyleComponents>   
    </TodoProvider>
  );
}

export default App;
