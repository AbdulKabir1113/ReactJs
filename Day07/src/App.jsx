import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Student from './Componontes/Students/Student'
// import Demo from './Componontes/Demo'
import IncDec from './Componontes/IncDec'

function App() {
    let name = "Kabir"
    let id = 101
    let skills = ['react', 'js', 'node']
    let education = {
      SSC:71.20,
      HSC:85.00,
      DEGREE:65.00
    }

    let exp = false;
    let pfBal = null
    let desg;
    let add = ()=>{
      return "jublii hills";
    }
      
      
    

  return (
    <>
      <Student name={name} id={id} skills={skills} education={education}
      exp={exp} pfBal={pfBal} desg={desg} add={add}/>
      {/* <Demo education={education} /> */}
      <IncDec />
    </>
  )
}

export default App
