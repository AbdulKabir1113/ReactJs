import React, { useState } from 'react'

const CondRendEg4 = () => {

    let [user, setUser] = useState({
        username: '',
        password: '',
        email: '',
        phone: '',
        age: ''
    });

    let handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <>
            <form>

                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange}/>

                {
                    user.username !== '' &&
                    <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange}/>
                }

                {
                    user.password.length >= 8 &&
                    <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                }

                {
                    user.email !== '' &&
                    <input type="text" name="phone" placeholder="Phone" value={user.phone} onChange={handleChange}/>
                }

                {
                    user.phone !== '' &&
                    <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange}/>
                }

            </form>
        </>
    )
}

export default CondRendEg4;