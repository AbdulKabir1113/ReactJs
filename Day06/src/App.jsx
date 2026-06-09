import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentTable from './Componontes/StudentTable'
import Cards from './Componontes/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cards/>
      {/* <StudentTable /> */}
    </>
  )
}

export default App
