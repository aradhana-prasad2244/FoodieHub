import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <div className="h-auto w-full bg-orange-900 text-white px-20 pt-10 pb-2 mt-20 flex flex-col gap-7 justify-center items-center sticky">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-30">
        <div className="flex flex-col gap-3">
          <Link to='./'>
          <h1 className="text-black text-5xl font-bold  rounded-full px-3">
            Foodie<span className="text-orange-700">Hub</span>
          </h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            necessitatibus praesentium saepe laborum reiciendis, laudantium esse
            sed provident omnis ut sequi temporibus aliquam similique doloribus?
            Recusandae numquam magni earum in.
          </p>
          <ul className="flex gap-3">
            <li>
              facebook
            </li>
            <li>
                Instagram
            </li>
            <li>
                Whatsapp
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 items-center">
            <h2 className="uppercase text-2xl font-bold">company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3 items-center">
            <h2 className="uppercase text-2xl font-bold">get in touch</h2>
            <ul>
                <li>+91 98765 43210</li>
                <li>contact@foodiehub.com</li>
            </ul>
        </div>
      </div>
      <hr className="w-full" />
      <p className="text-sm font-semibold">Copyright 2026 &copy; Foodiehub.com-All Right Reserved.</p>
    </div>
  );
};

export default Footer;
