import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainButton from "../../Components/Buttons/MainButton";
import { ArrowDown, BurgerMenu, Music, Triangle } from "../../assets/Icons";
import { WeddingLogo } from "../../assets/svgs";

// Images
import banner from "../../assets/templates/preview/main/banner.png";
import story from "../../assets/templates/preview/main/story.png";
import photo1 from "../../assets/templates/preview/main/photo1.png";
import photo2 from "../../assets/templates/preview/main/photo2.png";
import photo3 from "../../assets/templates/preview/main/photo3.png";
import photo4 from "../../assets/templates/preview/main/photo4.png";
import photo5 from "../../assets/templates/preview/main/photo5.png";
import photo6 from "../../assets/templates/preview/main/photo6.png";
import map from "../../assets/templates/preview/main/map.png";

function Preview() {
  // Scroll effect
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 5 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Music button
  const [isPlayed, setMusic] = useState(true);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 py-4 ${
          isScrolled ? "bg-[#BDA97A]" : "bg-transparent"
        }`}
      >
        <div className="hidden relative md:flex items-center justify-between px-10">
          <Link to={"/template-undangan"} className="z-50">
            <button className="rotate-90 bg-gray-100 rounded-full p-2">
              <ArrowDown />
            </button>
          </Link>
          <ul className="absolute left-1/2 transform -translate-x-1/2 uppercase flex flex-grow items-center justify-center gap-10 font-medium">
            <li>home</li>
            <li>gallery</li>
            <li>location</li>
            <li>buku tamu</li>
          </ul>
          <MainButton
            label={"gunakan"}
            directTo={"buat-undangan"}
            px={5}
            py={2}
          />
        </div>
        <button className="md:hidden">
          <BurgerMenu />
        </button>
      </nav>
      {/* Banner */}
      <section className="relative h-screen">
        <img
          src={banner}
          alt="banner.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full top-0 left-0 z-10 grid">
          <div className="m-auto flex flex-col justify-center items-center">
            <WeddingLogo />
            <p className="font-mulish uppercase text-[#BDA97A] tracking-widest mt-2">
              be part of love story
            </p>
            <button className="uppercase bg-[#BDA97A] text-white px-12 py-3 rounded-full mt-8">
              rsvp
            </button>
          </div>
        </div>
      </section>
      {/* Our story */}
      <section className="h-screen py-10 grid">
        <div className="m-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-h1 font-martel capitalize">our story</h1>
            <p className="w-[60%] md:w-[50%] lg:w-[35%] text-[#A5A1A1]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16">
            <div className="flex flex-col justify-center items-center md:items-end">
              <h1 className="text-h1 font-martel capitalize text-center md:text-right">
                satria putra
              </h1>
              <p className="w-[60%] md:w-[50%] lg:w-[35%] text-[#A5A1A1] text-center md:text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            {/* Image  */}
            <div className="flex flex-col justify-center items-center gap-y-6">
              <img src={story} alt="story.png" />
              <p className="text-small font-mulish text-[#9A8B7A] uppercase font-medium tracking-widest">
                14 - august - 2023
              </p>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-h1 font-martel capitalize">rey bebolia</h1>
              <p className="w-[60%] md:w-[50%] lg:w-[35%] text-[#A5A1A1] text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery photo */}
      <section className="pb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-h1 font-martel capitalize">gallery photo</h1>
          <p className="w-[60%] md:w-[50%] lg:w-[35%] text-[#A5A1A1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        {/* Images */}
        <div class="grid grid-cols-3 grid-rows-2 gap-6 w-4/5 mx-auto py-10">
          <div class="col-span-12 md:col-span-1">
            <img
              src={photo1}
              alt="Wedding Image 1"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="col-span-12 md:col-span-1">
            <img
              src={photo2}
              alt="Wedding Image 2"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="col-span-12 md:col-span-1 md:row-span-2">
            <img
              src={photo3}
              alt="Wedding Image 3"
              class="w-full h-[98%] object-cover"
            />
          </div>
          <div class="col-span-12 md:col-span-2">
            <img
              src={photo4}
              alt="Wedding Image 4"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="col-span-12 md:col-span-1">
            <img
              src={photo5}
              alt="Wedding Image 5"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="col-span-12 md:col-span-2">
            <img
              src={photo6}
              alt="Wedding Image 6"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      {/* Form */}
      <section className="relative h-screen bg-form grid">
        <div className="m-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-h1 font-martel">Will you Attend</h1>
          <p className="w-[60%] text-[#A5A1A1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="grid grid-cols-12 gap-x-10 gap-y-4 w-4/5 mt-4">
            <div className="col-span-6 flex flex-col items-start gap-y-3">
              <label htmlFor="email" className="block font-martel">
                Your name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-span-6 flex flex-col items-start gap-y-3">
              <label htmlFor="email" className="block font-martel">
                Your email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div className="col-span-6 flex flex-col items-start gap-y-3">
              <label htmlFor="email" className="block font-martel">
                Guest<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
                placeholder="2 Guest"
              />
            </div>
            <div className="col-span-6 flex flex-col items-start gap-y-3">
              <label htmlFor="email" className="block font-martel">
                Status<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-5 py-3 border border-[#000000]/20 rounded-md focus:outline-none"
                placeholder="Yes, I will be there"
              />
            </div>
            <div className="col-span-12 flex flex-col items-start gap-y-3">
              <label htmlFor="email" className="block font-martel">
                Something you say<span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-5 py-3 border border-[#000000]/20 h-32 rounded-md focus:outline-none"
                placeholder="Lorem ipsum..."
              />
            </div>
          </div>
          <button className="uppercase bg-[#BDA97A] text-white px-12 py-3 rounded-full mt-8">
            rsvp now
          </button>
        </div>
      </section>
      {/* Footer */}
      <section className="h-screen bg-footer relative grid">
        <div className="m-auto flex flex-col items-center pb-20">
          <img src={map} alt="map.png" className="bg-cover" />
          <p className="text-[#A5A1A1] mt-10 mb-2">Lokasi Acara</p>
          <h1 className="text-h1 font-martel text-[#5A5A5A]">
            Bali District, Denpasar
          </h1>
          <p className="underline text-[#A5A1A1]">
            Buka lokasi di laman Google Maps
          </p>
        </div>
        <div className="border-y text-center absolute w-full bottom-0 p-5">
          <p className="text-[#A5A1A1] text-body">
            © 2023 — made with <span className="text-red-500">♥</span> in
            incognito
          </p>
        </div>
      </section>
      {/* Buku tamu */}
      <section className="w-full h-fit py-20">
        <h2 className="text-h2 font-martel text-center">Buku Tamu</h2>
        <div className="w-[90%] mx-auto mt-10 p-6 border rounded-md bg-main/5">
          {/* Ucapan pribadi*/}
          <div className="flex flex-col gap-4 mx-auto">
            <p>20 Ucapan</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Nama"
              className="border p-2 rounded-md"
            />
            <textarea
              name=""
              id=""
              placeholder="Ucapan"
              className="border p-2 rounded-md"
            ></textarea>
            <select name="" id="" className="border p-2 rounded-md">
              <option value="">Konfirmasi kehadiran</option>
              <option value="">Hadir</option>
              <option value="">Tidak hadir</option>
            </select>
            <div className="flex justify-end w-full">
              <MainButton label="kirim" px={3} py={1} />
            </div>
          </div>
          {/* Ucapan orang lain */}
          <div className="px-10 py-4 border mt-10">
            <h6 className="text-h6 font-bold">Name</h6>
            <small className="text-small text-black/60 font-medium">
              5 hari, 10 jam lalu
            </small>
            <p className="text-body font-mulish">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              dolorum!
            </p>
          </div>
        </div>
      </section>
      {/* Music */}
      <button
        className="rounded-full p-2 border-2 border-black fixed right-5 bottom-5 z-10"
        onClick={() => {
          setMusic(!isPlayed);
        }}
      >
        {isPlayed ? (
          <Music />
        ) : (
          <div className="rotate-90">
            <Triangle />
          </div>
        )}
      </button>
    </div>
  );
}

export default Preview;
