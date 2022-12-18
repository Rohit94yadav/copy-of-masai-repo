import "./styles.css";
import React from "react";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";

export default function App() {
  return (
    // YOU ARE ENTERING JSX
    <div className="App">
      {/* <Counter /> */}
      <Todo />
    </div>
  );
  // YOU ARE LEAVING JSX
}
