import React from "react";
import PreviewImage from "../../assets/preview.png";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../Components/Buttons/MainButton";
import ArrowLeft from "../../assets/testimonial/testimonial-arrow-left.png";

function Preview() {

  return (
    <div className="relative w-full">
      <img src={PreviewImage} alt="preview-img.png" className="w-full" />
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8">
        <Link to={"template-undangan"} className="z-50">
          <img src={ArrowLeft} alt="arrow-left.png" />
        </Link>
        <MainButton
          label={"gunakan template"}
          directTo={"buat-undangan"}
        />
      </div>
    </div>
  );
}

export default Preview;
