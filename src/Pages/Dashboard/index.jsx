import React from "react";
import Navbar from "../../Layouts/Navbar";
import Banner from "../../Layouts/Banner";
import Testimony from "../../Layouts/Testimony";
import Photos from "../../Layouts/Photos";
import Footer from "../../Layouts/Footer";
import AddCard from "../../Components/Cards/AddCard";
import DashboardCard from "../../Components/Cards/DashboardCard";
import DashboardImage from "../../assets/template/sorliene/preview.png";
import { DotsMenu } from "../../assets/Icons";
import MainButton from "../../Components/Buttons/MainButton";
import OptionButton from "../../Components/Buttons/OptionButton";
import EditButton from "../../Components/Buttons/EditButton";

function index() {
  return (
    <div>
      {/* Navbar */}
      <Navbar icon="black" />

      {/* Banner */}
      <Banner
        title="selamat datang, Mr. Wijaya"
        desc="Anda bisa melakukan perubahan layout dan melakukan pembayaran di halaman ini"
      />

      {/* Template */}
      <div className="w-[90%] mx-auto py-20">
        <h3 className="text-sm-h3 md:text-md-h3 lg:text-h3 font-derivia uppercase tracking-widest">
          pilih template
        </h3>
        <div className="flex gap-x-8 mt-10">
          {/* View */}
          <div className="space-y-4">
            <p className="uppercase text-[#72726C] tracking-widest font-mulish">
              menampilkan
            </p>
            <select className="bg-[#9A7058]/15 p-1 rounded-sm text-[#72726C] focus:outline-none">
              <option value="templates">Semua Template</option>
              <option value="templates">Semua Template</option>
              <option value="templates">Semua Template</option>
            </select>
          </div>
          {/* Sort */}
          <div className="space-y-4">
            <p className="uppercase text-[#72726C] tracking-widest font-mulish">
              sort
            </p>
            <select className="bg-[#9A7058]/15 p-1 rounded-sm text-[#72726C] focus:outline-none">
              <option value="templates">Default</option>
              <option value="templates">Latest</option>
              <option value="templates">Popular</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,_minmax(360px,_1fr))] gap-10 py-10">
          <AddCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </div>

      {/* Testimony */}
      <Testimony />

      {/* Photos */}
      {/* <Photos /> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default index;
