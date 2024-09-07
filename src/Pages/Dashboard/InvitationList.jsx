import React from "react";
import Navbar from "../../Layouts/Navbar";
import Photos from "../../Layouts/Photos";
import Footer from "../../Layouts/Footer";
import InvitationTable from "../../Layouts/Table/InvitationTable";

function InvitationList() {
  return (
    <div>
      {/* Navbar */}
      <Navbar icon="black" />

      {/* Invitation  table */}
      <InvitationTable />

      {/* Photos */}
      <Photos />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default InvitationList;
