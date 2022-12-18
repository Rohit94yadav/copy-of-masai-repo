

const initialState =  {count:10}

const Reducer = (oldState = initialState, action) =>{

switch(action.type){
    case "ADD" : return {
        ...oldState,
        count : oldState.count + 1,
    };
    case "REDUCE" : return {
        ...oldState,
        count : oldState.count - 1,
    };
    default: return oldState;
    
}

}

export {Reducer};