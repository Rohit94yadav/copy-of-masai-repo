import { useState } from "react";

function AddTodo({ handleTodos }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleTodos(text);
    setText("");
  };

  return (
    <div>
      <input onChange={handleChange} value={text} placeholder="enter text" />

      <button onClick={onClick}>ADD</button>
    </div>
  );
}

export default AddTodo;
