import React from "react";

function Banner({ title, desc }) {
  return (
    <div className="bg-[#F5F1EE] w-full lg:h-[60vh] relative grid px-10 py-20">
      <div className="m-auto flex flex-col items-center gap-y-5">
        <h1 className="text-sm-h1 md:text-md-h1 lg:text-h1 uppercase tracking-widest font-derivia md:w-4/6 md:text-center">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Banner;
