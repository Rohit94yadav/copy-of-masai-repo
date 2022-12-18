function CounterState(initialState) {
  let count = initialState;

  function getState() {
    return count;
  }

  function updateState(newValue) {
    count = newValue;
  }
  return [count, getState, updateState];
}

let [count, getState, updateState] = CounterState(0);
console.log(count);

export default CounterState;
