import React from 'react'
import { useReducer } from 'react';

let reducer = (state, action)=>{
    if(action.type === "INC"){
        return state+1
    }else if(action.type === "DEC"){
        return state-1
    }else{
        return 0;
    }
}
const UseReducer = () => {
    let[count, dispatch] = useReducer(reducer,0);
    console.log(count);
    
  return (
    <div>
     <button onClick={() => dispatch({ type: "INC" })}>+</button>
     <button onClick={() => dispatch({ type: "DEC" })}>+</button>
     <button onClick={() => dispatch({ type: "RESET" })}>+</button>
    </div>
  )
}

export default UseReducer
