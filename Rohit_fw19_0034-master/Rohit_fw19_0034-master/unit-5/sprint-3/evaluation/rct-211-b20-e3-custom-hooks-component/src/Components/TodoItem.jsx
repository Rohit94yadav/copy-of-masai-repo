function TodoItem({ title, status, handleToggle, handleDelete }) {
    return (
      <li>
        {title}-{status ? "Done" : "Not Done"}{" "}
        <button onClick={handleToggle}>TOGGLe</button>{" "}
        <button onClick={handleDelete}>DELETE</button>
      </li>
    );
  }
  
  export default TodoItem;
  