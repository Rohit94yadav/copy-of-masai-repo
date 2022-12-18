import axios from "axios";
import { useEffect, useReducer } from "react";
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";

import "./App.css";
import ProductCard from "./Components/ProductCard";

function App() {
  //DO NOT USE use useState;
  //use the useReducer function here; import the reducer function from reducer.js and initial state variable from initialState.js here, for useReducer arguments.
  const initialState = {
    data: [],
    isLoading: false,
    isError: false,
  };
 
 
 
  const productDetailsReducer = (reducerState, action)=>{

  
  switch(action.type){
    case GET_PRODUCTS_REQUEST: {
      return {
        
        isLoading : true,
      };
    }
    case GET_PRODUCTS_SUCCESS:{
      return {
       
        isLoading:false,
        data : action.payload,
      }


    }
    case GET_PRODUCTS_FAILURE:{
      return {
       
        isLoading:false,
        data : [],
      }


    }
    default: 
    return reducerState


  }



}
 
  
    const [reducerState, dispatch] = useReducer(productDetailsReducer, initialState);
let data ;
  useEffect(()=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
       .then(res=>{
        dispatch({type : GET_PRODUCTS_SUCCESS, payload : res.data.data})
        data = res.data.data
        console.log(res.data.data)
       })
       .catch(err=>{
        dispatch({type: GET_PRODUCTS_FAILURE})
       })
  },[])
  //const {data, isLoading, isError} = state;

  return (
    <div>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCTS</h1>
          <div>Welcome to the RCT-211-B20 E1 Evaluation</div>

          {/* If the application is in the loading state, show the below div else not */}
          <div data-tesid="loading">{reducerState.loading ? "Loading..." : reducerState.data.title}</div>

          {/* If there is any error while fetching the data from the API, show the below div, else not */}
          {/* <div data-testid="error" style={{ color: "red" }}>
            Error in fetching details
          </div> */}

          {data&&data.map((el)=>{
           <h1 key={el.id} >{el.brand}</h1>
          })}

          
        </div>
      </div>
    </div>
  );
}

export default App;
