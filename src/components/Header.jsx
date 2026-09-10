import React from "react";

const Header = () => {
  return (
    <div className="h-screen w-full px-15 bg-[url(https://i.pinimg.com/1200x/c6/5a/c0/c65ac00ceef272116c7e7c56b7cecdc8.jpg)] bg-no-repeat bg-cover animate-fadeIn">
      <div>
        <div className="pt-50 flex flex-col justify-between gap-5">
          <h4 className="uppercase text-orange-700 font-semibold text-xl">
            experience fine dininning
          </h4>
          <h1 className="font-semibold text-6xl text-white font-serif">
            Delicious Food, <br />
            Unforgettable{" "}
            <span className="text-orange-700 font-semibold">Moments</span>
          </h1>
          <div className="text-gray-200">
            <p>A perfect blend of taste, art, and ambiance.</p>
            <p>Crafted to delight your sense.</p>
          </div>
        </div>

          <div className="mt-10 flex flex-col gap-2 text-white">
            <p className="text-4xl uppercase tracking-wide text-orange-700 font-extrabold">
              Scroll down to explore our menu
            </p>

            <span className="text-5xl font-extrabold ml-50 animate-bounce">↓</span>
          </div>
        </div>
      </div>
  );
};

export default Header;
