import './App.css'
import Nav from './Components/Nav'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { useState } from 'react'

function App() {

  const [CartProducts, setCartProducts] = useState([])

  return (
    <>
      <Nav CartProducts={CartProducts} />

      <Cards
        CartProducts={CartProducts}
        setCartProducts={setCartProducts}
      />

      <Cart
        CartProducts={CartProducts}
        setCartProducts={setCartProducts}
      />

      <Footer />
    </>
  )
}

export default App