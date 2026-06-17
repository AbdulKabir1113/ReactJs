import {useState} from 'react'

const ControlledEg5 = () => {  
    const [user, setUser] = useState({username : '', password : ''})
    

    const handleChange = (e) => {
        let {name, value} = e.target
        setUser({...user, [name] : value})
    }

   

    return (
        
            <>
            <form >
                
                <input type="text" name='username' value={user.username} onChange={handleChange} />
                <input type="password" name='password' value={user.password} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>

            <h2>username : {user.username}</h2>
            <h2>password : {user.password}</h2>
            </>
    )
}   

export default ControlledEg5