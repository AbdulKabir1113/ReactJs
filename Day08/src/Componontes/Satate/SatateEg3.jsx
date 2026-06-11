import { useState } from "react";

function StateEg3(){

        let [state, setState] = useState("JavaScript");

        let handleClick = () => {
            if(state === "JavaScript"){
                setState("ReactJS");
            }
            else{
                setState("JavaScript");
            }
        }
    return(
        <>
        <h1>SatateEg3</h1>
        <h1>{state}</h1>
        <button onClick={handleClick}>Change Technology</button>
        </>
        
    )
}

export default StateEg3