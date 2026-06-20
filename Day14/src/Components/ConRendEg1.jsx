import {useState, useRef} from 'react'

const ConRendEg1 = () => {

    let students = [
        {id : 1 , name : "kabir"},
        {id : 2 , name : "maaz"}
    ]
  return (
    <>
    <div>
        <h1>CondRendEg1</h1>
        <h2>Students Data</h2>

        {students.length > 0 ? students.map((ele)=>{
            return <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                    </tr>
                </tbody>
            </table>
        }) : <h2> No data found</h2>}
    </div>
    </>
  )
}

export default ConRendEg1
