import React from "react";
import { Aye, AyeSlash, StrokeClose } from "../../../assets/Icons";
import { Link } from "react-router-dom";
import MainButton from "../../../Components/Buttons/MainButton";
import usePasswordToggle from "../../../Hooks/usePasswordToggle";

function RegisterModal({ isOpen, onClose, resetPasswordField }) {
  if (!isOpen) return null;

  // const handleSubmit = () => {
  //   alert("holla");
  // };

  // Password
  const { visibility, toggleVisibility } =
    usePasswordToggle(resetPasswordField);

  return (
    <div className="fixed inset-0 bg-[#0F0F0F]/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-2/5 p-8">
        {/* Close button */}
        <div className="h-fit flex justify-end">
          <button onClick={onClose}>
            <StrokeClose />
          </button>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-sm-h4 md:text-md-h4 lg:text-h4 uppercase tracking-widest font-derivia">
            get started
          </h4>
          <p className="text-small">Create your account now</p>
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
            <label htmlFor="whatsapp" className="block font-martel">
              Whatsapp<span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
              placeholder="Enter your whatsapp"
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
          <div className="space-y-3 mt-4">
            <label htmlFor="email" className="block font-martel">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={visibility.confirmPassword ? "password" : "text"}
                className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
                placeholder="Enter your password"
              />
              <div
                onClick={() => toggleVisibility("confirmPassword")}
                className="absolute -translate-y-1/2 right-5 top-1/2 opacity-40 cursor-pointer"
              >
                {visibility.confirmPassword ? <AyeSlash /> : <Aye />}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <MainButton label={"sign up"} width="full" />
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

export default RegisterModal;
