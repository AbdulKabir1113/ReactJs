import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Accordian from './components/Accordian'

function App() {
  

  return (
    <>
      {/* <h1 className="bg-red-50 text-2xl text-center border-red-900 border-x rounded-full  text-orange-500 p-5 m-7" > Hello Kabir </h1> */}
      <Navbar/>
      <Accordian/>
    </>
  )
}

export default App
