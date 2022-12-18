import React from 'react'
import { useState } from 'react'



export default function Todoinput({addtodo}) {
  const [text,settext]=useState("")

  const handleadd=()=>{
    if(text){
      addtodo(text)
      settext("")
    }
  }
  return (
    <div>
      <input type="text" value={text} onChange={e=>settext(e.target.value)} />
      <button onClick={handleadd}>Add</button>
    </div>
  )
}
