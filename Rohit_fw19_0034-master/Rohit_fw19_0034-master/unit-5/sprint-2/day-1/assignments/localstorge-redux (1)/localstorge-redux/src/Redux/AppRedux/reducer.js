import { accessdata, savedata } from "../../localstorage/localstorage";
import {
  
  GET_TODO_FAILURE,
  GET_TODO_REQ,
  GET_TODO_SUCCESS,
} from "./actiontypes";

const initialstate = {
  count: accessdata('counter') || 17,
  todos: [],
  isLoading: false,
  isError: false,
};
const reducer = (oldstate = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      savedata('counter',oldstate.count+payload)
      return {
        ...oldstate,
        count: oldstate.count + payload,
      };
    case "REDUCE":
      savedata('counter',oldstate.count-payload)

      return {
        ...oldstate,
        count: oldstate.count - payload,
      };
    case GET_TODO_REQ:
      return { ...oldstate, isLoading: true };

    case GET_TODO_SUCCESS:
      return { ...oldstate, isLoading: false, todos: payload };

    case GET_TODO_FAILURE:
      return { ...oldstate, isError: true, todos: [] };
  

    default:
      return oldstate;
  }
};
export { reducer };
