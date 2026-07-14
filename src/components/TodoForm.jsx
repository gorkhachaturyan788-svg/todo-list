import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();

    if (text !== "") {
      props.addTodo(text);
      setText("");
    }
  }

  function changeInput(e) {
    setText(e.target.value);
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Գրիր խնդիր"
        value={text}
        onChange={changeInput}
        style={{ 
          flexGrow: 1, 
          padding: "10px", 
          borderRadius: "5px", 
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />
      <button style={{ 
        backgroundColor: "#3b82f6", 
        color: "white", 
        border: "none", 
        padding: "10px 20px", 
        borderRadius: "5px", 
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold"
      }}>
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;