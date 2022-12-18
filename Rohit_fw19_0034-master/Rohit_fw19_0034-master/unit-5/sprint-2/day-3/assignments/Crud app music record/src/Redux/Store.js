import { legacy_createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";

import {reducer as AuthReducer} from "./AuthReducer/reducer"

const rootReducer = combineReducers({AppReducer, AuthReducer})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { Store };
