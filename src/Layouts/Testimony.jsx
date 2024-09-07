import React from "react";
import TestimonyImg from "../assets/testimonial/testimonial-image-1.webp";
import { Longleft, Longright } from "../assets/Icons";

function Testimony() {
  return (
    <div className="bg-[#F5F1EE] flex flex-col lg:flex-row justify-around items-center p-10 lg:px-20 lg:py-10">
      <img src={TestimonyImg} alt="testimony.png" className="w-[40vw]" />
      <div className="w-[30vw] space-y-6 text-center">
        <p className="text-[#72726C] tracking-widest uppercase font-medium text-small">
          october 28, 2022
        </p>
        <p>
          I love their service. So much good and elegant design and the price is
          just too cheap for all this goodness!
        </p>
        <p className="text-[#72726C] tracking-widest uppercase font-medium text-small">
          RACHEL & MARCUS
        </p>
        <div className="flex items-center justify-end pt-16">
          <Longleft />
          <p className="tracking-widest font-mulish text-small">01 / 04</p>
          <Longright />
        </div>
      </div>
    </div>
  );
}

export default Testimony;
