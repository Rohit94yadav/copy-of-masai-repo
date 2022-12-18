import React from 'react'
import axios from 'axios';
import { useState } from 'react'
const AddTodo = () => {
    const token=localStorage.getItem("token")
    const [data,setData]=useState({});
    const handleChange=(e)=>{
const {name,value}=e.target;
setData({...data,[name]:value})
    }
console.log(token)
    const handleSubmit=(e)=>{
        e.preventDefault();
axios.post(`https://good-gray-rabbit-tux.cyclic.app/todos/addtodos`,data,{
    headers:{
        'Authorization':`Bearer ${token}`
    }}).then((res)=>{
    alert(res.data.mag)
}).catch(e=>console.log(e))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="taskname" placeholder='taskname' />
            <input onChange={handleChange} type="text" name="status" placeholder='status' /> 
            <input onChange={handleChange} type="text" name="tag" placeholder='tag' /> 
            <input type="submit" value={"add todo"} /> 
        </form>
    </div>
  )
}

export default AddTodo
