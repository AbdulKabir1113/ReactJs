import React from 'react'

const CondnRendEg2 = () => {
  let isLoggenId = true
  if(isLoggenId){
    return (
    <>
    <h2>CondRendEg2</h2>
    <p>Welcome</p>
    </>
  )
  }else{
    return (
    <>
    <h2>CondRendEg2</h2>
    <p>login</p>
    </>
  )
  }
}

export default CondnRendEg2
