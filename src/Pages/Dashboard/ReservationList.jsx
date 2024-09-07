import React from "react";
import Navbar from "../../Layouts/Navbar";
import Photos from "../../Layouts/Photos";
import Footer from "../../Layouts/Footer";
import ReservationTable from "../../Layouts/Table/ReservationTable";

function ReservationList() {
  return (
    <div>
      {/* Navbar */}
      <Navbar icon="black" />

      {/* Reservation table */}
      <ReservationTable />

      {/* Photos */}
      <Photos />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default ReservationList;
