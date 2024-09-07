import React from "react";

const FormStep = ({ step }) => {
  switch (step) {
    case 0:
      return <StepContent title="Pasangan" fields={pairingFields} />;
    case 1:
      return <StepContent title="Acara" fields={eventFields} />;
    case 2:
      return <StepContent title="Additional" fields={additionalFields} />;
    default:
      return <div>Unknown Step</div>;
  }
};

const StepContent = ({ title, fields }) => (
  <div className="bg-[#F5F1EE] p-10 rounded-sm">
    <h4 className="text-sm-h4 md:text-md-h4 lg:text-h4 mb-4 uppercase font-medium">{title}</h4>
    <form className="grid grid-cols-2 gap-4 ">
      {fields.map((field, index) => (
        <FormField key={index} {...field} />
      ))}
    </form>
  </div>
);

const FormField = ({
  label,
  type = "text",
  textarea,
  placeholder = "",
  select,
}) => (
  <div className="mb-4">
    <label className="block mb-2 capitalize">
      {label}
      <span className="text-red-500">*</span>
    </label>
    {textarea ? (
      <textarea
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
      ></textarea>
    ) : select ? (
      <select className="w-full border border-gray-300 px-4 py-2 rounded">
        <option value="" disabled selected>
          Please select
        </option>
        {/* Add options here */}
      </select>
    ) : (
      <input
        type={type}
        className="w-full border border-gray-300 px-4 py-2 rounded"
        placeholder={placeholder}
      />
    )}
  </div>
);

const pairingFields = [
  {
    label: "Nama lengkap mempelai pria",
    type: "text",
    placeholder: "Eg: John Doe",
  },
  {
    label: "Nama Lengkap Mempelai Wanita",
    type: "text",
    placeholder: "Eg: Maria Doe",
  },
  { label: "Nama Panggilan", type: "input", placeholder: "Eg: John" },
  { label: "Nama Panggilan", type: "input", placeholder: "Eg: Maria" },
  { label: "Putra ke -", type: "number", placeholder: "Eg: 1" },
  { label: "Putri ke -", type: "number", placeholder: "Eg: 2" },
  { label: "Ayah Mempelai Pria", type: "input", placeholder: "Eg: Joko" },
  { label: "Ayah Mempelai Wanita", type: "input", placeholder: "Eg: Anwar" },
  { label: "Ibu Mempelai Pria", type: "input", placeholder: "Eg: Kona" },
  { label: "Ibu Mempelai Wanita", type: "input", placeholder: "Eg: Kana" },
  { label: "Username Instagram", type: "input", placeholder: "@cakrajiya" },
  { label: "Username Instagram", type: "input", placeholder: "@wulan" },
  {
    label: "Tentang Pasangan",
    textarea: true,
    placeholder: "Happy marriageeee!",
  },
];

const eventFields = [
  { label: "nama acara", type: "text" },
  { label: "deskripsi acara", textarea: true },
  { label: "mulai pada", type: "date" },
  { label: "selesai pada", type: "date" },
  // fix ini
  { label: "zona waktu", type: "date" },
  { label: "google maps", type: "date" },
];

const additionalFields = [
  { label: "Musik", type: "file" },
  { label: "Gambar cover", type: "file" },
  { label: "Foto mempelai pria & wanita", type: "file" },
  { label: "Galeri", type: "file" },
  { label: "Domain", type: "text", placeholder: "https://themarriage" },
];

export default FormStep;
