import React from "react";
import Navbar from "../../Layouts/Navbar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <Navbar icon={"black"} isAdmin={"true"} />
      <div className="mt-20 h-fit flex flex-col items-center justify-center">
        <h2 className="text-h2">Welcome Admin!</h2>
        <p>Please click one of those nav links</p>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
