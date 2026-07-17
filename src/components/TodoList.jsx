import React from 'react';
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div style={{ marginTop: "15px" }}>
      {props.todos.map(function(todo) {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={props.deleteTodo}
            changeTodo={props.changeTodo}
            updateTodo={props.updateTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;