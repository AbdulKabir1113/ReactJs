import React, { useState } from 'react'

const CondRendEg3 = () => {

    let [user, setUser] = useState({
        username: '',
        password: ''
    })

    let handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                />

                {
                    (user.username !== '' && user.password !== '')
                        ? <button>Submit</button>
                        : null
                }
            </form>
        </>
    )
}

export default CondRendEg3