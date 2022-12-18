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

  const handleToggle = (id) => {
    const updatedTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    setTdods(updatedTodo);
  };

  const handleDelete = (id) => {
    setTdods(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <AddTodo handleTodos={handleTodos} />

      <ul>
        {todos.map((el) => (
          <TodoItem
            key={el.id}
            handleToggle={() => handleToggle(el.id)}
            handleDelete={() => handleDelete(el.id)}
            title={el.title}
            status={el.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
