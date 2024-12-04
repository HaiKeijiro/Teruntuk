import React from "react";
import SidebarTemplate from "../../Layouts/SidebarTemplate";
import PreviewImage from "../../assets/templates/preview/Charm.png";
import { ArrowDown } from "../../assets/Icons";
import { Link } from "react-router-dom";
import ROUTES from "../../../api/routes"

function EditUndangan() {
  return (
    <div className="flex relative">
      {/* Back button */}
      <button className="fixed top-5 left-5 right-0 bg-main rounded-full p-2 w-fit z-50 rotate-90">
        <Link to={ROUTES.DASHBOARD}><ArrowDown color="white" /></Link>
      </button>

      {/* Main content */}
      <div className="flex-grow">
        <img src={PreviewImage} alt="preview.png" className="w-full" />
      </div>

      {/* Sidebar */}
      <SidebarTemplate />
    </div>
  );
}

export default EditUndangan;
