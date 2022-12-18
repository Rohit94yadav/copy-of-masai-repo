

import React from 'react'

const TodoList = ({
    title,
    status,
    id,
    handleToggle,
    handleDelete
}) => {
  return (
    <div>
     <b>{title}</b>
     <h2>{status?"DONE" : "NOT DONE"}</h2>
     <button onClick={()=>handleToggle(id, !status)}>TOGGLE</button>
     <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoList

