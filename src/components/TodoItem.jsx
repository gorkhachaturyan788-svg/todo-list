import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, changeTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  if (isEditing) {
    return (
      <div className="edit-container">
        <input className="edit-input" value={newText} onChange={(e) => setNewText(e.target.value)} />
        <button className="action-btn" onClick={() => { updateTodo(todo.id, newText); setIsEditing(false); }}>Save</button>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <span className="todo-text" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <div>
        <button className="action-btn" onClick={() => setIsEditing(true)}>✏️</button>
        <button className="action-btn complete-btn" onClick={() => changeTodo(todo.id)}>Mark Complete</button>
        <button className="action-btn remove-btn" onClick={() => deleteTodo(todo.id)}>Remove</button>
      </div>
    </div>
  );
}

export default TodoItem;