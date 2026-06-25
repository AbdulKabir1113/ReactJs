import {useState} from 'react'
import axios from 'axios'
const Delete = () => {
    let [state, setState] = useState('')
    let handleChnage = (e)=>{
        setState(e.target.value)
    }

    let handleSubmit =  async (e) =>{
        e.preventDefault();
        try{
            let result = await axios.delete(`http://localhost:3000/posts/${state}`)
            if(result.status == 200){
                alert("Deleted")
            }
            setState('')
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <div>
      <h1>DeleteData</h1>
      <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Id' name="id" value={state} onChange={(e)=>{handleChnage(e)}}/> <br />
            <button>Delete</button>
        </form>
    </div>
  )
}

export default Delete
