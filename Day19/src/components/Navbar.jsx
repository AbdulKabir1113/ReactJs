import React, { useState } from 'react'

const Navbar = () => {
    let [state, setState] = useState(false)
  return (
   <header className={
    state ? 'flex justify-around p-4 text-2xl border bg-black text-white' 
                            : 'flex justify-around p-4 text-2xl border bg-white'
    }>
    <img src="path" alt="logo" />
    <p>Cart</p>
    <button onClick={()=>{setState(!state)}}>{state ? 'Light Mode' : 'dark Mode'}</button>
   </header>
    
    


  )
}

export default Navbar
