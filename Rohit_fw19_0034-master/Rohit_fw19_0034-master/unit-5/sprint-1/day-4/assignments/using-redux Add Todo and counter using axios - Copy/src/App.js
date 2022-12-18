
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { handleAddCount, handleReduceCount } from './Redux/Action';
import { Store } from './Redux/Store';

function App() {

//   const {dispatch, subscribe} = Store;

// const {count} = Store.getState();

// const [update, setUpdate] = useState(0)

// subscribe(()=>{
//   setUpdate(prev => prev+1)
// })

const count = useSelector((state)=> state.count)
const dispatch = useDispatch();

const handleAdd = ()=>{
  dispatch(handleAddCount(1))
}

const handleReduce = ()=>{
  dispatch(handleReduceCount(2))
}

  return (
    <div className="App">
     <h1>Counter {count}</h1>
     <button onClick={handleAdd}>ADD</button>
     <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

export default App;
