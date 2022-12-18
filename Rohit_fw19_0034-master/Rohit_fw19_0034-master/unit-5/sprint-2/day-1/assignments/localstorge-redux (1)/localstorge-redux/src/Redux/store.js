import { legacy_createStore, combineReducers } from "redux";
import {reducer as AuthReducer} from "./AuthRedux/reducer"
import {reducer as AppReducer} from "./AppRedux/reducer"

const rootReducer=combineReducers({AuthReducer,AppReducer}) 
const store=legacy_createStore(rootReducer)

export {store}