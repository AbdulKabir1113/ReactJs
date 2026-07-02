
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Services from './components/Services'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
