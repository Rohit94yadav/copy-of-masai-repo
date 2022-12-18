import { useState } from "react";
import Pin from "./Components/Pin";
import "./styles.css";

export default function App() {
  const [pinInput, setPinInput] = useState("");
  return (
    <div className="App">
      <Pin length={5} maxLength={1} setPinInput={setPinInput} />
      OTP is {pinInput}
    </div>
  );
}
