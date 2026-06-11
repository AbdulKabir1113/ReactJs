import { useState } from "react";

function StateEg1(){

        let num=0

        let handleInc = () => {
            num++
            console.log(num)
        }
    return(
        <>
        <h1>SatateEg1</h1>
        <h1>{num}</h1>
        <button onClick={handleInc}>Increment</button>
        </>
        
    )
}

export default StateEg1