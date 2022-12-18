import { useReducer, useState } from "react";
import {
  addvalueByInput,
  deccrementation,
  deccrementationBy2000,
  incrementation,
  incrementationBy2000,
  resetcount
} from "./CounterLogic";
import { reducer, reducer2 } from "./ReducerLogic";

function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [state2, dispatch2] = useReducer(reducer2, 500);
  const [value, setValue] = useState(0);

  return (
    <div>
      <input
        value={value}
        type="number"
        onChange={(e) => setValue(Number(e.target.value))}
        placeholder="Enter Number Here"
      />
      <div>
        <h2>Counter: {state} </h2>
        <button onClick={() => dispatch(incrementation)}>ADD</button>
        <button
          disabled={state === 0}
          onClick={() => dispatch(deccrementation)}
        >
          REDUCE
        </button>
        <button onClick={() => dispatch(resetcount)}>Reset</button>
        <button onClick={() => dispatch(addvalueByInput(value))}>
          ADD BY VALUE
        </button>
        <button onClick={() => dispatch(addvalueByInput(-value))}>
          REDUCE BY VALUE
        </button>
      </div>
      <div>
        <h2>Counter: {state2} </h2>
        <button onClick={() => dispatch2(incrementationBy2000)}>ADD2</button>
        <button
          disabled={state2 === 0}
          onClick={() => dispatch2(deccrementationBy2000)}
        >
          REDUCE2
        </button>
      </div>
    </div>
  );
}

export default Counter;
