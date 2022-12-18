import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTdods] = useState([]);

  const handleTodos = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTdods([...todos, newItem]);
  };
  console.log(todos);

  return (
    <div>
      <AddTodo handleTodos={handleTodos} />

      <ul>
        {todos.map((el) => (
          <TodoItem key={el.id} title={el.title} status={el.status} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
