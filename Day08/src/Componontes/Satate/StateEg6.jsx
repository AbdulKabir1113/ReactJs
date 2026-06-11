import { useState } from "react";

const StateEg6 = () =>{

    let [state , setState] = useState(false)
    let handleClick = () =>{
        setState(!state)
    }
    return(
        <>
         <h1>StateEg6</h1>
         <h2>{state ? "JavaScript" : "ReactJs"}</h2>
        <button onClick={handleClick}>Chnage Technology</button>
        </>
    )
}

export default StateEg6