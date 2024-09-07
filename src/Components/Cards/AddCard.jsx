import React from "react";
import { Plus } from "../../assets/Icons";

function AddCard() {
  return (
    <div className="bg-[#9A7058]/10 h-[510px] flex items-center justify-center">
      <form
        action="template-undangan/buat-undangan"
        className="flex flex-col items-center justify-center gap-y-4"
      >
        <button className="w-14 h-14 bg-white flex items-center justify-center rounded-full">
          <Plus color="#AD9F8D" />
        </button>
        <p className="capitalize text-center">
          Buat undangan <br /> sekarang
        </p>
      </form>
    </div>
  );
}

export default AddCard;
