import './App.css'
import Navbar from './Components/Navbar'
import Men from './Components/Men'
import Women from './Components/Women'
import Jewellery from './Components/Jewellery'
import Electronics from './Components/Electronics'
import Chief from './Components/Chief'
import Product from './Components/Product'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import { createContext, useState } from 'react'
import Cart from './Components/Cart'


export let myContext = createContext()

function App() {
   
  let [cartProducts, setCardProducts] = useState([])

  return (
    <>
      < myContext.Provider value={{cartProducts,setCardProducts}}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Chief/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
      </myContext.Provider  >
    </>
  )
}

export default App
