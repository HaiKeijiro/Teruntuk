import React, { useState } from "react";
import DashboardImage from "../../assets/template/sorliene/preview.png";
import { DotsMenu, Trash } from "../../assets/Icons";
import EditButton from "../Buttons/EditButton";
import MainButton from "../Buttons/MainButton";
import OptionButton from "../Buttons/OptionButton";

function DashboardCard() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = () => {
    setDeleteModal(!deleteModal);
  };

  const handleMenu = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <div className="">
      <div className="max-h-[510px] py-20 grid">
        <img
          src={DashboardImage}
          alt="dashboard-template.png"
          className="w-[200px] overflow-hidden m-auto"
        />
      </div>
      <div className="mt-5 relative">
        <div className="flex items-center justify-between pb-5">
          <label
            htmlFor="active?"
            className="capitalize bg-[#0F0F0F]/30 text-white text-small px-4 py-1 rounded-md"
          >
            belum aktif
          </label>
          <button className="cursor-pointer" onClick={handleMenu}>
            <DotsMenu />
          </button>
        </div>
        <div className="">
          <h5 className="text-sm-h5 md:text-md-h5 lg:text-h5 font-martel">Michael</h5>
          <p>@incognito.com</p>
        </div>
        <div className="w-full h-full mt-6 flex gap-x-4">
          <EditButton label="edit" width="full" />
          <MainButton label="aktifkan" width="full" directTo="/dashboard/aktivasi" />
        </div>

        {/* Menu */}
        <div
          className={`absolute inset-0 h-0 bg-white flex flex-col justify-center items-center gap-4 ${
            menuClicked ? "h-full border-2 border-main" : ""
          }`}
        >
          {menuClicked ? (
            <>
              <button className="w-14" onClick={handleDelete}>
                <Trash color="#9A7058" />
              </button>
              <OptionButton label="rsvp" directTo="reservation-list" />
              <button onClick={() => setMenuClicked(false)}>Cancel</button>
            </>
          ) : null}
        </div>

        {/* Delete Confirmation Modal */}
        {deleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded shadow-lg flex flex-col items-center">
              <p className="mb-4 text-center">
                Kamu yakin ingin menghapus template ini?
              </p>
              <div className="flex gap-4 mt-2">
                <button onClick={() => setDeleteModal(false)}>
                  <MainButton label="cancel" />
                </button>
                <button>
                  <OptionButton label="hapus" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardCard;
