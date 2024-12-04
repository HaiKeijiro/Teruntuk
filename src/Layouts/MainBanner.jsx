import React from "react";
import BannerImg from "../assets/banner.png";
import MainButton from "../Components/Buttons/MainButton";
import ROUTES from "../../api/routes";

function MainBanner() {
  return (
    <div className="w-full lg:h-screen relative">
      <img
        src={BannerImg}
        alt="banner.png"
        className="w-full h-full object-cover"
      />
      <div className="bg-[#292424]/40 grid absolute inset-0 z-10">
        <div className="m-auto flex flex-col items-center gap-y-11">
          <h1 className="text-sm-1 md:text-md-h1 lg:text-h1 font-derivia uppercase tracking-widest text-white m-auto lg:pt-16 w-4/5 text-center">
            solusi modern undangan pernikahan
          </h1>
          <MainButton directTo={ROUTES.BUAT_UNDANGAN} label={"buat undangan"} />
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
