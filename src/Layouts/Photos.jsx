import React from "react";
import DecorationImage1 from "../assets/frontpage/frontpage-decoration-1.jpg";
import DecorationImage2 from "../assets/frontpage/frontpage-decoration-2.jpg";
import DecorationImage3 from "../assets/frontpage/frontpage-decoration-3.jpg";
import DecorationImage4 from "../assets/frontpage/frontpage-decoration-4.jpg";
import DecorationImage5 from "../assets/frontpage/frontpage-decoration-5.jpg";

function Photos() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-5 w-4/5 mx-auto lg:flex lg:w-full gap-x-10 justify-center items-center p-10">
      <img src={DecorationImage1} alt="decoration.jpg" className="lg:pb-16" />
      <img src={DecorationImage2} alt="decoration.jpg" className="lg:pt-16" />
      <img src={DecorationImage3} alt="decoration.jpg" className="lg:pb-16" />
      <img src={DecorationImage4} alt="decoration.jpg" className="lg:pt-16" />
      <img src={DecorationImage5} alt="decoration.jpg" className="lg:pb-16" />
    </div>
  );
}

export default Photos;
