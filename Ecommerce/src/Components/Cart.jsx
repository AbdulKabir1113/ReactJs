
import React from 'react'
import { myContext } from '../App'
import { useContext } from 'react'

const Cart = () => {

  let { cartProducts, setCartProducts } = useContext(myContext)

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
        🛒 My Cart
      </h1>

      {cartProducts.map(({ id, title, price, image, quantity }) => {
        return (

          <div
            key={id}
            className="flex items-center justify-between bg-white shadow-lg rounded-xl p-6 mb-6 hover:shadow-2xl transition duration-300"
          >

            <img
              src={image}
              alt={title}
              className="w-32 h-32 object-contain"
            />

            <div className="w-72">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <b className="text-2xl text-green-600">${price}</b>
            </div>

            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-red-500 text-white text-2xl hover:bg-red-600">
                -
              </button>

              <span className="text-2xl font-bold">{quantity}</span>

              <button className="w-10 h-10 rounded-full bg-green-500 text-white text-2xl hover:bg-green-600">
                +
              </button>
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold">
              Remove
            </button>

          </div>
        )
      })}
    </div>
  )
}

export default Cart