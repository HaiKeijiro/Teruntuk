import GmapInput from "../GmapInput";

export const pairingFields = [
  // Pairing fields
  {
    label: "Nama lengkap mempelai pria",
    name: "fullPria",
    type: "text",
    placeholder: "Eg: John Doe",
    gridCols: "col-span-6",
  },
  {
    label: "Nama lengkap mempelai wanita",
    name: "fullWanita",
    type: "text",
    placeholder: "Eg: Maria Doe",
    gridCols: "col-span-6",
  },
  {
    label: "Nama panggilan pria",
    name: "panggilanPria",
    type: "text",
    placeholder: "Eg: John",
    gridCols: "col-span-6",
  },
  {
    label: "Nama panggilan wanita",
    name: "panggilanWanita",
    type: "text",
    placeholder: "Eg: Maria",
    gridCols: "col-span-6",
  },
  {
    label: "Putra ke -",
    name: "putraKe",
    type: "number",
    placeholder: "Eg: 1",
    gridCols: "col-span-6",
  },
  {
    label: "Putri ke -",
    name: "putriKe",
    type: "number",
    placeholder: "Eg: 2",
    gridCols: "col-span-6",
  },
  {
    label: "Ayah mempelai pria",
    name: "ayahPria",
    type: "text",
    placeholder: "Eg: Joko",
    gridCols: "col-span-6",
  },
  {
    label: "Ayah mempelai wanita",
    name: "ayahWanita",
    type: "text",
    placeholder: "Eg: Anwar",
    gridCols: "col-span-6",
  },
  {
    label: "Ibu mempelai pria",
    name: "ibuPria",
    type: "text",
    placeholder: "Eg: Kona",
    gridCols: "col-span-6",
  },
  {
    label: "Ibu mempelai wanita",
    name: "ibuWanita",
    type: "text",
    placeholder: "Eg: Kana",
    gridCols: "col-span-6",
  },
  {
    label: "Username Instagram pria",
    name: "igPria",
    type: "text",
    placeholder: "@cakrajiya",
    gridCols: "col-span-6",
  },
  {
    label: "Username Instagram wanita",
    name: "igWanita",
    type: "text",
    placeholder: "@wulan",
    gridCols: "col-span-6",
  },
  {
    label: "Tentang pasangan",
    name: "tentangPasangan",
    textarea: true,
    placeholder: "Happy marriageeee!",
    gridCols: "col-span-12",
  },
];

export const eventFields = [
  // Event fields
  {
    label: "Nama acara",
    name: "namaAcara",
    type: "text",
    gridCols: "col-span-12",
  },
  {
    label: "Deskripsi acara",
    name: "deskripsiAcara",
    textarea: true,
    gridCols: "col-span-12",
  },
  {
    label: "Mulai pada",
    name: "mulaiPada",
    type: "datetime-local",
    gridCols: "col-span-4",
  },
  {
    label: "Selesai pada",
    name: "selesaiPada",
    type: "datetime-local",
    gridCols: "col-span-4",
  },
  {
    label: "Zona waktu",
    name: "zonaWaktu",
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
    name: "lokasi",
    component: GmapInput,
    placeholder: "Search for a location",
    gridCols: "col-span-12",
  },
  {
    label: "Nama Gedung/Lokasi",
    name: "namaGedung",
    type: "text",
    gridCols: "col-span-6",
  },
  { label: "Kota", name: "kota", type: "text", gridCols: "col-span-6" },
  { label: "Alamat", name: "alamat", textarea: true, gridCols: "col-span-12" },
];

export const additionalFields = [
  // Additional fields
  {
    label: "Domain",
    name: "domain",
    type: "text",
    placeholder: "https://themarriage",
    gridCols: "col-span-12",
  },
  { label: "Musik", name: "musik", type: "file", gridCols: "col-span-6" },
  {
    label: "Gambar cover",
    name: "gambarCover",
    type: "file",
    gridCols: "col-span-6",
  },
  {
    label: "Foto mempelai pria & wanita",
    name: "fotoMempelai",
    type: "file",
    gridCols: "col-span-6",
  },
  { label: "Galeri", name: "galleri", type: "file", gridCols: "col-span-6" },
];
