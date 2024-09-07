import React from "react";
import { Link } from "react-router-dom";

function OptionButton({ label, width = "fit", directTo }) {
  return (
    <Link
      to={directTo}
      className={`w-${width} px-5 py-3 border border-main text-main rounded-md tracking-widest uppercase`}
    >
      {label}
    </Link>
  );
}

export default OptionButton;
