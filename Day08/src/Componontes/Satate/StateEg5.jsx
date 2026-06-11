import { useState } from "react"

const StateEg5 = () =>{
    let [state , setState] = useState(false)

    let handleClick = () =>{
        setState(!state)
    }
    return(
        <>
        <h1>StateEg5</h1>
        <button onClick={handleClick}>{state ? "ON" : "OFF"}</button>
        </>
    )
}

export default StateEg5