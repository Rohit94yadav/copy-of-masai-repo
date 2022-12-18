import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../Redux/AuthReducer/action";
import { LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(email && password){
      dispatch(login({email, password})).then((res)=>{
        if(res.type === LOGIN_SUCCESS){
          navigate(location.state.from, {replace: true})
        }
      })
      setEmail("");
      setPassword("");
    }
  }



  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input data-testid="login-email" type={"email"} value = {email} onChange = {e=> setEmail(e.target.value)} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input type={"password"} data-testid="login-password" value = {password} onChange = {e=> setPassword(e.target.value)}/>
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
