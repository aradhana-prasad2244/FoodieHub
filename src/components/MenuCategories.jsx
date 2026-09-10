import React from "react";
// import CategoryCard from "./CategoryCard";
import { menuData } from "../assets/data/menuData";
import { LocateFixed } from "lucide-react";

const MenuCategories = ({ category, setCategory }) => {

  return (
    <div className="px-20 pt-24 pb-10">
      <div className="flex flex-col gap-4 w-3/5">
        <h1 className="text-4xl font-bold uppercase">explore our menu</h1>
        <p className="font-semibold text-gray-600 leading-5">
          Explore a delicious selection of meals inspired by authentic recipes
          and made with fresh ingredients. Every dish is carefully prepared to
          bring you the perfect balance of flavor and quality.
        </p>
      </div>

      <div className="flex gap-10 pt-15 w-full overflow-x-auto hide-scrollbar px-2">
        {menuData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="flex flex-col gap-4 cursor-pointer w-full"
            >
              <div
              onClick={()=>{
                setCategory(prev=>prev===elem.categoryName?"All":elem.categoryName)
              }}
              className="imgStyle h-40 w-40 rounded-full object-center object-cover overflow-hidden ">
                <img className={`h-full w-full rounded-full ${category===elem.categoryName?"activeImg":""}`} src={elem.img} />
              </div>
              <h2 className="text-center text-lg font-semibold text-gray-600 tracking-wide">
                {elem.categoryName}
              </h2>
            </div>
          );
        })}
      </div>
      <div className="h-[1.5px] w-full bg-gray-300 mt-15"></div>
    </div>
  );
};

export default MenuCategories;