import {useState} from 'react'

const ControlledEg1 = () => {  
    const [username, setUsername] = useState('')

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    return (
        <div>
            <h1>Controlled Component Example</h1>
            <input type="text" name='username' value={username} onChange={handleChange} />
            
        </div>
    )
}   

export default ControlledEg1