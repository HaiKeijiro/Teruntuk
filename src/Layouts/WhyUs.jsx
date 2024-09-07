import React from "react";
import { Reason1, Reason2, Reason3, Reason4, Reason5 } from "../assets/Icons";

function WhyUs() {
  return (
    <div className="flex flex-col items-center py-10 space-y-14">
      <h2 className="text-sm-h2 md:text-md-h2 lg:text-h2 font-derivia tracking-widest text-center uppercase">
        Kenapa Website <br /> Undangan Online?
      </h2>
      <div className="grid grid-cols-5 gap-4 p-4 lg:gap-x-20">
        <div className="flex flex-col items-center gap-y-2"><Reason1 /><p>Biaya Terjangkau</p></div>
        <div className="flex flex-col items-center gap-y-2"><Reason2 /><p>Proses Cepat</p></div>
        <div className="flex flex-col items-center gap-y-2"><Reason3 /><p>Lebih Mudah</p></div>
        <div className="flex flex-col items-center gap-y-2"><Reason4 /><p>Terlihat Modern</p></div>
        <div className="flex flex-col items-center gap-y-2"><Reason5 /><p>Tidak Perlu Kertas</p></div>
      </div>
    </div>
  );
}

export default WhyUs;
