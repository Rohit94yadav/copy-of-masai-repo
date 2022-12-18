

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { addTodos, deleteTodos, getTodos, toggleTodos } from '../api/AllTodo'
import AddTodo from './AddTodo'
import Pagination from './Pagination'
import TodoList from './TodoList'


 function Todo() {

    const[todos, setTodos] = useState([]);
    const [sortBy, setSortBy] = useState("ASC");
    const [page, setPage] = useState(1);

    useEffect(()=>{

        handleGetTodos()
        

    },[sortBy, page])

    const handleGetTodos=()=> {
       return getTodos({sortBy, page})
        .then(res=>{
            console.log(res)
            setTodos(res)
        })
        .catch(err=>{

        })
    }

    const handleAdd = (text)=>{

        const item = {
            title : text,
            status : false
        }
        addTodos(item)
        .then(res=>{
            console.log(res)
            handleGetTodos();
        })

    }


    const handleToggle = (id, newStatus)=>{
        toggleTodos(id, newStatus)
        .then(res=>{
            handleGetTodos()
        })
        .catch(err=>{

        })
    }

    const handleDelete = (id)=>{
        deleteTodos(id)
        .then(res=>{
            handleGetTodos()
        })
        .catch(err=>{

        })
    }


  return (
    <div>
      <AddTodo handleAdd={handleAdd}/>
      <div>
        <button onClick={()=>setSortBy(prev=> prev==="ASC"?"DESC":"ASC")}>{sortBy === "ASC" ? "SHOW DESCENDING" : "SHOW ASCENDING"}</button>
      </div>
      <h1>PENDING</h1>
      {
        todos.filter(el=> !el.status).map(el=> <TodoList key={el.id}
             title = {el.title}
        status={el.status}
        id = {el.id}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        /> )
      }
      <h1>COMPLETED</h1>
      {
        todos.filter(el=> el.status).map(el=> <TodoList key={el.id}
             title = {el.title}
        status={el.status}
        id = {el.id}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        /> )
      }

      <div>
        <button onClick={()=> setPage(prev=> prev-1)} disabled={page===1}>PREV</button>
        <h3>{page}</h3>
        <button onClick={()=> setPage(prev=> prev+1)}>NEXT</button>
      </div>

      <Pagination total={10} current={page} onChange={(value)=> setPage(value)} />

    </div>
  )
}


export default Todo;