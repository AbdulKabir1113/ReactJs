import React, { useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { myContext } from "../App";


const Product = () => {
let {cartProducts, setCardProducts}  = useContext(myContext)
 const [state, setState] = useState({
  id: "",
  title: "",
  image: "",
  description: "",
  price: "",
  rating:{
    rate: 3.9,
    count: 120
  }
});
  let {id} = useParams()

  async function fetchApi(){
    try{
      
      let {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setState(data)
    }catch(err){
      console.log(err);   
    }
  }

  useEffect(()=>{fetchApi()},[])

  let handleAddCart = ()=>{

    let bool = cartProducts.some(obj=> obj.id == state.id)

    if(bool == false){
    setCardProducts([...cartProducts, {...state,quantity : 1}])
    console.log(cartProducts);
    }
    else{
      alert("Already present in the cart")
    }
    
  }

  return (
     <div className="flex justify-around flex-wrap gap-10 m-10">
      
        <div className="w-72 border rounded-lg p-4 shadow-lg">
          <img src={state.image} alt={state.title} className="w-full h-52 object-contain"/>

          <h3 className="font-bold mt-3"> {state.title}</h3>

          <p className="text-gray-600 mt-2">{state.description.slice(0, 100)}...</p>

          <h4 className="text-xl font-bold text-green-600 mt-2">${state.price}</h4>

          <p className="mt-2 text-yellow-500 font-semibold">Rating : ⭐⭐⭐ {state.rating.rate} ({state.rating.count} Reviews)</p>
       
          <button onClick={()=>{handleAddCart()}} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
  
)}

export default Product
