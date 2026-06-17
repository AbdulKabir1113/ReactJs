import { useRef, useState } from "react"

function RefEg2(){
    
    let num = 0
    let [state, setState] = useState(0)
    let x = useRef(0)

    let handleNum = ()=>{
        num++
        
       console.log(`num - ${num}, 
                    State - ${state}, 
                    Ref - ${x.current}`);
        
    }
    let handleState = ()=>{
        setState(state+1)
        console.log(`num - ${num}, 
            State - ${state}, 
            Ref - ${x.current}`);
    }
    let handleRef = ()=>{
        x.current++
        console.log(`num - ${num}, 
            State - ${state}, 
            Ref - ${x.current}`);
    }
    return(
        <>
        <h1>RefEg2</h1>
        <h2>{num}</h2>
        <button onClick={handleNum}>Inc Num</button>
        <h2>{state}</h2>
        <button onClick={handleState}>Inc State</button>
        <h2>{x.current}</h2>
        <button onClick={handleRef}>Inc Ref</button>
        </>
    )
}

export default RefEg2