import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQ } from "./actiontypes";

export const login_fail=()=>{
  return {
    type:LOGIN_FAILURE
  }
}

export const login_success=(payload)=>{
  return {
    type:LOGIN_SUCCESS,
    payload
  }
}
export const login_req=()=>{
  return {
    type:LOGIN_REQ
  }
}