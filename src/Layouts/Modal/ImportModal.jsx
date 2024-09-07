import React from "react";
import ReactDOM from "react-dom";
import { StrokeClose } from "../../assets/Icons";
import MainButton from "../../Components/Buttons/MainButton";

const ImportModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div className="bg-black/50 fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-[30%] h-fit p-4 rounded shadow-lg z-10 flex flex-col items-center gap-y-4">
        <button className="ml-auto" onClick={closeModal}>
          <StrokeClose />
        </button>
        <h5 className="text-sm-h5 md:text-md-h5 lg:text-h5 uppercase tracking-widest">import invitation</h5>
        <button>
          <label
            htmlFor="uploadInput"
            className="uppercase tracking-widest cursor-pointer border border-[#505050] px-5 py-3 rounded-md"
          >
            choose file
          </label>
          <input type="file" id="uploadInput" className="hidden" />
        </button>
        <small className="text-small">OR</small>
        <span className="text-main font-bold">Download Contoh File</span>
        <MainButton label="import invitation" />
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default ImportModal;
