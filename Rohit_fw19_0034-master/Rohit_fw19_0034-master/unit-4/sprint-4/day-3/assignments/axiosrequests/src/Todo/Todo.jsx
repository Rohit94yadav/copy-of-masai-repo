import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { getTodos, addTodosCities, deleteTodos } from "./api";

function Todo() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleGetTodo(page);
  }, [page]);

  function handleGetTodo(page) {
    getTodos({
      page: page,
      limit: 10,
      sort: "name",
      order: "ASC"
    })
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddTodo(data) {
    addTodosCities(data).then((res) => {
      console.log(res);
      handleGetTodo(page);
    });
  }

  function handleDelete(id) {
    deleteTodos(id).then((res) => {
      console.log(res);
      handleGetTodo(page);
    });
  }

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      {data.map((el) => (
        <div key={el.id}>
          <div> {el.name}</div>
          <button onClick={() => handleDelete(el.id)}>Delete</button>
        </div>
      ))}
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default Todo;
