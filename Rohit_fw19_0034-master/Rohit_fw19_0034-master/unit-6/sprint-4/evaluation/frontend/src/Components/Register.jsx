import React from 'react'
import axios from 'axios';
import { useState } from 'react'
const Register = () => {
    const[data,setData] = useState({});
    const handleChange =(e)=>{
        const{name,value}= e.target;
        setData({...data,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`https://good-gray-rabbit-tux.cyclic.app/user/signup`,data).then((res)=>{
    alert(res.data.msg)
    localStorage.setItem("token",res.data.token)
}).catch(err=>console.log(err))
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
            <input onChange={handleChange}  type="text" name="name" placeholder='name' /> 
            <input onChange={handleChange} type="email" name="email" placeholder='email' /> 
            <input onChange={handleChange} type="password" name="password" placeholder='password' /> 
            <input type="submit" value={"Signup"} /> 
     </form>
    </div>
  )
// const[name,setName] = useState("")
// const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = () => {
//         const payload = {
//             name,
//             email,
//             password
//         }
       
//         fetch(`https://good-gray-rabbit-tux.cyclic.app/user/signup`, {
//             method : "POST",
//             body : JSON.stringify(payload),
//             headers : {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then((res) => res.json())
//         .then((res) => console.log(res))
//         .catch((err) => console.log(err))
//     }
//     return(
//         <div>
//             <h1>Sign up here</h1>
//             <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}></input>
//             <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
//             <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
//             <button onClick={handleSubmit}>Submit</button>
//         </div>
//     )
}

export default Register
