//Write the ActionCreator functions here
import axios from "axios"
import * as types from "./actionTypes"

const postLoginRequset = ()=>{

    return{
        type: types.LOGIN_REQUEST,
    }
}

const postLoginSuccess = ()=>{

    return{
        type: types.LOGIN_SUCCESS,
    }
}

const postLoginFailure= ()=>{

    return{
        type: types.LOGIN_FAILURE,
    }
}

const login = (payload)=>(dispatch)=>{

    dispatch(postLoginRequset());

    return axios({
        method :"post",
        url: "/api/login",
        baseURL: "https://reqres.in",
        data: payload
    }).then((res)=>{
        return dispatch(postLoginSuccess(res.data.token))
    }).catch((err)=>{
        dispatch(postLoginFailure())
    })

}

export {login,postLoginFailure,postLoginRequset,postLoginSuccess}