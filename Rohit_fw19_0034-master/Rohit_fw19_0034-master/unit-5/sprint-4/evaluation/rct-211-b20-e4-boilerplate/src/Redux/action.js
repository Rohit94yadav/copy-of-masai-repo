//Write the API calling functions here;
import axios from "axios";
import * as types from "./actionTypes"

const getProductRequest =()=>{
    return{

        type: types.GET_PRODUCTS_REQUEST,
    }
}

const deleteProductRequest =()=>{
    return{

        type: types.DELETE_PRODUCT_REQUEST,
    }
}

const addProductRequest =()=>{
    return{

        type: types.ADD_PRODUCT_REQUEST,
    }
}



const getProduct = () =>(dispatch) =>{
    dispatch(getProductRequest());
    return axios.get(`http://localhost:8080/products`)
    .then((res)=>{
        dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err)=>{
        dispatch({
            type: types.GET_PRODUCTS_FAILURE,
        })
    })
}

const deleteProduct = (id) =>(dispatch) =>{
    dispatch(deleteProductRequest());
    dispatch(getProductRequest());
    return axios.delete(`http://localhost:8080/products/${id}`)
    .then((res)=>{
        dispatch({
            type: types.DELETE_PRODUCT_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err)=>{
        dispatch({
            type: types.DELETE_PRODUCT_FAILURE,
        })
    })
}


const addProduct = (product) =>(dispatch) =>{
    dispatch(addProductRequest());
    return axios.post(`http://localhost:8080/products`,product)
    .then((res)=>{
        dispatch({
            type: types.ADD_PRODUCT_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err)=>{
        dispatch({
            type: types.ADD_PRODUCT_FAILURE,
        })
    })
}

export {getProduct, getProductRequest, deleteProduct,deleteProductRequest,addProduct,addProductRequest}