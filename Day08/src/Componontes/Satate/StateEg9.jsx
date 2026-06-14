import { useState } from 'react'

function StateEg9() {
    let student1 = {
        name: 'Kabir',
        age: 25,
        course: 'MERN'
    }

    let student2 = {
        name: 'Maaz',
        age: 21,
        course: 'Java'
    }
    const [state, setState] = useState({
        name: '',
        age: '',
        course: ''
    })

     const { name, age, course } = state;

    let handleClick = () => {
        setState(student1)
    }
    let handleClick2 = () => {
        setState(student2)
    }
    return (
        <>
        <h1>StateEg9</h1>
        <button onClick={handleClick}>Show Student Details</button>
        <button onClick={handleClick2}>Show Student2 Details</button>
        {/* <h2>Name: {state.name}</h2>
        <h2>Age: {state.age}</h2>
        <h2>Course: {state.course}</h2> */}
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Course: {course}</h2>
        </>
    )
}

export default StateEg9
    