import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import CompA from './Componontes/CompA'
import StateEg1 from './Componontes/Satate/SatateEg1'
import StateEg2 from './Componontes/Satate/StateEg2'
import StateEg3 from './Componontes/Satate/SatateEg3'
import StateEg4 from './Componontes/Satate/StateEg4'
import StateEg5 from './Componontes/Satate/StateEg5'
import StateEg6 from './Componontes/Satate/StateEg6'
import StateEg7 from './Componontes/Satate/StateEg7'

function App() {
  let num = 100
  return (
      
    <>
      <CompA num={num} />
      <StateEg1 />
      <hr />
      <StateEg2 />
      <hr />
      <StateEg3 />
      <hr />
      <StateEg4 />
      <hr />
      <StateEg5 />
      <hr />
      <StateEg6 />
      <hr />
      <StateEg7/>
    </>
  )
}

export default App
