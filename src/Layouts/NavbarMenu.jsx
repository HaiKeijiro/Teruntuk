import React from "react";
import { Logo, StrokeClose } from "../assets/Icons";
import { NavLink } from "react-router-dom";
import useModal from "../Hooks/useModal";
import LoginModal from "../Layouts/Modal/Auth/LoginModal";
import RegisterModal from "../Layouts/Modal/Auth/RegisterModal";

function NavbarMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Modal
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="fixed top-0 left-0 bottom-0 w-full md:w-[30%] h-screen bg-main py-10 px-5 flex flex-col justify-between z-10">
      {/* Logo */}
      <div className="flex justify-between items-center">
        <Logo />
        <div onClick={onClose}>
          <StrokeClose color="white" />
        </div>
      </div>
      {/* Navlink */}
      <ul className="space-y-6 flex flex-col justify-center items-center">
        <li>
          <NavLink className="text-white" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="text-white" to="/template-undangan">
            Template Undangan
          </NavLink>
        </li>
        <li>
          <NavLink className="text-white" to="/faq">
            FAQ
          </NavLink>
        </li>
      </ul>
      {/* buttons */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => openModal("login")}
          className="px-4 py-2 border border-white text-white"
        >
          sign in{" "}
        </button>
        <button
          onClick={() => openModal("register")}
          className="px-4 py-2 bg-white text-main"
        >
          sign up
        </button>
      </div>

      {/* Auth modals */}
      {isModalOpen("login") && (
        <LoginModal isOpen={isModalOpen} onClose={closeModal} />
      )}

      {isModalOpen("register") && (
        <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
}

export default NavbarMenu;
