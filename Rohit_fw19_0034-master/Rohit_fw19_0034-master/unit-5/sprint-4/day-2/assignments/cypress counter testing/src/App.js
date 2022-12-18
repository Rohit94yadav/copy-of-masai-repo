

import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';




function App() {

  const [counter, setCounter] = useState(0)

  const incCount = ()=>{
    axios.post("http://localhost:8080/counter", {value : counter+1})
    .then((r)=> setCounter(r.data.value))
  }

  const decCount = ()=>{
    setCounter((prev) => prev-1)
  }

  const fetchData = ()=>{
    axios.get("http://localhost:8080/counter")
    .then(({data}) => {
      setCounter(data.value)
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button className= "addButton" onClick={incCount} >Add</button>
        <h2>The current count is {counter}</h2>
        <button className = "reduceButton" onClick={decCount} >Reduce</button>
    </div>
  );
}

export default App;
