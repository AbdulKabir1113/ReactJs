
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Card from './Components/Card'
import Cart from './Components/Cart'

import { useState } from 'react'

function App() {
    const [state, setState] = useState(0)

    const [cartProducts, setCartProducts] = useState([])

  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <Card state={state} setState={setState} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
      <Cart cartProducts={cartProducts}  setCartProducts={setCartProducts}/>
      <Footer />
    </>
  )
}

export default App
