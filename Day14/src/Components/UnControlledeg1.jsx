import { useRef, useState } from "react"

function UnContolledEg1(){

    let [state, setState] = useState({username:'', password: ''})
    let [bool , setBool] = useState(false);
    let ref1 = useRef()
    let ref2 = useRef()

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        let username = ref1.current.value
        let password = ref2.current.value

         setState({username,password});
        
        setBool(true);

    }

    return(
        <>
        <h1>UnControlled Eg1</h1>
        <form onSubmit={handleSubmit}>
        <input ref={ref1} type="text" name="username"/>
        <input ref={ref2} type="text" name="password"/>

         <button>Submit</button>
        </form>

        {bool && <div> 
            <h2>usrname - {state.username}</h2>
            <h2>password - {state.password}</h2>
            </div>}
        </>
    )
}

export default UnContolledEg1