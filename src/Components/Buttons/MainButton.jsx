import React from "react";
import { Link } from "react-router-dom";

function MainButton({ label, width = "fit", onclick, directTo }) {
  return (
    <Link
      to={directTo}
      className={`w-${width} h-fit px-5 py-3 bg-main text-white rounded-md tracking-widest uppercase text-center`}
      onClick={onclick}
    >
      {label}
    </Link>
  );
}

export default MainButton;
