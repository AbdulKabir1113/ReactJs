import { useState } from "react";

function StateEg7 (){
    let [state, setState] = useState(0)

    let handleInc = ()=>{
        setState(state+1)
    }

     let handleInc10 = ()=>{
        setState(state+10)
    }

     let handleDec = ()=>{
        setState(state-1)
    }

     let handleDec10 = ()=>{
        setState(state-10)
    }

     let handleZero = ()=>{
        setState(0)
    }
    return(
        <>
        <h1>StateEg7</h1>
        <h1>{state}</h1>
        <button onClick={handleInc}>Increment by 1</button>
        <button onClick={handleInc10}>Increment by 10</button>
        <button onClick={handleDec}>Decrement by 1</button>
        <button onClick={handleDec10}>Decrement by 10</button>
        <button onClick={handleZero}>Make 0</button>
    
        </>
    )
}

export default StateEg7