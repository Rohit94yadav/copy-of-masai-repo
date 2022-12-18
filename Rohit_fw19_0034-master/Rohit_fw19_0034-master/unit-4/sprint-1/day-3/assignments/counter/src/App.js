import React, { useState } from "react";
import CounterState from "./components/counter";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <button onClick={() => setCount(count - 1)}>Reduce</button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
}
