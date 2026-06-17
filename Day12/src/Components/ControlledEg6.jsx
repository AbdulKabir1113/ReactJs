import {useState} from 'react'

const ControlledEg6 = () => {  
    const [user, setUser] = useState({username : '', password : ''})
    const [formData, setFormData] = useState({username : '', password : ''})

    const handleChange = (e) => {
        let {name, value} = e.target
        setUser({...user, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(user)
        
    }

   

    return (
        
            <>
            <form onSubmit={handleSubmit}>
                
                <input type="text" name='username' value={user.username} onChange={handleChange} />
                <input type="password" name='password' value={user.password} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>

            <h2>username : {formData.username}</h2>
            <h2>password : {formData.password}</h2>
            </>
    )
}   

export default ControlledEg6