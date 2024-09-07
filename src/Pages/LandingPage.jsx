import React from "react";
import Navbar from "../Layouts/Navbar";
import MainBanner from "../Layouts/MainBanner";

// Images
import Template1 from "../assets/frontpage/frontpage-template-showcase-1.png";
import Template2 from "../assets/frontpage/frontpage-template-showcase-2.png";
import Template3 from "../assets/frontpage/frontpage-template-showcase-3.png";

// Components
import MainButton from "../Components/Buttons/MainButton";
import BlogCard from "../Components/Cards/BlogCard";

// Layouts
import WhyUs from "../Layouts/WhyUs";
import Testimony from "../Layouts/Testimony";
import Photos from "../Layouts/Photos";
import Footer from "../Layouts/Footer";

function LandingPage() {
  return (
    <div className="w-full">
      <Navbar textColor="white" icon="white" />
      <MainBanner />

      {/* Pilih template */}
      <div className="flex flex-col items-center py-10">
        <h2 className="text-sm-h2 md:text-md-h2 lg:text-h2 font-derivia tracking-widest text-center uppercase">
          Template Elegan & <br /> Minimalis
        </h2>
        <p>Pilih template undangan yang cocok untuk tema acara-mu</p>
        <div className="grid grid-cols-3">
          <img src={Template1} alt="template.png" />
          <img src={Template2} alt="template.png" />
          <img src={Template3} alt="template.png" />
        </div>
        <MainButton label={"lihat template"} />
      </div>

      {/* Fitur */}
      <div className="flex flex-col items-center gap-y-14 py-10 bg-[#9A7058]/10">
        <div className="gap-y-6">
          <h2 className="text-h2 font-derivia tracking-widest text-center uppercase">
            fitur modern & <br /> terbaik
          </h2>
          <p>Pilih template undangan yang cocok untuk tema acara-mu</p>
        </div>
        {/* Cards */}
        {/* <div className="w-3/5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-5"> */}
        <div className="flex flex-wrap justify-center gap-10 w-4/5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>

      {/* Why Us */}
      <WhyUs />

      {/* Testimony */}
      <Testimony />

      {/* Photo Preview */}
      <Photos />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
