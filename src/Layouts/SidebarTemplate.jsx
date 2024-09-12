import React, { useState } from "react";
import {
  ArrowDown,
  Desktop,
  Mobile,
  Tablet,
  MDI_Love,
  Date,
  Camera,
  Wallet,
  CountDown,
  DevMode,
  Reservation,
  Man,
  Woman,
} from "../assets/Icons";
import MainButton from "../Components/Buttons/MainButton";

// SidebarItem Component
const SidebarItem = ({ title, children, icon, isCollapsed }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => setIsOpen(!isOpen);

  return (
    <div className={`font-mulish ${isCollapsed ? "text-center" : ""}`}>
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 border-b border-gray-300"
        onClick={toggleItem}
      >
        <div className="flex items-center gap-4">
          {icon}
          {!isCollapsed && <span>{title}</span>}
        </div>
        {!isCollapsed && (
          <span
            className={`transition-transform duration-100 ${
              isOpen ? "-rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDown color="#505050" />
          </span>
        )}
      </div>
      {isOpen && !isCollapsed && <div className="p-4">{children}</div>}
    </div>
  );
};

// TextInput Component
const TextInput = ({ label, placeholder, type = "text" }) => (
  <div className="space-y-2 mb-4">
    <label>{label}</label>
    <input
      type={type}
      className="w-full p-2 border border-gray-300 rounded-md"
      placeholder={placeholder}
    />
  </div>
);

// TextAreaInput Component
const TextAreaInput = ({ label, placeholder }) => (
  <div className="space-y-2 mb-4">
    <label>{label}</label>
    <textarea
      className="w-full h-32 p-2 border border-gray-300 rounded-md"
      placeholder={placeholder}
    />
  </div>
);

// ToggleSwitch Component
const ToggleSwitch = ({ label, checked, onChange }) => (
  <label className="flex items-center cursor-pointer">
    <div className="relative">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`block w-14 h-8 rounded-full ${
          checked ? "bg-main" : "bg-gray-300"
        }`}
      ></div>
      <div
        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${
          checked ? "translate-x-full bg-main" : ""
        }`}
      ></div>
    </div>
    <div className="ml-3 text-gray-700 font-medium">{label}</div>
  </label>
);

// Main SidebarTemplate Component
const SidebarTemplate = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-white border-r border-gray-300 top-0 bottom-0 right-0 flex flex-col justify-between overflow-y-scroll overflow-x-hidden transition-width duration-300 ${
        isCollapsed ? "w-[10%] md:w-[5%] overflow-y-hidden" : "w-1/2 md:w-1/4"
      } fixed`}
    >
      <div>
        <div className="w-full py-5 px-4 flex justify-between items-center">
          <h1
            className={`text-h6 uppercase font-bold ${
              isCollapsed ? "hidden" : ""
            }`}
          >
            Edit Undangan
          </h1>
          <button
            className="flex items-center justify-between uppercase font-medium bg-main px-2 py-1 rounded-md"
            onClick={toggleSidebar}
          >
            <h6 className={`${isCollapsed ? "hidden" : "text-white"}`}>Hide</h6>
            <div className={`${isCollapsed ? "rotate-90" : "-rotate-90"}`}>
              <ArrowDown color="white" />
            </div>
          </button>
        </div>

        <SidebarItem
          title="Kalimat"
          icon={<MDI_Love />}
          isCollapsed={isCollapsed}
        >
          <TextAreaInput label="Text Pembuka" placeholder="Text Pembuka" />
        </SidebarItem>

        <SidebarItem
          title="Detail Mempelai Pria"
          icon={<Man />}
          isCollapsed={isCollapsed}
        >
          <TextInput
            label="Nama lengkap mempelai pria"
            placeholder="Text Pembuka"
          />
          <TextInput label="Nama Panggilan" placeholder="EG: John" />
          <TextInput label="Putra ke -" placeholder="EG: Pertama" />
          <TextInput label="Ayah Mempelai Pria" placeholder="EG: Joko" />
          <TextInput label="Ibu Mempelai Pria" placeholder="EG: Kana" />
          <TextInput label="Username Instagram" placeholder="@cakrajaya" />
        </SidebarItem>

        <SidebarItem
          title="Detail Mempelai Wanita"
          icon={<Woman />}
          isCollapsed={isCollapsed}
        >
          <TextInput
            label="Nama lengkap mempelai wanita"
            placeholder="Text Pembuka"
          />
          <TextInput label="Nama Panggilan" placeholder="EG: Maya" />
          <TextInput label="Putri ke -" placeholder="EG: Pertama" />
          <TextInput label="Ayah Mempelai Wanita" placeholder="EG: Joko" />
          <TextInput label="Ibu Mempelai Wanita" placeholder="EG: Kana" />
          <TextInput label="Username Instagram" placeholder="@mayasaja" />
        </SidebarItem>

        <SidebarItem
          title="Tanggal & Lokasi Acara"
          icon={<Date />}
          isCollapsed={isCollapsed}
        >
          <TextInput label="Nama Acara" placeholder="EG: Pernikahan" />
          <TextAreaInput label="Description" placeholder="Text Pembuka" />
          <TextInput label="Mulai Pada" type="date" />
          <TextInput label="Selesai Pada" type="date" />
          <TextInput label="Google Maps" />
          <TextInput label="Nama Gedung/Lokasi" />
          <TextInput label="Nama Kota" />
          <TextAreaInput label="Alamat" />
        </SidebarItem>

        <SidebarItem
          title="Images & Music"
          icon={<Camera />}
          isCollapsed={isCollapsed}
        />

        <SidebarItem
          title="Countdown"
          icon={<CountDown />}
          isCollapsed={isCollapsed}
        >
          <ToggleSwitch
            label="Munculkan Countdown"
            checked={false}
            onChange={() => {}}
          />
        </SidebarItem>

        <SidebarItem
          title="RSVP"
          icon={<Reservation />}
          isCollapsed={isCollapsed}
        >
          <ToggleSwitch
            label="Munculkan RSVP tanggapan"
            checked={false}
            onChange={() => {}}
          />
        </SidebarItem>

        <SidebarItem title="Wallet" icon={<Wallet />} isCollapsed={isCollapsed}>
          <TextInput label="Bank Name" placeholder="BCA" />
          <TextInput label="Nomor Rekening" type="number" />
          <TextInput label="Nama Rekening" />
        </SidebarItem>
        <SidebarItem
          title="Advanced"
          icon={<DevMode />}
          isCollapsed={isCollapsed}
        >
          <TextAreaInput label="CSS" />
        </SidebarItem>
      </div>

      <div className="bg-[#505050] p-4 flex items-center justify-between">
        <MainButton label="Save" />
        <div className="flex items-center gap-x-4">
          <Desktop color="white" />
          <Tablet color="white" />
          <Mobile color="white" />
        </div>
      </div>
    </div>
  );
};

export default SidebarTemplate;
