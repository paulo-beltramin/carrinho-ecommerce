import { useContext } from "react"

import { FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import {cartContext}  from "../Context/cartContext"
const Header = () => {

 const {cartAmount}= useContext(cartContext)

  return (
    <div>
      <header className=" p-2 bg-gray-500">
        <div className=" flex justify-between items-center max-w-7xl px-4 w-full mx-auto">
          <Link className="flex " to={'/'}>
            <h1 className="text-3xl max-md:text-2xl text-amber-400 font-extrabold">Paulão</h1>
            <span className="text-3xl max-md:text-2xl text-green-400 font-bold">Shopping</span>
          </Link>
          <Link to={'/carrinho'} className="relative">
            <FaCartPlus size={28} color="yellow" />
           {cartAmount > 0 && (
             <p className="absolute -right-2 -top-1.5 bg-red-600 rounded-full w-6 h-6 flex
             justify-center text-white">
              {cartAmount}
            </p>
           )}
          </Link>
        </div>


      </header>
    </div>
  )
}

export default Header