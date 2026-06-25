import axios from 'axios'
import React, { useState } from 'react'

const CreateData = () => {

    let [state, setState] = useState({title : '' , views : ''})
    let handleChnage = (e)=>{
        setState({...state,[e.target.name] : e.target.value})
    }

    let handleSubmit =  async (e) =>{
        e.preventDefault();
        try{
            let result = await axios.post("http://localhost:3000/posts",state)
            alert(result.statusText)
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <>
    <div>
        <h1>CreateData</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Title' name="title" value={state.title} onChange={(e)=>{handleChnage(e)}}/> <br />
            <input type="text" placeholder='Enter Views' name="views" value={state.views} onChange={(e)=>{handleChnage(e)}}/> <br />
            <button>Create</button>
        </form>
    </div>
    </>
  )
}

export default CreateData
