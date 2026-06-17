import { useRef } from "react"

const RefEg1 = ()=>{
    let x = useRef(0)

    let handleRef = ()=>{
        x.current++
        console.log(x.current);
        
    }
    return(
        <>
        <h1>RefEg1</h1>
        <p>{x.current}</p>
        <button onClick={handleRef}>Inc Num</button>
        </>
    )
}

export default RefEg1