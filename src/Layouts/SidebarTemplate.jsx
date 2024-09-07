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
const SidebarItem = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => setIsOpen(!isOpen);

  return (
    <div className="font-mulish">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-gray-100 border-b border-gray-300"
        onClick={toggleItem}
      >
        <div className="flex items-center gap-4">
          {icon}
          <span>{title}</span>
        </div>
        <span
          className={`transition-transform duration-100 ${
            isOpen ? "-rotate-180" : "rotate-0"
          }`}
        >
          <ArrowDown color="#505050" />
        </span>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
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
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);
  const [isRSVPVisible, setIsRSVPVisible] = useState(false); // Example for another toggle

  return (
    <div className="bg-white w-full md:w-1/4 border-r border-gray-300 md:fixed top-0 right-0 bottom-0 flex flex-col justify-between overflow-y-scroll">
      <div>
        <SidebarItem title="Kalimat" icon={<MDI_Love />}>
          <TextAreaInput label="Text Pembuka" placeholder="Text Pembuka" />
        </SidebarItem>

        <SidebarItem title="Detail Mempelai Pria" icon={<Man />}>
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

        <SidebarItem title="Detail Mempelai Wanita" icon={<Woman />}>
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

        <SidebarItem title="Tanggal & Lokasi Acara" icon={<Date />}>
          <TextInput label="Nama Acara" placeholder="EG: Pernikahan" />
          <TextAreaInput label="Description" placeholder="Text Pembuka" />
          <TextInput label="Mulai Pada" type="date" />
          <TextInput label="Selesai Pada" type="date" />
          <TextInput label="Google Maps" />
          <TextInput label="Nama Gedung/Lokasi" />
          <TextInput label="Nama Kota" />
          <TextAreaInput label="Alamat" />
        </SidebarItem>

        <SidebarItem title="Images & Music" icon={<Camera />} />

        <SidebarItem title="Countdown" icon={<CountDown />}>
          <ToggleSwitch
            label="Munculkan Countdown"
            checked={isCountdownVisible}
            onChange={() => setIsCountdownVisible(!isCountdownVisible)}
          />
        </SidebarItem>

        <SidebarItem title="RSVP" icon={<Reservation />}>
          <ToggleSwitch
            label="Munculkan RSVP tanggapan"
            checked={isRSVPVisible}
            onChange={() => setIsRSVPVisible(!isRSVPVisible)}
          />
        </SidebarItem>

        <SidebarItem title="Wallet" icon={<Wallet />}>
          <TextInput label="Bank Name" placeholder="BCA" />
          <TextInput label="Nomor Rekening" type="number" />
          <TextInput label="Nama Rekening" />
        </SidebarItem>
        <SidebarItem title="Advanced" icon={<DevMode />}>
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
