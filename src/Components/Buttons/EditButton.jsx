import React from "react";
import { Link } from "react-router-dom";
import { Edit } from "../../assets/Icons";

function EditButton({ label, width }) {
  return (
    <Link
      className={`w-${width} h-fit px-5 py-3 border border-main text-main rounded-md tracking-widest uppercase flex items-center gap-x-2`}
    >
      <Edit /> {label}
    </Link>
  );
}

export default EditButton;
