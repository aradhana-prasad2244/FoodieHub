import React, { useContext } from "react";
import { Star } from "lucide-react";
import { IndianRupee } from "lucide-react";
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({ id, img, name, rating, minute, price }) => {

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className="h-100 w-72 rounded-2xl overflow-hidden mt-10 pb-6 bg-gray-50 hover:scale-102 transition-all duration-500 hover:shadow-2xl shadow-black">
      <div className="object-cover object-center relative">
        <img className="h-55 w-full" src={img} alt="" />
        <div className="px-3">
          {
          !cartItems[id]? <div className="absolute bottom-2 right-2 h-8 w-8 flex justify-center items-center bg-gray-100 rounded-full cursor-pointer"><Plus onClick={()=>addToCart(id)} strokeWidth={2} size={18} /></div> :
          <div className="w-30 absolute bottom-2 right-2 flex justify-between items-center rounded-full px-3 py-1 bg-white">
            <button className="bg-red-200 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer"><Minus onClick={()=>removeFromCart(id)} strokeWidth={2} size={18} className="stroke-red-700" /></button>
            <p className="text-black">{cartItems[id]}</p>
            <button className="bg-green-200 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer"><Plus onClick={()=>addToCart(id)} strokeWidth={2} size={18} className="stroke-green-700" /></button>
          </div>
        }
        </div>
      </div>

      <div className="px-3 pt-1">
        <div className="flex justify-between items-center ">
          <h2 className="font-bold text-xl">{name}</h2>
          <div className="flex items-center">
            <IndianRupee strokeWidth={2} size={20} absoluteStrokeWidth />
            <p className="text-lg font-semibold ">{price}</p>
          </div>
        </div>
        <div className="flex justify-center flex-col">
          <div className="flex items-center gap-1">
            <Star
              strokeWidth={3}
              absoluteStrokeWidth
              className="stroke-green-600"
            />
            <h3 className="text-lg">{rating}</h3>
          </div>
          <div>
            <h3>A classic Italian pizza topped with fresh tomatoes, mozzarella, and aromatic herbs.</h3>
          </div>
        </div>
      </div>

      {/* <div className="bottom flex justify-between items-center p-3 pb-3">
        <button className="border border-none rounded flex items-center gap-3 bg-orange-700 text-white font-semibold px-2 py-1">
          Add to cart
        </button>
      </div> */}
    </div>
  );
};

export default FoodItem;


// hover:scale-105 transition-all duration-300