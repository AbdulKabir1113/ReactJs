import { useState } from "react";

function StateEg4(){

        let [state, setState] = useState("ON");

        let handleClick = () => {
            if(state === "ON"){
                setState("OFF");
            }
            else{
                setState("ON");
            }
        }
    return(
        <>
        <h1>StateEg4</h1>
        
        <button onClick={handleClick}>{state}</button>
        </>
        
    )
}

export default StateEg4