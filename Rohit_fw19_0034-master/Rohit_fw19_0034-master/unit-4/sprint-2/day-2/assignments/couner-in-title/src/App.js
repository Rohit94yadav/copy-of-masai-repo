import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `user clicked ${count} times`;
    console.log(`user clicked {count} times`);
  });

  return (
    <div className="App">
      <h1>count {count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
}
