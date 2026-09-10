import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="h-18 w-full flex justify-between items-center px-20 py-4 bg-white border border-neutral-50 fixed cursor-pointer z-10">
      <Link to='/'>
      <h1 className="text-black text-3xl font-bold  rounded-full px-3">
        Foodie<span className="text-orange-700">Hub</span>
      </h1></Link>

      <div className="flex items-center gap-7">
        <input className="w-36 border border-gray-600 rounded-full text-xl text-gray-600 px-4 py-1.1 select-none" type="text" placeholder="search" />
        <div className="flex items-center relative">
          <Link to='/cart'><ShoppingCart className="stroke-gray-600" size={30} /></Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="border rounded-2xl px-4 py-1 text-gray-600 cursor-pointer hover:bg-gray-50"
        >
          sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
