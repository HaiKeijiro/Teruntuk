import React from "react";
import ReactDOM from "react-dom";
import { StrokeClose } from "../../assets/Icons";
import MainButton from "../../Components/Buttons/MainButton";

const AddModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-[40%] h-fit p-4 rounded shadow-lg z-10 flex flex-col items-center gap-y-4">
        <button className="ml-auto" onClick={closeModal}>
          <StrokeClose />
        </button>

        {/* Title */}
        <h5 className="text-sm-h5 md:text-md-h5 lg:text-h5 uppercase tracking-widest">add invitation</h5>

        {/* Input */}
        <div className="grid pb-10 w-4/5">
          <div className="space-y-2 mb-4 uppercase">
            <label>name</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
              placeholder="john doe"
            />
          </div>
          <div className="space-y-2 mb-4 uppercase">
            <label>email</label>
            <input
              type="email"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
              placeholder="john.doe@gmail.com"
            />
          </div>
          <div className="space-y-2 uppercase">
            <label>whatsapp</label>
            <input
              type="text"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
              placeholder="081 782103u1u82"
            />
          </div>
          <button className="mt-6">
            <MainButton label="add invitation" />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default AddModal;
