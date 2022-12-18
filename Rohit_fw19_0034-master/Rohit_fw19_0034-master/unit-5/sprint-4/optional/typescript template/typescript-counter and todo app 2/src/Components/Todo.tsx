import axios ,{AxiosResponse} from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem';


export interface TodoItems{
    id: number;
    title: string;
    status: boolean;
}

const Todo = () => {

const [todos, setTodos] = useState<TodoItems[]>([]);
const handleAdd = (title : string)=>{
    const payload ={
        id:todos.length +1,
        title,
        status: false,
    }

    // setTodos([...todos, payload])
    axios.post("http://localhost:8080/todos", payload).then(()=> getTodos())
}   

const getTodos = ()=>{
    axios.get("http://localhost:8080/todos")
    
    .then(({data} : AxiosResponse<TodoItems[]>)=>{
        setTodos(data)
    })
}

useEffect(()=>{

    getTodos()

},[])

  return (
    <div>
      <Header textLabel='Todo App' />
      <TodoInput handleClick={handleAdd} />
      {todos.length > 0 && todos.map(el=>{
        return <TodoItem key={el.id} {...el} />
      })}
    </div>
  )
}

export default Todo
