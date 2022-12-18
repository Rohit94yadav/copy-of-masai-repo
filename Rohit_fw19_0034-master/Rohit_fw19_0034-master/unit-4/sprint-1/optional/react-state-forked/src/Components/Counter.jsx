import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button disabled={count >= 10} onClick={() => setCount(count + 1)}>
        INC
      </button>
      <button disabled={count === 0} onClick={() => setCount(count - 1)}>
        DEC
      </button>
      <button disabled onClick={() => setCount(0)}>
        RESET
      </button>
    </div>
  );
}

export default Counter;
