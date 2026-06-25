import {useState} from 'react'
import axios from 'axios'
const Update = () => {

    let [state, setState] = useState({id : '' , title : '' , views : ''})
    let handleChnage = (e)=>{
        setState({...state,[e.target.name] : e.target.value})
    }

    let handleSubmit =  async (e) =>{
        e.preventDefault();
        try{
            let result = await axios.put(`http://localhost:3000/posts/${state.id}`, state)
            if(result.status == 200){
                alert("Updated")
            }
            setState({id : '', title : '', views : ''})
        }catch(err){
            console.log(err);
            
        }
    }
  return (
    <div>
      <h1>UpdateData</h1>
      <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Id' name="id" value={state.id} onChange={(e)=>{handleChnage(e)}}/> <br />
            <input type="text" placeholder='Enter Title' name="title" value={state.title} onChange={(e)=>{handleChnage(e)}}/> <br />
            <input type="text" placeholder='Enter Views' name="views" value={state.views} onChange={(e)=>{handleChnage(e)}}/> <br />
            <button>Update</button>
        </form>
    </div>
  )
}

export default Update
