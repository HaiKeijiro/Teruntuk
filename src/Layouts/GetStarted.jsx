import React from "react";
import MainButton from "../Components/Buttons/MainButton"
import OptionButton from "../Components/Buttons/OptionButton"

function GetStarted() {
  return (
    <div className="bg-[#F5F1EE] py-20 grid">
      <div className="m-auto flex flex-col items-center gap-y-6">
        <h2 className="text-sm-h2 md:text-md-h2 lg:text-h2 text-center font-derivia uppercase tracking-widest">
          let’s get started <br /> on something great
        </h2>
        <div className="space-x-5"><MainButton label={"buat undangan"} /><OptionButton label={"hubungi kami"} /></div>
      </div>
    </div>
  );
}

export default GetStarted;
