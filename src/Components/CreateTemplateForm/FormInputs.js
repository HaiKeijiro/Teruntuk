import GmapInput from "../GmapInput";

export const pairingFields = [
  // Pairing fields
  {
    label: "Nama lengkap mempelai pria",
    type: "text",
    placeholder: "Eg: John Doe",
    gridCols: "col-span-6",
  },
  {
    label: "Nama lengkap mempelai wanita",
    type: "text",
    placeholder: "Eg: Maria Doe",
    gridCols: "col-span-6",
  },
  {
    label: "Nama panggilan pria",
    type: "text",
    placeholder: "Eg: John",
    gridCols: "col-span-6",
  },
  {
    label: "Nama panggilan wanita",
    type: "text",
    placeholder: "Eg: Maria",
    gridCols: "col-span-6",
  },
  {
    label: "Putra ke -",
    type: "number",
    placeholder: "Eg: 1",
    gridCols: "col-span-6",
  },
  {
    label: "Putri ke -",
    type: "number",
    placeholder: "Eg: 2",
    gridCols: "col-span-6",
  },
  {
    label: "Ayah mempelai pria",
    type: "text",
    placeholder: "Eg: Joko",
    gridCols: "col-span-6",
  },
  {
    label: "Ayah mempelai wanita",
    type: "text",
    placeholder: "Eg: Anwar",
    gridCols: "col-span-6",
  },
  {
    label: "Ibu mempelai pria",
    type: "text",
    placeholder: "Eg: Kona",
    gridCols: "col-span-6",
  },
  {
    label: "Ibu mempelai wanita",
    type: "text",
    placeholder: "Eg: Kana",
    gridCols: "col-span-6",
  },
  {
    label: "Username Instagram pria",
    type: "text",
    placeholder: "@cakrajiya",
    gridCols: "col-span-6",
  },
  {
    label: "Username Instagram wanita",
    type: "text",
    placeholder: "@wulan",
    gridCols: "col-span-6",
  },
  {
    label: "Tentang pasangan",
    textarea: true,
    placeholder: "Happy marriageeee!",
    gridCols: "col-span-12",
  },
];

export const eventFields = [
  // Event fields
  { label: "Nama acara", type: "text", gridCols: "col-span-12" },
  { label: "Deskripsi acara", textarea: true, gridCols: "col-span-12" },
  { label: "Mulai pada", type: "datetime-local", gridCols: "col-span-4" },
  { label: "Selesai pada", type: "datetime-local", gridCols: "col-span-4" },
  {
    label: "Zona waktu",
    select: true,
    options: [
      "(UTC+07:00) WIB - Waktu Indonesia Barat",
      "(UTC+08:00) WITA - Waktu Indonesia Tengah",
      "(UTC+09:00) WIT - Waktu Indonesia Timur",
    ],
    gridCols: "col-span-4",
  },
  {
    label: "Lokasi",
    component: GmapInput,
    placeholder: "Search for a location",
    gridCols: "col-span-12",
  },
  { label: "Nama Gedung/Lokasi", type: "text", gridCols: "col-span-6" },
  { label: "Kota", type: "text", gridCols: "col-span-6" },
  { label: "Alamat", textarea: true, gridCols: "col-span-12" },
];

export const additionalFields = [
  // Additional fields
  {
    label: "Domain",
    type: "text",
    placeholder: "https://themarriage",
    gridCols: "col-span-12",
  },
  { label: "Musik", type: "file", gridCols: "col-span-6" },
  { label: "Gambar cover", type: "file", gridCols: "col-span-6" },
  {
    label: "Foto mempelai pria & wanita",
    type: "file",
    gridCols: "col-span-6",
  },
  { label: "Galeri", type: "file", gridCols: "col-span-6" },
];
