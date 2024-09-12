import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Logo, Twitter } from "../assets/Icons";

function Footer() {
  return (
    // Parent div
    <div>
      {/* Main footer */}
      <div className="bg-[#F5F1EE] w-full grid grid-cols-1 sm:grid-cols-3 gap-10 p-5 lg:gap-20 md:py-10 md:px-20">
        {/* Left */}
        <div className="flex justify-center flex-col gap-y-8 gap-x-6">
          <div className="space-y-4">
            <h6 className="text-sm-h6 md:text-md-h6 lg:text-h6 uppercase tracking-widest">
              Halaman
            </h6>
            <div className="flex flex-col justify-center gap-y-2">
              <NavLink to="/" className="hover:text-gray-700">
                Home
              </NavLink>
              <NavLink to="/faq" className="hover:text-gray-700">
                FAQs
              </NavLink>
            </div>
          </div>
          <div className="space-y-4">
            <h6 className="text-sm-h6 md:text-md-h6 lg:text-h6 uppercase tracking-widest">
              Template
            </h6>
            <div className="flex flex-col gap-y-2">
              <NavLink to="/template-undangan" className="hover:text-gray-700">
                Template Undangan
              </NavLink>
            </div>
          </div>
        </div>
        {/* Middle */}
        <div className="hidden md:flex items-center justify-center">
          <div className="lg:border-x border-[#ABABAB] w-full">
            <div className="w-full flex items-center justify-center">
              <Logo iconColor="black" w="200" h="82" />
            </div>
          </div>
        </div>
        {/* Right */}
        <div>
          <div className="flex flex-col gap-y-8">
            <div className="space-y-4">
              <h6 className="text-sm-h6 md:text-md-h6 lg:text-h6 uppercase tracking-widest">
                Social Media
              </h6>
              <div className="grid grid-cols-3 w-1/2">
                {/* Tablet - PC */}
                <div className="hidden md:inline">
                  <Facebook className="text-gray-700 hover:text-gray-900" />
                </div>
                <div className="hidden md:inline">
                  <Instagram className="text-gray-700 hover:text-gray-900" />
                </div>
                <div className="hidden md:inline">
                  <Twitter className="text-gray-700 hover:text-gray-900" />
                </div>
                {/* Mobile */}
                <div className="inline md:hidden">
                  <Facebook
                    w="20"
                    h="20"
                    className="text-gray-700 hover:text-gray-900"
                  />
                </div>
                <div className="inline md:hidden">
                  <Instagram
                    w="20"
                    h="20"
                    className="text-gray-700 hover:text-gray-900"
                  />
                </div>
                <div className="inline md:hidden">
                  <Twitter
                    w="20"
                    h="20"
                    className="text-gray-700 hover:text-gray-900"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h6 className="text-sm-h6 md:text-md-h6 lg:text-h6 uppercase tracking-widest">
                Subscribe Newsletter
              </h6>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email..."
                  className="border border-[#ABABAB] px-4 py-2 rounded-sm w-[55%]"
                />
                <button className="uppercase py-2 px-4 bg-[#505050] text-white tracking-wide rounded-sm">send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#505050] text-white font-martel py-4 text-center">
        Design by Incognito Asia 2023
      </footer>
    </div>
  );
}

export default Footer;
