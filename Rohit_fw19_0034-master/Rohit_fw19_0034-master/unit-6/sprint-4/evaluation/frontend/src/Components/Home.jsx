import React from 'react'
import axios from 'axios'

import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const [todo,setTodos]=useState([])
    const token=localStorage.getItem("token")
    useEffect(()=>{
axios.get(`https://good-gray-rabbit-tux.cyclic.app/todos`,{
    headers:{
        'Authorization':`Bearer ${token}`
    }
}).then((res)=>{
    setTodos(res.data)
}).catch(e=>console.log(e))
    },[])
    console.log(todo)

    const handeldelete=(id)=>{
        axios.delete(`https://good-gray-rabbit-tux.cyclic.app/todos/deletetodos/${id}`,{
    headers:{
        'Authorization':`Bearer ${token}`
    }
}).then((res)=>{
    alert(res.data.msg)
}).catch(e=>console.log(e))
    }
  return (
    <div><h1>Todos</h1>
    <div>
    {
todo.length>0? todo.map((e)=>
    <div>
<div><b>Task:</b>{e.taskname
}  <b>Status:</b>{e.status} <b>tag:</b>{e.tag}

<Link to={`/updatetodo/${e._id}`}><button>edit</button></Link>
<button onClick={()=>handeldelete(e._id)}>delete</button>
</div>

    </div>  
):
<><h1>todos is empty add todos</h1>
<Link to="/addtodos"><button>Add todos</button></Link>
    </>}
    </div>
    </div>
  )
}

export default Home
