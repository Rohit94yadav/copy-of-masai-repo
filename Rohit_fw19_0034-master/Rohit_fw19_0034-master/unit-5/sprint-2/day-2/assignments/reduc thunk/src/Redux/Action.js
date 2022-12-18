import axios from "axios";
import * as types from "./ActionType"

const getTaskRequset = ()=>{

    return{
        type : types.GET_TODOS_REQUEST
    }

}

const getTaskSuccess = (payload)=>{

    return{
        type : types.GET_TODOS_SUCCESS,
        payload
    }

}

const getTaskFailure = ()=>{

    return{
        type : types.GET_TODOS_FAILURE
    }

}





const addTaskRequset = ()=>{

    return{
        type : types.ADD_TODOS_REQUEST
    }

}

const addTaskSuccess = (payload)=>{

    return{
        type : types.ADD_TODOS_SUCCESS,
        payload
    }

}

const addtTaskFailure = ()=>{

    return{
        type : types.ADD_TODOS_FAILURE
    }

}


const getTasks = (dispatch)=>{

    dispatch(getTaskRequset())

    axios.get(`http://localhost:8080/todos`).then((res)=>{

    dispatch(getTaskSuccess(res.data))
    console.log(res.data)

    })
    .catch((err)=>{
        dispatch(getTaskFailure(err))
    })

}


export {getTaskRequset, getTaskSuccess, getTaskFailure, addTaskRequset,addTaskSuccess,addtTaskFailure,getTasks}