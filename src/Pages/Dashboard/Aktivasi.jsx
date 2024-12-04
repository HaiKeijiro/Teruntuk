import React, { useState } from "react";
import Navbar from "../../Layouts/Navbar";
import Banner from "../../Layouts/Banner";
import Photos from "../../Layouts/Photos";
import Footer from "../../Layouts/Footer";

import PreviewAlison from "../../assets/templates/alison/preview.png";
import { Copy, Gallery } from "../../assets/Icons";
import MainButton from "../../Components/Buttons/MainButton";

import paymentChannel from "../../../api/payment-channel.json";
import PaymentNotif from "../../Layouts/Notification/PaymentNotif";
import useMultiModal from "../../Hooks/useModal";

import ROUTES from "../../../api/routes";
import { Link } from "react-router-dom";

function Aktivasi() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const { data } = paymentChannel;

  const { isModalOpen, openModal, closeModal } = useMultiModal();

  return (
    <div>
      {/* Navbar */}
      <Navbar icon="black" />

      {/* Banner */}
      <Banner title="pembayaran" desc="" />

      {/* Pembayaran */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start lg:gap-10 lg:py-20 px-20 lg:px-52">
        <div className="grid">
          <div className="bg-[#f7f7f7] p-20 m-auto">
            <img
              src={PreviewAlison}
              alt="selected_card_img"
              className="max-w-[200px]"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <small className="uppercase text-[#72726C] text-small tracking-widest">
              undangan pernikahan
            </small>

            <div>
              <h2 className="text-sm-h2 md:text-md-h2 lg:text-h2 font-derivia uppercase tracking-widest">
                sorliene
              </h2>
              <span className="text-sm-h6 md:text-md-h6 lg:text-h6 tracking-widest">
                RP. 149,000
              </span>
            </div>

            <small className="text-sm-body md:text-md-body lg:text-body font-martel">
              michael@igcognito.com
            </small>
          </div>

          <div className="py-6">
            <hr className="text-[#ABABAB]" />
          </div>

          <div className="space-y-4">
            <small className="uppercase text-[#72726C] text-small tracking-widest">
              receipt summary
            </small>
            <div>
              <div className="flex items-center justify-between">
                <p>{"Sorliene (1)"}</p>
                <span className="font-martel">Rp. 149,000</span>
              </div>
              <div className="flex items-center justify-between font-bold">
                <p>Total</p>
                <span className="font-martel">Rp. 149,000</span>
              </div>
            </div>
            <p>
              Silakan melakukan pembayaran sejumlah Rp. 149,000 ke rekening kami
              sebagai berikut:
            </p>
          </div>
          <div className="mt-5 space-y-4">
            <div className="flex items-end gap-4">
              <div className="font-martel">
                <span className="font-bold font-martel">
                  Rekening Bank Jago
                </span>{" "}
                <br />
                A/n: Paul Scholes <br />
                No. (213) 9002 0329 968
              </div>
              <button>
                <Copy />
              </button>
            </div>
            <p>
              Setelah melakukan pembayaran silahkan lakukan konfirmasi dengan
              form di bawah ini, atau dengan melalui email: admin@incognito.com
            </p>
          </div>

          <div className="py-6">
            <hr className="text-[#ABABAB]" />
          </div>

          <div className="space-y-4">
            <small className="uppercase text-[#72726C] text-small tracking-widest">
              konfirmasi pembayaran
            </small>

            <div className="flex flex-col gap-y-3">
              <label htmlFor="nama pemilik">Nama pemilik rekening</label>
              <input
                type="text"
                placeholder="Nama pemilik rekening"
                className="border px-3 py-2 rounded-md text-small focus:outline-none w-1/2"
              />
            </div>

            {/* <div className="space-y-3">
              <p>{"Bukti pembayaran (gambar)"}</p>
              <button className="flex flex-col">
                <label
                  htmlFor="uploadInput"
                  className="cursor-pointer text-white py-2 px-4 bg-[#EBF0F4] w-full h-32 grid"
                >
                  <div className="m-auto">
                    <Gallery />
                  </div>
                </label>
                <input type="file" id="uploadInput" className="w-full mt-2" />
              </button>
            </div> */}

            <div className="">
              <select name="" id="" className="border focus:outline-none p-2">
                <option value="">Pilih metode pembayaran</option>
                {data.map((item, index) => (
                  <option value={index}>{item.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between gap-4">
              <Link
                to={ROUTES.DASHBOARD}
                className="py-2 px-4 w-full uppercase tracking-widest border border-black rounded-md text-center"
              >
                cancel
              </Link>
              <MainButton
                label="konfirmasi"
                width="full"
                onclick={() => openModal("paymentNotif")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Photos */}
      <Photos />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {isModalOpen("paymentNotif") && (
        <PaymentNotif
          isOpen={isModalOpen}
          type="success"
          status="Succeed!"
          message="The payment is completed!"
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Aktivasi;
