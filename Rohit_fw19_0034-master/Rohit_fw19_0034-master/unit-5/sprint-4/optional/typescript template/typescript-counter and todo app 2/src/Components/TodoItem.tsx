import React from 'react'
import { TodoItems } from './Todo'


const TodoItem = ({id, title, status}: TodoItems) => {
  return (
    <div>
      {`${id} ${title} ${status}`}
    </div>
  )
}

export default TodoItem
