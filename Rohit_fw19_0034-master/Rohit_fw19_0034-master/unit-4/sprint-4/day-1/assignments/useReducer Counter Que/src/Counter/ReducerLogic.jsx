function reducer(state, action) {
  // if(action.type=== "INC_COUNT"){
  //   return state+1;
  // }
  // if(action.type=== "DEC_COUNT"){
  //   return state-1;
  // }
  // if(action.type=== "RESET_COUNT"){
  //   return state=0;
  // }

  switch (action.type) {
    case "INC_COUNT":
      return state + 1000;
    case "DEC_COUNT":
      return state - 1000;
    case "RESET_COUNT":
      return (state = 0);
    default:
      return state;
  }
}

function reducer2(state2, action) {
  // if(action.type=== "INC_COUNT"){
  //   return state+1;
  // }
  // if(action.type=== "DEC_COUNT"){
  //   return state-1;
  // }
  // if(action.type=== "RESET_COUNT"){
  //   return state=0;
  // }

  switch (action.type) {
    case "INCREASE_COUNTBY2000":
      return state2 + 2000;
    case "DECREASE_COUNTBY2000":
      return state2 - 2000;

    default:
      return state2;
  }
}

export { reducer, reducer2 };
