import React, { useState } from "react";
import GmapInput from "./GmapInput";

// Main component that switches between different form steps
const FormStep = ({ step }) => {
  const steps = [
    { title: "Pasangan", fields: pairingFields },
    { title: "Acara", fields: eventFields },
    { title: "Additional", fields: additionalFields },
  ];

  return step < steps.length ? (
    <StepContent title={steps[step].title} fields={steps[step].fields} />
  ) : (
    <div>Unknown Step</div>
  );
};

// StepContent component displays the fields of the current form step
const StepContent = ({ title, fields }) => (
  <div className="bg-[#F5F1EE] p-10 rounded-sm">
    <h4 className="text-sm-h4 md:text-md-h4 lg:text-h4 mb-4 uppercase font-medium">
      {title}
    </h4>
    <form className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-4">
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
    </form>
  </div>
);

// A reusable component for different field types (input, textarea, select)
const FormField = ({
  label,
  type = "text",
  textarea,
  placeholder = "",
  select,
  options = [], // dynamic select options
  component: Component,
}) => (
  <div className="mb-4">
    <label className="block mb-2 capitalize">
      {label}<span className="text-red-500">*</span>
    </label>
    {textarea ? (
      <textarea
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
        aria-label={label}
      />
    ) : select ? (
      <select
        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none"
        aria-label={label}
      >
        <option value="" disabled selected>
          Please select
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : Component ? (
      <Component />
    ) : (
      <input
        type={type}
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
        aria-label={label}
      />
    )}
  </div>
);

// Dynamic field definitions for each form step
const pairingFields = [
  {
    label: "Nama lengkap mempelai pria",
    type: "text",
    placeholder: "Eg: John Doe",
  },
  {
    label: "Nama lengkap mempelai wanita",
    type: "text",
    placeholder: "Eg: Maria Doe",
  },
  { label: "Nama panggilan pria", type: "text", placeholder: "Eg: John" },
  { label: "Nama panggilan wanita", type: "text", placeholder: "Eg: Maria" },
  { label: "Putra ke -", type: "number", placeholder: "Eg: 1" },
  { label: "Putri ke -", type: "number", placeholder: "Eg: 2" },
  { label: "Ayah mempelai pria", type: "text", placeholder: "Eg: Joko" },
  { label: "Ayah mempelai wanita", type: "text", placeholder: "Eg: Anwar" },
  { label: "Ibu mempelai pria", type: "text", placeholder: "Eg: Kona" },
  { label: "Ibu mempelai wanita", type: "text", placeholder: "Eg: Kana" },
  { label: "Username Instagram pria", type: "text", placeholder: "@cakrajiya" },
  { label: "Username Instagram wanita", type: "text", placeholder: "@wulan" },
  {
    label: "Tentang pasangan",
    textarea: true,
    placeholder: "Happy marriageeee!",
  },
];

const eventFields = [
  { label: "Nama acara", type: "text" },
  { label: "Deskripsi acara", textarea: true },
  { label: "Mulai pada", type: "datetime-local" },
  { label: "Selesai pada", type: "datetime-local" },
  {
    label: "Zona waktu",
    select: true,
    options: [
      "(UTC+07:00) WIB - Waktu Indonesia Barat",
      "(UTC+08:00) WITA - Waktu Indonesia Tengah",
      "(UTC+09:00) WIT - Waktu Indonesia Timur",
    ],
  },
  {
    label: "Lokasi",
    component: GmapInput,
    placeholder: "Search for a location",
  },
  {
    label: "Nama Gedung/Lokasi",
    type: "text",
  },
  {
    label: "Kota",
    type: "text",
  },
  {
    label: "Alamat",
    textarea: true
  },
];

const additionalFields = [
  { label: "Musik", type: "file" },
  { label: "Gambar cover", type: "file" },
  { label: "Foto mempelai pria & wanita", type: "file" },
  { label: "Galeri", type: "file" },
  { label: "Domain", type: "text", placeholder: "https://themarriage" },
];

export default FormStep;
