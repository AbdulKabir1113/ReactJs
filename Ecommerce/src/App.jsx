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
          </Routes>
      </BrowserRouter>
      </myContext.Provider  >
    </>
  )
}

export default App
