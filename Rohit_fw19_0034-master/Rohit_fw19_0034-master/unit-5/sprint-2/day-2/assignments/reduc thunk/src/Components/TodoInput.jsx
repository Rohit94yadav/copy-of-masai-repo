import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTaskRequset, addTaskSuccess, addtTaskFailure,getTasks } from '../Redux/Action';

const TodoInput = () => {

    const [task,setTask] = useState("");
    const dispatch = useDispatch()

    const addTodo=()=>{
        if(task){
            const payload = {
                title: task,
                status: false,
            }

            dispatch(addTaskRequset())

           return axios.post(" http://localhost:8080/todos", payload).then((res)=>{
                dispatch(addTaskSuccess(res.data))
                setTask("")
            })
            .catch((err)=>{
                dispatch(addtTaskFailure(err))
            })
        }
    }

    const handleAddTodo = ()=>{

        addTodo().then(()=>{
            getTasks(dispatch)
        })

    }

  return (
    <div>
      <input type="text" placeholder='ADD TODOS HERE' value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleAddTodo}>ADD TODO</button>
    </div>
  )
}

export default TodoInput
