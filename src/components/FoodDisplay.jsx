import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { foodList } = useContext(StoreContext);

  return (
    <div className="px-20 my-auto">
      <h2 className="text-4xl font-bold uppercase">Top dishes near you</h2>
      <div className="flex flex-wrap gap-15 justify-center items-center">
        {foodList.map((item, idx) => {
          if(category==="All" || category===item.category){
            return <FoodItem key={idx} id={item.id} img={item.img} name={item.name} rating={item.rating} price={item.price} minute={item.minute} category={item.category}/>
          }
      })}
      </div>
    </div>
  );
};

export default FoodDisplay;
