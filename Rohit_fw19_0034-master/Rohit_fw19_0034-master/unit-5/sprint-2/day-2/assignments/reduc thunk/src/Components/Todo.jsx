import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTaskFailure, getTaskRequset, getTasks, getTaskSuccess } from '../Redux/Action';
import TodoInput from './TodoInput';

const Todo = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

   

    useEffect(()=>{
        dispatch(getTasks)
    },[dispatch])

  return (
    <div>

        <TodoInput />

        {todos.length>0 && todos.map(el=>{
            return <div key={el.id}> {el.title} - {el.status ? "True" : "False"}</div>
        })}
    </div>
  )
}

export default Todo
