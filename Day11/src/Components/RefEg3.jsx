import {useRef} from 'react'

const RefEg3 = () => {
    let x = useRef()
    
    let handleClick = ()=>{
        
        x.current.focus();
    }
    

    let x1 = useRef(0)
    let handleNum = ()=>{
        
        x1.current++;
        console.log(x1.current);
        
    }

    let handleDec = ()=>{
        
        x1.current--;
        console.log(x1.current);

    }
  return (
    <>
    <div>
        <h1>RefEg3</h1>
        <input ref={x} type="text" />
        <button onClick={handleClick}>focus</button>

        <button  onClick={handleNum}>Inc num</button>
        <button  onClick={handleDec}>Dec num</button>
    </div>
    </>
  )
}

export default RefEg3
