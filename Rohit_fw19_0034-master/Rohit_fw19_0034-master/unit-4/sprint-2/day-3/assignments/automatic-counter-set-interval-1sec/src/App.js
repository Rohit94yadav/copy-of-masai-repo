import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>count: {counter}</h1>
    </div>
  );
}
