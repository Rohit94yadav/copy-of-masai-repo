import { useCallback, useState } from "react";
import TodoItems from "./TodoItems";

const initialState = [
  {
    id: 1,
    title: "learn react",
    status: false
  },
  {
    id: 2,
    title: "learn redux",
    status: false
  },
  {
    id: 3,
    title: "learn css",
    status: false
  }
];

const Todos = () => {
  const [todos, setTodos] = useState(initialState);
  const [currtodo, setCurrtodo] = useState("");

  const handleAddTodo = () => {
    const payload = {
      id: todos.length + 1,
      status: false,
      title: currtodo
    };
    setTodos([...todos, payload]);
    setCurrtodo("");
  };

  const handleToggle = useCallback(
    (id) => {
      let newTodos = todos.map((el) => {
        return el.id === id ? { ...el, status: !el.status } : el;
      });
      setTodos(newTodos);
    },
    [todos]
  );

  const handleDelete = useCallback(
    (id) => {
      let newTodos = todos.filter((el) => el.id !== id);
      setTodos(newTodos);
    },
    [todos]
  );

  return (
    <div>
      <h1>Todos</h1>
      <input value={currtodo} onChange={(e) => setCurrtodo(e.target.value)} />
      <button onClick={() => handleAddTodo}>ADD TODOS</button>
      {todos.length &&
        todos.map((el) => {
          return (
            <TodoItems
              key={el.id}
              {...el}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
    </div>
  );
};

export default Todos;
