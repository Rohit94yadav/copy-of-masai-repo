import React from 'react'
import axios from 'axios';
import { useState } from 'react'
const Login = () => {
    const [data,setData]=useState({});
    const handleChange=(e)=>{
const {name,value}=e.target;
setData({...data,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
axios.post(`https://good-gray-rabbit-tux.cyclic.app/user/login`,data).then((res)=>{
    alert(res.data.msg)
    localStorage.setItem("token",res.data.token)
}).catch(err=>console.log(err))
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="email" name="email" placeholder='email' /> 
            <input onChange={handleChange} type="password" name="password" placeholder='password' /> 
            <input type="submit" value={"login"} /> 
    </form>
    </div>
  )
}

export default Login
