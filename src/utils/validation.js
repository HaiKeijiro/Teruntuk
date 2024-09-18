import * as Yup from "yup";

// Validation schemas for each step
export const CreateTemplateSchema = [
  // Detail mempelai
  Yup.object().shape({
    fullPria: Yup.string().required("Nama lengkap is required"),
    fullWanita: Yup.string().required("Nama lengkap is required"),
    panggilanPria: Yup.string().required("Nama panggilan is required"),
    panggilanWanita: Yup.string().required("Nama panggilan is required"),
    putraKe: Yup.string().required("Putra ke- is required"),
    putriKe: Yup.string().required("Putri ke- is required"),
    ayahPria: Yup.string().required("Nama ayah is required"),
    ayahWanita: Yup.string().required("Nama ayah is required"),
    ibuPria: Yup.string().required("Nama ibu is required"),
    ibuWanita: Yup.string().required("Nama ibu is required"),
    igPria: Yup.string().required("Instagram is required"),
    igWanita: Yup.string().required("Instagram is required"),
    tentangPasangan: Yup.string().required("Tentang pasangan is required"),
  }),
  // Detail event
  Yup.object().shape({
    namaAcara: Yup.string().required("Nama acara is required"),
    deskripsiAcara: Yup.string().required("Deskripsi acara is required"),
    mulaiPada: Yup.string().required("Mulai pada is required"),
    selesaiPada: Yup.string().required("Selesai pada is required"),
    zonaWaktu: Yup.string().required("Zona waktu is required"),
    namaGedung: Yup.string().required("Nama gedung is required"),
    kota: Yup.string().required("Kota is required"),
    alamat: Yup.string().required("Alamat is required"),
  }),
  // Additional
  Yup.object().shape({
    domain: Yup.string().required("Domain website is required"),
    gambarCover: Yup.string().required("Gambar cover is required"),
    fotoMempelai: Yup.string().required("Foto mempelai is required"),
  }),
];
