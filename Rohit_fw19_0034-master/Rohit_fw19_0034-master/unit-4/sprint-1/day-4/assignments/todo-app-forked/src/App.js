import React, { useState } from "react";
import Todo from "./components/todo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>todo</h1>
      <Todo />
    </div>
  );
}
