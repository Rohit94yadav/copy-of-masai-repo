import React, { useState } from 'react'
import Button from './Button'

interface TodoInputProps{
    handleClick: (value: string) => void
}

const TodoInput = ({handleClick}: TodoInputProps) => {

    const [currTodo, setCurrTodo] = useState("")

    const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (e)=>{
        setCurrTodo(e.target.value)
    }

    const clickHandler = ()=>{
        if(currTodo !== ""){
            handleClick(currTodo)
        }
    }
    
  return (
    <div>
      <input type="text" value={currTodo} onChange={changeHandler} />
      <Button buttonText='Add Todo' handleClick={clickHandler} />
    </div>
  )
}

export default TodoInput
