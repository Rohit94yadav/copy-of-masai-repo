
import { legacy_createStore, applyMiddleware, compose, combineReducers} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk"
// NOTE: use this store variable to create a store.


const rootReducer = combineReducers({reducer})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

export {store}
