import { useEffect, useState } from "react"

function EffectEg1(){
    let [state1, setState1] = useState(0)
    let [state2, setState2] = useState(false)
    let demo = ()=>{
        console.log("Demo Function is Created");
        
    }
    useEffect(()=>{demo()},[state1])
    return(
        <>
        <h1>Satat1</h1>
        <button onClick={()=>setState1(state1+1)}>Inc State1</button>
        <button onClick={()=>setState2(!state2)}>{state2 ?"ON":"OFF"}</button>
        
        </>
    )
}

export default EffectEg1