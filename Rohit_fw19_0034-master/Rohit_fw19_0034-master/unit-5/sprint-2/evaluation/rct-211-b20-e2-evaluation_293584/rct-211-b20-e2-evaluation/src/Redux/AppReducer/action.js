//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionType"

const getWatchesDataRequest = ()=>{
    return{
        type : types.GET_WATCHES_DATA_REQUEST,
    }
}


const getWatchesData = (queryParams)=>(dispatch)=>{
    dispatch(getWatchesDataRequest());

    return axios.get(`http://localhost:8080/watches`, queryParams)
    .then((res)=>{
        dispatch({
            type : types.GET_WATCHES_DATA_SUCCESS,
            payload: res.data,
        })
    })
    .catch((err)=>{
        dispatch({
            type: types.GET_WATCHES_DATA_FAILURE,
        })
    })
}

export {getWatchesDataRequest, getWatchesData}