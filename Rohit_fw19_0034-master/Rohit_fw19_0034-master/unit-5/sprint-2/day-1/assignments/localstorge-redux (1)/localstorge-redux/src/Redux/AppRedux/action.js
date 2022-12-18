import { POST_TODO_FAIL,POST_TODO_REQ,POST_TODO_SUCCESS,GET_TODO_FAILURE,GET_TODO_REQ,GET_TODO_SUCCESS } from "./actiontypes"

export const get_todo_fail=()=>{
  return{
    type:GET_TODO_FAILURE

  }
}

export const get_todo_success=(payload)=>{
  return{
    type:GET_TODO_SUCCESS,
    payload

  }
}

export const get_todo_req=()=>{
  return{
    type:GET_TODO_REQ

  }
}
export const post_todo_fail=()=>{
  return{
    type:POST_TODO_FAIL

  }
}

export const post_todo_success=(payload)=>{
  return{
    type:POST_TODO_SUCCESS,
    payload

  }
}

export const post_todo_req=()=>{
  return{
    type:POST_TODO_REQ

  }
}