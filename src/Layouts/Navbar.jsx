import { NavLink, useNavigate } from "react-router-dom";
import TemplateUndangan from "../Pages/TemplateUndangan";
import FaqPage from "../Pages/FaqPage";

// Logo
import { BurgerMenu, Logo, User } from "../assets/Icons";

// Modal
import LoginModal from "./Modal/LoginModal";
import RegisterModal from "./Modal/RegisterModal";

// Navbar Menu
import NavbarMenu from "./NavbarMenu";

// Hook
import useModal from "../Hooks/useModal";

import MainButton from "../Components/Buttons/MainButton";
import { useEffect, useState, useRef } from "react";

function Navbar({ textColor = "black", icon }) {
  const isLoggedIn = true;

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

  const scrolledNav = isScrolled
    ? "bg-[#F5F1EE] text-[#0f0f0f]"
    : "bg-transparent";

  // Modal
  const { isModalOpen, openModal, closeModal } = useModal();

  // Dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navbar Manu (sm - md)
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
  const handleNavbarMenu = () => {
    setIsNavbarMenuOpen(!isNavbarMenuOpen);
  };

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 mx-auto flex items-center justify-between px-4 py-3 md:p-8 lg:px-20 lg:py-8 uppercase font-mulish ${
        isScrolled ? scrolledNav : ``
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-x-4 lg:flex-shrink-0">
        <button
          className="inline lg:hidden"
          onClick={() => {
            openModal("navbarMenu");
            handleNavbarMenu();
          }}
        >
          <BurgerMenu color={isScrolled ? "black" : "white"} />
        </button>
        <Logo iconColor={isScrolled ? "black" : icon} />
      </div>

      {/* Navbar pop up */}
      {isModalOpen("navbarMenu") && (
        <NavbarMenu isOpen={isModalOpen} onClose={closeModal} />
      )}

      {/* Nav Links */}
      <ul className="hidden lg:flex gap-x-10 absolute left-1/2 transform -translate-x-1/2">
        <li>
          <NavLink to="/" className={isScrolled ? "" : `text-${textColor}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/template-undangan"
            className={isScrolled ? "" : `text-${textColor}`}
          >
            Template Undangan
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" className={isScrolled ? "" : `text-${textColor}`}>
            FAQ
          </NavLink>
        </li>
      </ul>

      {/* Auth */}
      {isLoggedIn ? (
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={toggleDropdown}
          >
            <User color={isScrolled ? "black" : icon} />
            <p className={`${isScrolled ? "" : `text-${icon}`} font-mulish`}>
              Mr. Wijaya
            </p>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
              <NavLink
                to="/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </NavLink>
              <NavLink
                to="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Log Out
              </NavLink>
            </div>
          )}
        </div>
      ) : (
        <div className="space-x-4 flex-shrink-0">
          <button
            className={`tracking-widest uppercase ${
              isScrolled ? "" : `text-${textColor}`
            }`}
            onClick={() => openModal("login")}
          >
            sign in
          </button>
          <MainButton
            label="Get Started"
            onclick={() => openModal("register")}
          />
        </div>
      )}

      {/* Auth modals */}
      {isModalOpen("login") && (
        <LoginModal isOpen={isModalOpen} onClose={closeModal} />
      )}

      {isModalOpen("register") && (
        <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </nav>
  );
}

export default Navbar;
