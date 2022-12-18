import "./styles.css";
import useTimeout from "./useTimeout";

export default function App() {
  const showText = useTimeout(2000);
  return (
    <div className="App">
      <h2>{showText ? "complete" : "Loading..."}</h2>
    </div>
  );
}
