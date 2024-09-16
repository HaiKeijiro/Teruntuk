import React from "react";
import Navbar from "../Layouts/Navbar";
import MainButton from "../Components/Buttons/MainButton";
import usePasswordToggle from "../Hooks/usePasswordToggle";
import { Aye, AyeSlash } from "../assets/Icons";

function ProfilePage({ resetPasswordField }) {
  const { visibility, toggleVisibility } =
    usePasswordToggle(resetPasswordField);

  return (
    <div className="w-full h-fit grid bg-[#F5F1EE]">
      {/* Navbar */}
      <Navbar icon="black" />

      {/* Forms */}
      <div className="m-auto w-[90%] space-y-10 md:mt-28">
        {/* Informasi profile */}
        <div className="bg-white mx-auto p-6">
          <h6 className="text-h6 capitalize font-medium">informasi profile</h6>

          <div className="mt-5 space-y-2">
            <div>
              <label htmlFor="" className="capitalize">
                name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="capitalize">
                email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="capitalize">
                whatsapp
              </label>
              <input
                type="number"
                className="w-full border border-gray-300 px-4 py-2 rounded"
              />
            </div>
          </div>

          <div className="mt-10">
            <MainButton label="simpan" />
          </div>
        </div>
        {/* Perbarui password */}
        <div className="bg-white mx-auto p-6">
          <h6 className="text-h6 capitalize font-medium">perbarui password</h6>
          <div className="mt-5 space-y-2">
            <div>
              <label htmlFor="" className="capitalize">
                current password
              </label>
              <div className="relative">
                <input
                  type={visibility.password ? "password" : "text"}
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                />
                <div
                  onClick={() => toggleVisibility("password")}
                  className="absolute -translate-y-1/2 right-5 top-1/2 opacity-40 cursor-pointer"
                >
                  {visibility.password ? <AyeSlash /> : <Aye />}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="" className="capitalize">
                new password
              </label>
              <div className="relative">
                <input
                  type={visibility.newPassword ? "password" : "text"}
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                />
                <div
                  onClick={() => toggleVisibility("newPassword")}
                  className="absolute -translate-y-1/2 right-5 top-1/2 opacity-40 cursor-pointer"
                >
                  {visibility.newPassword ? <AyeSlash /> : <Aye />}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="" className="capitalize">
                confirm password
              </label>
              <div className="relative">
                <input
                  type={visibility.confirmPassword ? "password" : "text"}
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
                />
                <div
                  onClick={() => toggleVisibility("confirmPassword")}
                  className="absolute -translate-y-1/2 right-5 top-1/2 opacity-40 cursor-pointer"
                >
                  {visibility.confirmPassword ? <AyeSlash /> : <Aye />}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <MainButton label="simpan" />
          </div>
        </div>
        {/* Hapus akun */}
        <div className="bg-white mx-auto p-6">
          <h6 className="text-h6 capitalize font-medium">hapus akun anda</h6>
          <p className="font-mulish">
            Saat anda menghapus akun ini, semua data anda akan di hapus secara
            permanen.
          </p>
          <button className="mt-5 px-4 py-3 bg-red-500 text-white rounded-md tracking-widest uppercase text-center">
            hapus akun
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
