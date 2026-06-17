import {useState} from 'react'

const StateEg1 = () => {
    let [count, setCount] = useState(0)
    let handleClick = ()=>{
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+3)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default StateEg1
