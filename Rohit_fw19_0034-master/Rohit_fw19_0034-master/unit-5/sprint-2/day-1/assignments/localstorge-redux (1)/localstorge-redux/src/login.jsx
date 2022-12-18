import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login_fail, login_req, login_success } from './Redux/AuthRedux/action'

export default function Login() {
  const [useremail,setuseremail]=useState("")
  const [userpassword,setuserpassword]=useState("")
const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
  const dispatch=useDispatch()

  const loginSubmit=()=>{
if(useremail && userpassword){
  const payload={
    email:useremail,
    password:userpassword
  };
  dispatch(login_req())
  return axios.post("https://reqres.in/api/login",payload)
  .then((r)=>{
    dispatch(login_success(r.data.token))
  })
  .catch((e)=>{
    dispatch(login_fail(e))
  })
}
  }
  console.log("yyyyjj",isAuth)
  return (
    <div>
      <h1>Login</h1>
      <input value={useremail} onChange={e=>setuseremail(e.target.value)} type="text" placeholder='email' />
      <input value={userpassword} onChange={e=>setuserpassword(e.target.value)} type="text" placeholder='password' />
      <button onClick={loginSubmit}>submit</button>
    </div>
  )
}
