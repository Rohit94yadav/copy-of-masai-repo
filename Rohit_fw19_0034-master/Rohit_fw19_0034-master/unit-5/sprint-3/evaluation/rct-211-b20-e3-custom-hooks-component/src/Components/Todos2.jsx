import React, { useState } from 'react'
import { useTodos } from '../hooks/useTodos'

const Todos2 = () => {
  //use the initialData that you are getting from the props to be used, as the initial argument for useTodos hook
  
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleTodos(text);
    setText("");
  };

  const [todos, setTdods] = useState([]);

  const handleTodos = (text) => {
    const newItem = {
      title: text,
      
      id: new Date().toDateString() + text
    };
    setTdods([...todos, newItem]);
  };

  

  const handleDelete = (id) => {
    setTdods(todos.filter((todo) => todo.id !== id));
    
  };

  return (
    <div data-testid='todos2'>
      <h1 data-testid='todos2-label'>Todos-2</h1>
      <input data-testid='todos2-input' onChange={handleChange} value={text} />
      <button data-testid='todos2-add' onClick={onClick}>Add Task</button>
      <div>
        {/* Loop through the todo data that you are getting from the useTodos hook to render the tasks with their name, and a delete button with each task */}
        {todos.map((el) => (
        <div  key={el.id}>
          <div data-testid='todos2-element'>
            {/* task name here */} {el.title}
          </div>
          <button data-testid='todos2-delete' onClick={() => handleDelete(el.id)} >Delete</button>
        </div>
 ))}
      </div>
      <button data-testid='todos2-clear' >Clear Todos</button>
    </div>
  )
}

export default Todos2