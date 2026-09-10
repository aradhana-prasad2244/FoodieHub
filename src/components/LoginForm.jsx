import React, { useState } from "react";
import { X } from "lucide-react";

const LoginForm = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black/70 fixed z-10">
      <form className="h-auto w-100 bg-white px-8 py-6 rounded-xl flex flex-col gap-5 justify-center" >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl">{currState}</h2>
          <X className="cursor-pointer" onClick={() => setShowLogin(false)} />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required className="border-2 rounded border-gray-300 px-3 py-1" />
          )}
          <input type="email" placeholder="Your Email" required className="border-2 rounded border-gray-300  px-3 py-1"  />
          <input type="password" placeholder="Password" className="border-2 rounded border-gray-300  px-3 py-1"  />
        </div>
        <button className="border-2 rounded border-gray-400 p-1 w-full py-1.5 bg-orange-700 text-gray-200 font-semibold border-none cursor-pointer hover:bg-orange-600">{currState === "Sign up" ? "Create account" : "Login"}</button>

        <div className="flex gap-2 items-start">
          <input className="mt-1.5 cursor-pointer" type="checkbox" required />
          <p className="leading-5 text-gray-500">By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrState("Sign up");
              }}
            className="text-orange-700 font-semibold cursor-pointer">
              Click here
            </span>
          </p>
        ) : (
          <p className="text-gray-500">
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")} className="text-orange-700 font-semibold cursor-pointer">Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
