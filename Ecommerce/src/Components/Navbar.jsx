import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { myContext } from "../App";
const Navbar = () => {

  let {cartProducts}  = useContext(myContext)


  return (
    <header className="flex sticky top-0 z-10 justify-around items-center p-5 bg-slate-900/90 text-white">
      
        <Link to="/">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition duration-300">
        Smart Pick
      </h1>
    </Link>

      <nav className="flex items-center gap-8 text-lg font-semibold">
        <NavLink to="/men" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Men
        </NavLink>

        <NavLink to="/women" className={({ isActive }) => isActive ? "text-red-500" : ""} >
          Women
        </NavLink>

        <NavLink to="/electronics" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Electronices
        </NavLink>

        <NavLink to="/jewellery" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Jewellery
        </NavLink>
      </nav>
      <div>
        <Link to='/cart'>
        <p className="text-3xl">Cart <sup>{cartProducts.length}</sup></p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
