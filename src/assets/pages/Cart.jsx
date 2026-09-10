import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { X } from "lucide-react";
import { IndianRupee } from "lucide-react";

const Cart = () => {
  const { cartItems, foodList, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const handleOrder = () => {
    if (getTotalCartAmount() > 0) {
      alert("Thank you for your order! 🎉");
    } else {
      alert("Your cart is empty. Please add food to your cart 🍕");
    }
  };

  return (
    <div className="h-auto pt-24 px-20">
      <div className="mb-20">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] font-semibold text-gray-500">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <div className="h-[1.5px] w-full bg-gray-300"></div>

        {foodList.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-y-10 font-semibold"
              >
                <img
                  className="h-16 w-16 rounded object-cover flex justify-center items-center my-1"
                  src={item.img}
                  alt=""
                />
                <p>{item.name}</p>
                <p className="flex items-center justify-start">
                  <IndianRupee size={15} />
                  {item.price}
                </p>
                <p className="mx-6">{cartItems[item.id]}</p>
                <p className="mx-2">{item.price * cartItems[item.id]}</p>
                <p className="mx-6 cursor-pointer">
                  <X onClick={() => removeFromCart(item.id)} />
                </p>
              </div>
            );
          }
        })}
      </div>

      <div className="flex justify-between gap-32">
        <div className="flex flex-col gap-3 w-1/2">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <div className="h-[1.5px] w-full bg-gray-300"></div>

            <div className="flex justify-between items-center">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <div className="h-[1.5px] w-full bg-gray-300"></div>

            <div className="flex justify-between items-center">
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            onClick={handleOrder}
            className="rounded border-gray-400 p-1 w-2xs py-1.5 mt-7 bg-orange-700 text-gray-200 font-semibold border-none cursor-pointer hover:bg-orange-600 uppercase"
          >
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
