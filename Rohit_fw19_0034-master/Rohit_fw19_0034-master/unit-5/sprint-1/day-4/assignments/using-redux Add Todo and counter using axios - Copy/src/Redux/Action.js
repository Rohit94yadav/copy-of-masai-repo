import { ADD, REDUCE } from "./ActionType"



const handleAddCount = (payload)=>{
    return {
        type: ADD,
        payload
    }
}

const handleReduceCount = (payload)=>{
    return {
        type:REDUCE,
        payload
    }
}

export {handleAddCount,handleReduceCount}