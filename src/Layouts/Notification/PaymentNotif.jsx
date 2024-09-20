import React from "react";
import { Close } from "../../assets/Icons";

const PaymentNotif = ({ isOpen, status, message, type, onClose }) => {
  if (!isOpen) return null;
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed w-2/5 h-fit top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-md text-white ${bgColor} z-50`}
    >
      <div>
        <div className="flex justify-end">
          <button onClick={onClose}>
            <Close />
          </button>
        </div>
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-h2">{status}</h2>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotif;
