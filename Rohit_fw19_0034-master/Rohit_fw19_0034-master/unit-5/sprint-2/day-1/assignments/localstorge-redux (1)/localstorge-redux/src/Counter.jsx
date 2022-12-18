import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  
  const count = useSelector((s) => {
    // console.log(s);
    return s.AppReducer.count;
  });
  const dispatch = useDispatch();
    
    
   
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>Add</button>
      <button onClick={() => dispatch({ type: "REDUCE", payload: 1 })}>
        Reduce
      </button>
    </div>
  )
    
  
}
