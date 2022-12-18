import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './Counter'
import Todo from './Todo'

export default function Home() {
  const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
  console.log("rahul",isAuth)
  return (
    <div>
      <Counter/>
       {isAuth && <Todo/>}
    </div>
  )
}
