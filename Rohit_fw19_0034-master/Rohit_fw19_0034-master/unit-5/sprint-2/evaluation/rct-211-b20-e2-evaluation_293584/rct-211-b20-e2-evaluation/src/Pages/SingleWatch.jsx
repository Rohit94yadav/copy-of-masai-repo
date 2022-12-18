import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWatchesData } from "../Redux/AppReducer/action";

const SingleWatch = () => {

  const {id} = useParams();
  const watch = useSelector((store)=> store.AppReducer.watches);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(watch.length === 0){
      dispatch(getWatchesData())
    }
  },[])

  return (
    <div>
      <h2>Watch name</h2>
      <div>
        <img src="watch-image" alt="Cover Pic" />
      </div>
      <div>
        <div>Watch Category</div>
      </div>
    </div>
  );
};

export default SingleWatch;
