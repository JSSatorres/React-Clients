import ReduxProvider from "./Redux/Provider"; 
import { ThemeProviderContextAndStyleComponents } from "./contextReducer/Theme-Context/themeProvider";

import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import ThemeButton from "./components/ThemeButton"; 
import {TitleH2,StyledWrapper} from "./componentsStyled"

function App() {

  return (
    <ReduxProvider> 
      <ThemeProviderContextAndStyleComponents>
        <ThemeButton />  
        <StyledWrapper>
          <TitleH2>Todo List</TitleH2>      
          <CreateTodo /> 
          <TodoList  />
        </StyledWrapper>
      </ThemeProviderContextAndStyleComponents>   
      </ReduxProvider>   
  );
}

export default App;
