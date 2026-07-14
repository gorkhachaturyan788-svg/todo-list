import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(function() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      return JSON.parse(saved);
    } else {
      return [];
    }
  });

  useEffect(function() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const filtered = todos.filter(function(todo) {
      return todo.id !== id;
    });
    setTodos(filtered);
  }

  function changeTodo(id) {
    const updated = todos.map(function(todo) {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    setTodos(updated);
  }

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        changeTodo={changeTodo}
      />
    </div>
  );
}

export default App;