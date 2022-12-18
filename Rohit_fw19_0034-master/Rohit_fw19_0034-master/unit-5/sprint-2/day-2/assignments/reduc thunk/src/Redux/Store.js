import { legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer";
import thunk from "redux-thunk"
import { getTasks } from "./Action";

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const customMiddelware = (Store) => (next) => (action)=>{

//     if(typeof action === "function"){
//         //  getTasks(dispatch)
//        return action(Store.dispatch)
//     }

//     return next(action)
// }

const Store = legacy_createStore(reducer, applyMiddleware(thunk));

export {Store};