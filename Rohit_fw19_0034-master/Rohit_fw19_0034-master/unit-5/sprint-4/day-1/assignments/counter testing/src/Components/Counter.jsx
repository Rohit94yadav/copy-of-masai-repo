import React from 'react'
import { useState } from 'react';
const Counter = () => {

    const [counter, setCounter] = useState(0)

  return (
    <div>
      <button data-testid= "addButton" onClick={()=> {setCounter(prev => prev+5)}} >Add</button>
        <h2>{counter}</h2>
        <button data-testid= "reduceButton" onClick={()=> {setCounter(prev => prev-5)}} >Reduce</button>
    </div>
  )
}

export default Counter
