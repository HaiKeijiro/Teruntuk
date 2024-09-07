import React from "react";
import SidebarTemplate from "../../Layouts/SidebarTemplate";
import PreviewImage from "../../assets/preview.png";

function EditUndangan() {
  return (
    <div className="md:flex">
      <div className="flex-grow relative">
        <img src={PreviewImage} alt="preview.png" />
      </div>
      <SidebarTemplate />
    </div>
  );
}

export default EditUndangan;
