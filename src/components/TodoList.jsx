import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {
  const todos = props.todos;
  const deleteTodo = props.deleteTodo;
  const changeTodo = props.changeTodo;

  return (
    <div style={{ marginTop: "15px" }}>
      {todos.map(function(todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;