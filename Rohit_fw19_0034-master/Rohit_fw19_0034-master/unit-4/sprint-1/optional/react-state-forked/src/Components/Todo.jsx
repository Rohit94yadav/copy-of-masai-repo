import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  // state
  // function which updates the state;
  // setTodos()

  const handleAddTodo = (text) => {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    const todosAfterNewItemAdded = [...todos, newTodo];
    setTodos(todosAfterNewItemAdded);
  };

  const handleToggle = (id) => {
    // JAVASCRIPT
    const todosAfterUpdation = todos.map(
      (todo) => (todo.id === id ? { ...todo, status: !todo.status } : todo)
      //
    );
    // REACT
    setTodos(todosAfterUpdation);
  };

  const handleDelete = (id) => {
    // javascript

    const todosAfterDeletion = todos.filter((todo) => todo.id !== id);

    // React
    setTodos(todosAfterDeletion);
  };

  return (
    <div>
      <AddTodo handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id} // this is something react asks; key will not get passed
            // todo item
            id={item.id}
            title={item.title}
            status={item.status}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}
