import {useState} from 'react'

const ControlledEg3 = () => {  
    const [user, setUser] = useState({username : '', password : ''})
    

    const handleChange = (e) => {
        e.preventDefault()
        console.log(user.username, user.password)
        setUser({username : '', password : ''})
    }

    return (
        
            <form onSubmit={handleChange}>
                
                <input type="text" name='username' value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
                <input type="password" name='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                <button type='submit'>Submit</button>
            </form>
    )
}   

export default ControlledEg3