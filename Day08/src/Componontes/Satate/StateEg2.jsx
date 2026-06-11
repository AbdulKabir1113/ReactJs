import { useState } from "react";

function StateEg2(){

        let [state, setState] = useState(0);

        let handleInc = () => {
            setState(state + 1);
        }
    return(
        <>
        <h1>SatateEg2</h1>
        <h1>{state}</h1>
        <button onClick={handleInc}>Increment</button>
        </>
        
    )
}

export default StateEg2