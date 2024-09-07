import React, { useState } from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Photos from "../Layouts/Photos";
import GetStarted from "../Layouts/GetStarted";
import { ArrowDown, Mail, PlayCircle } from "../assets/Icons";

// API
import faqs from "../../api/faq.json";

function FaqPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  return (
    <div className="w-full">
      {/* Navbar */}
      <Navbar textColor="black" icon={"black"} />

      {/* FAQ */}
      <div className="mt-20 md:mt-0 md:py-20 flex flex-col md:flex-row justify-evenly">
        <div className="space-y-5 w-4/5 mx-auto md:w-[40vw]">
          <h2 className="text-sm-h2 md:text-md-h2 lg:text-h2 font-derivia uppercase tracking-widest">
            frequently <br /> asked questions
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis.
          </p>
          <div className="space-y-3">
            <small className="uppercase tracking-widest text-small text-[#72726C]">
              tutorial
            </small>
            <p className="flex items-center gap-x-2">
              <PlayCircle /> Checkout the tutorial using this template
            </p>
          </div>
          <div className="space-y-3">
            <small className="uppercase tracking-widest text-small text-[#72726C]">
              still go questions?
            </small>
            <p className="flex items-center gap-x-2">
              <Mail /> Email us to CS@teruntuk.com
            </p>
          </div>
        </div>
        {/* Questions */}
        <div className="w-4/5 mx-auto md:w-[40vw]">
          {faqs.map((faq, i) => {
            const isActive = activeAccordion === i;
            return (
              <div
                key={i}
                index={i}
                className="faq-container cursor-pointer border-t border-[#000000]/15 px-4 py-4"
              >
                <div
                  onClick={() => setActiveAccordion(i)}
                  className={`faq-trigger flex w-full items-center justify-between`}
                >
                  {/* Question */}
                  <h6 className="font-bold text-sm-h6 md:text-md-h6 lg:text-h6 text-[#0F0F0F]">
                    {faq.questions}
                  </h6>
                  {/* Arrow icon */}
                  <div
                    className={`h-5 w-5 duration-500 ease-in-out ${
                      isActive ? "-rotate-180" : ""
                    }`}
                  >
                    <ArrowDown />
                  </div>
                </div>
                <div
                  className={`faq-content overflow-hidden font-Martel transition-all duration-500 text-base ease-in-out ${
                    isActive ? "h-auto opacity-100" : "h-0 opacity-0"
                  }`}
                >
                  <p className="mt-5">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Get Started */}
      <GetStarted />

      {/* Photos */}
      <Photos />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default FaqPage;
