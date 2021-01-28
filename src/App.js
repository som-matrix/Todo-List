import React from 'react'
// Importing Global Style
import GlobalStyle from "./GlobalStyle";
import TodoList from './components/TodoList';
function App() {
  return (
    <div>
      <GlobalStyle/>
      <TodoList/>
    </div>
  );
}
export default App;
