import React, { useState } from 'react';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';
import './App.css';

function App() {
  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("TodoList")));
  
  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
