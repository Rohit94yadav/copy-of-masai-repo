import React from 'react'
import Todoinput from './Todoinput'
import axios from 'axios'
import { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { get_todo_fail, get_todo_req, get_todo_success, post_todo_fail, post_todo_success } from './Redux/AppRedux/action'


export default function Todo() {
  const dispatch=useDispatch()
  const {todos,isLoading,isError}=useSelector((state)=>{
    return{
      todos:state.AppReducer.todos,
      isError:state.AppReducer.isError,
      isLoading:state.AppReducer.isLoading

    }
  },shallowEqual)

  
  const gettodos=()=>{
  dispatch(get_todo_req())

   return axios
    .get("http://localhost:8080/todos")
    .then((r)=>{
      dispatch(get_todo_success(r.data))
      console.log(r.data)
    })
    .catch((err)=>{
      dispatch(get_todo_fail())
      console.log(err)
    })
  }

  const addtodo=(title)=>{
    if(title){
     const payload={
      title,
     status:false,
     

    }
    dispatch(post_todo_fail())
    return axios.post("http://localhost:8080/todos",payload)
    .then((r)=>{
    dispatch(post_todo_success())
      
    })
    .catch((err)=>{
    dispatch(post_todo_fail())
      
    })
  }
  }
  
  const handleadd=(text)=>{
    addtodo(text).then(()=>gettodos())
  }
  useEffect(()=>{
    gettodos()
  },[])
  console.log("efefefe")
  return (
    <div>
      <h1>Todos</h1>
      <Todoinput addtodo={handleadd}/>
      {todos.length > 0 && 
      todos.map(item=>{
        return <div key={item.id}> {item.title} - {item.status ? "true" : "false"} </div>
      })}
    </div>
  )
}
