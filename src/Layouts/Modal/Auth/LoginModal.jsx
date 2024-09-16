import React, { useEffect, useState } from "react";
import { Aye, AyeSlash, StrokeClose } from "../../../assets/Icons";
import { Link } from "react-router-dom";
import MainButton from "../../../Components/Buttons/MainButton";
import usePasswordToggle from "../../../Hooks/usePasswordToggle";

function LoginModal({ isOpen, onClose, resetPasswordField }) {
  if (!isOpen) return null;

  // const handleSubmit = () => {
  //   alert("holla");
  // };

  // Password
  const { visibility, toggleVisibility } =
    usePasswordToggle(resetPasswordField);

  return (
    <div className="fixed inset-0 bg-[#0F0F0F]/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-4/5 p-4 md:w-2/5 md:p-8">
        {/* Close button */}
        <div className="h-fit flex justify-end">
          <button onClick={onClose}>
            <StrokeClose />
          </button>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-sm-h4 md:text-md-h4 lg:text-h4 uppercase tracking-widest font-derivia">
            welcome back
          </h4>
          <p className="text-small">Please enter your details</p>
        </div>

        {/* Input form */}
        <form
          // onSubmit={handleSubmit}
          className="w-4/5 mx-auto mt-10 normal-case"
        >
          <div className="space-y-3">
            <label htmlFor="email" className="block font-martel">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-3 mt-4">
            <label htmlFor="email" className="block font-martel">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={visibility.password ? "password" : "text"}
                className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
                placeholder="Enter your password"
              />
              <div
                onClick={() => toggleVisibility("password")}
                className="absolute -translate-y-1/2 right-5 top-1/2 opacity-40 cursor-pointer"
              >
                {visibility.password ? <AyeSlash /> : <Aye />}
              </div>
            </div>
          </div>

          {/* Remember me & forgot password */}
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center gap-x-1 w-fit">
              <input type="checkbox" />
              <span className="font-martel">Remember me</span>
            </label>
            <Link to={""} className="font-martel text-[#72726C]">
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <div className="mt-6">
            <MainButton label={"sign in"} width="full" />
          </div>

          {/* Create account */}
          <p className="text-small text-center mt-2">
            {"Don’t have an account yet?"}{" "}
            <Link className="font-martel text-small font-bold text-main">
              Try for free!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
