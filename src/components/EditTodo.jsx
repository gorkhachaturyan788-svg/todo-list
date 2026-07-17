import React, { useState } from "react";

function EditTodo({ todo, updateTodo, setIsEditing }) {
    const [text, setText] = useState(todo.text);

    function handleSave() {
        updateTodo(todo.id, text);
        setIsEditing(false);

    }

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSave}>✅</button>
        </div>
    );
}

export default EditTodo;