const IncDec = () =>{
    let num=0;
    let handleInc = ()=>{
        num++;
        console.log(num);
        
    }

    let handleDec = ()=>{
        num--;
        console.log(num);
        
    }
    return(
        <>
        {/* // when we dont need to pass parameters used like this */}
        <button onClick={handleInc}>Increament</button>
        {/* // when we need to pass parameters used like this */}
        <button onClick={()=>{handleDec()}}>Decreament</button>
        </>
    )
}

export default IncDec