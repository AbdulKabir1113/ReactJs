import { useState } from 'react'

function StateEg10() {
    let card1 = 
         {
        id : 101,
        image : "https://m.media-amazon.com/images/I/71w+qG+8nL._AC_UY218_.jpg",
        title : "Watch",
        price : 7000,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
    
    let card2 = {
        id : 102,
        image : "https://m.media-amazon.com/images/I/71w+qG+8nL._AC_UY218_.jpg",
        title : "Laptop",
        price : 80000,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }
     let card3 = {
        id : 103,
        image : "https://m.media-amazon.com/images/I/71w+qG+8nL._AC_UY218_.jpg",
        title : "Mobile",
        price : 85000,
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
    }

    const [state, setState] = useState({
        id : '',
        image : '',
        title : '',
        price : '',
        description : ''
    })

     const { id,image, title, price, description } = state;

    let handleClick = () => {
        setState(card1)
    }
    let handleClick2 = () => {
        setState(card2)
    }
    let handleClick3 = () => {
        setState(card3)
    }
    return (
        <>
        <h1>StateEg10</h1>
        <button onClick={handleClick}>Show Card1 Details</button>
        <button onClick={handleClick2}>Show Card2 Details</button>
        <button onClick={handleClick3}>Show Card3 Details</button>
       
           <div className='card'>
             <h2>ID: {id}</h2>
            <img src={image} alt="img" />
            <h2>Title: {title}</h2>
            <h2>Price: {price}</h2>
            <h2>Description: {description}</h2>
           </div>
        </>
    )
}

export default StateEg10
    