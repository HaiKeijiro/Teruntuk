import React from "react";
import { Link } from "react-router-dom";

function MainButton({ label, width, px = 5, py = 3, onclick, directTo }) {
  return (
    <Link
      to={directTo}
      className={`w-${
        width === "full" ? "full" : "fit"
      } h-fit px-${px} py-${py} bg-main text-white rounded-md tracking-widest uppercase text-center`}
      onClick={onclick}
    >
      {label}
    </Link>
  );
}

export default MainButton;
