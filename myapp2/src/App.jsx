import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let name = "Kabir";
  let id = 101;
  let msg = "error"
  let nums = [10,20,30]

  return (
    // <></> React fragments
    <>
      <h1>Hello Its my Frst Code of ReactJs</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea laborum distinctio expedita? Voluptates distinctio sit eligendi impedit assumenda quis quam libero. Unde ad, possimus tempore porro nostrum rerum quaerat quisquam.</p>
      <h3>My name is {name} and ID is {id}</h3>
      <img src="null" alt={msg} />
      <p>Array Elenets Are {nums[0]}</p>
      <p>{10*7}</p>
    </>
  )
}

export default App
