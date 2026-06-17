import {useState} from 'react'

const ControlledEg2 = () => {  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        console.log(username, password)
        setUsername('')
        setPassword('')
    }

    return (
        
            <form onSubmit={handleChange}>
                
                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
    )
}   

export default ControlledEg2