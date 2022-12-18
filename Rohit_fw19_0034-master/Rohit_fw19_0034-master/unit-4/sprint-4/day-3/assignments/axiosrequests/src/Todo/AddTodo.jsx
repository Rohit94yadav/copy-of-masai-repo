import { useState } from "react";

function AddTodo({ onAddTodo }) {
  const [formState, setFormState] = useState({
    name: "",
    population: "",
    country: "India"
  });

  function handleOnChange(e) {
    const { name, value, type } = e.target;
    const val = type === "number" ? Number(value) : value;
    setFormState({
      ...formState,
      [name]: val
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddTodo(formState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChange}
          value={formState.name}
          type="text"
          name="name"
        />
        <input
          onChange={handleOnChange}
          value={formState.population}
          type="number"
          name="population"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default AddTodo;
