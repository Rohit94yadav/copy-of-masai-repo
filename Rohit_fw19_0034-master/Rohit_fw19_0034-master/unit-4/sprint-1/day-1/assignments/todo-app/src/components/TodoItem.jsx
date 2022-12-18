function TodoItem({ title, status }) {
  return (
    <li>
      {title}-{status ? "Done" : "Not Done"}
    </li>
  );
}

export default TodoItem;
