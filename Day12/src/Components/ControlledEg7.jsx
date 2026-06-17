import {useState} from 'react'

const ControlledEg7 = () => {  
    const [user, setUser] = useState({username : '', password : '' ,mail : '', phone : '' , age : '', gender : ''})
    

    const handleChange = (e) => {
        let {name, value} = e.target
        setUser({...user, [name] : value})
    }

   

    return (
        
            <>
            <form >
                
                <input type="text" name='username' value={user.username} onChange={handleChange} />
                <input type="password" name='password' value={user.password} onChange={handleChange} />
                <input type="email" name='mail' value={user.mail} onChange={handleChange} />
                <input type="tel" name='phone' value={user.phone} onChange={handleChange} />
                <input type="text" name='age' value={user.age} onChange={handleChange} />
                <input type="radio" name="gender" value="Male" onChange={handleChange}  />
                <input type="radio" name="gender" value="Female" onChange={handleChange} />
                
                <button type='submit'>Submit</button>
            </form>

            <h2>username : {user.username}</h2>
            <h2>password : {user.password}</h2>
            <h2>email : {user.mail}</h2>
            <h2>phone : {user.phone}</h2>
            <h2>age : {user.age}</h2>
            <h2>gender : {user.gender}</h2>
           
            </>
    )
}   

export default ControlledEg7