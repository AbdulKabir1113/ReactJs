import  { useState } from 'react'

function StateEg8() {
    let frontend = ['html', 'css', 'javascript', 'react']
    let backend = ['nodejs', 'expressjs', 'mongodb']
    let database = ['mysql', 'postgresql', 'oracle']
    const [state, setState] = useState([])

    let handleClick = () => {
        setState(frontend)
    }
    return (
        <>
        <h1>StateEg8</h1>
        {/* <button onClick={() =>{setState(frontend)}}>Frontend</button> */}
        <button onClick={() =>{setState(backend)}}>Backend</button>
        <button onClick={() =>{setState(database)}}>Database</button>
        <button onClick={handleClick}>Frontend</button>
        <ul>
            
                {state.map((element) => {
                   return <li >{element}</li>
                 })}

        </ul>
        </>
    )
}

export default StateEg8

    