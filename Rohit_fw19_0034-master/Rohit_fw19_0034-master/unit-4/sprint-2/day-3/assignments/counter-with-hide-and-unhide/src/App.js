import { useState } from "react";
import ExampleUnmount from "./components/ExampleUnmount";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <ExampleUnmount />}
      <button onClick={() => setShow(!show)}>{show ? "HIDE" : "SHOW"}</button>
    </div>
  );
}
