import React, { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import Banner from "../../Layouts/Banner";
import TemplateCard from "../../Components/Cards/TemplateCard";
import Testimony from "../../Layouts/Testimony";
import Footer from "../../Layouts/Footer";
import Photos from "../../Layouts/Photos";

function TemplateUndangan() {
  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar textColor={"black"} icon={"black"} />

      {/* Banner */}
      <Banner
        title="Template Undangan Pernikahan Online"
        desc="Pilih satu dari puluhan opsi template yang sesuai
dengan tema acaramu."
      />

      {/* Pilih template */}
      <div className="py-20 px-10">
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
        {/* [repeat(auto-fit,_minmax(265px,_1fr))] */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>

      {/* Testimony */}
      <Testimony />

      {/* Photos */}
      <Photos />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default TemplateUndangan;
