
import './App.css'
import Nav from './Components/Nav'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import { useState } from 'react'

function App() {
   const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Nav cartCount={cartCount} />
      <Cards cartCount={cartCount} setCartCount={setCartCount} />
      <Footer />
    </>
  )
}

export default App
