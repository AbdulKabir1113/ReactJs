import {useState} from 'react'

const ControlledEg4 = () => {  
    const [user, setUser] = useState({username : '', password : ''})
    

    const handleChange = (e) => {
        let {name, value} = e.target
        setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user.username, user.password)
        setUser({username : '', password : ''})
    }

    return (
        
            <form onSubmit={handleSubmit}>
                
                <input type="text" name='username' value={user.username} onChange={handleChange} />
                <input type="password" name='password' value={user.password} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
    )
}   

export default ControlledEg4