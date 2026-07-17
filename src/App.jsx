import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => setTodos([...todos, { id: Date.now(), text, completed: false }]);
  const deleteTodo = (id) => setTodos(todos.filter(t => t.id !== id));
  const changeTodo = (id) => setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  const updateTodo = (id, newText) => setTodos(todos.map(t => t.id === id ? { ...t, text: newText } : t));

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} changeTodo={changeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default App;