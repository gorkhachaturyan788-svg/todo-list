import React from 'react';

function TodoItem(props) {
  const todo = props.todo;
  const deleteTodo = props.deleteTodo;
  const changeTodo = props.changeTodo;

  const myStyle = {
    textDecoration: todo.completed ? "line-through" : "none",
    flexGrow: 1
  };

  return (
    <div style={{ 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      borderBottom: "1px solid #eee", 
      padding: "12px 5px" 
    }}>
      <span style={myStyle}>
        {todo.text}
      </span>
      <div>
        <button 
          onClick={function() { changeTodo(todo.id); }} 
          style={{ 
            color: "#3b82f6", 
            background: "none", 
            border: "none", 
            cursor: "pointer", 
            fontSize: "14px" 
          }}
        >
          Mark Complete
        </button>
        <button 
          onClick={function() { deleteTodo(todo.id); }} 
          style={{ 
            color: "#ef4444", 
            background: "none", 
            border: "none", 
            cursor: "pointer", 
            fontSize: "14px", 
            marginLeft: "15px" 
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default TodoItem;