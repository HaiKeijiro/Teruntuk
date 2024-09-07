import { Link, Route, Routes } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage";
import TemplateUndangan from "./Pages/TemplateUndangan";
import FaqPage from "./Pages/FaqPage";
import Preview from "./Pages/TemplateUndangan/Preview";
import BuatUndangan from "./Pages/TemplateUndangan/BuatUndangan";
import Dashboard from "./Pages/Dashboard/index";
import InvitationList from "./Pages/Dashboard/InvitationList";
import ReservationList from "./Pages/Dashboard/ReservationList";
import EditUndangan from "./Pages/Dashboard/EditUndangan";
import Aktivasi from "./Pages/Dashboard/Aktivasi";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="template-undangan" element={<TemplateUndangan />} />
        <Route
          path="template-undangan/preview-undangan"
          element={<Preview />}
        />
        <Route
          path="template-undangan/buat-undangan"
          element={<BuatUndangan />}
        />
        <Route path="faq" element={<FaqPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/invitation-list" element={<InvitationList />} />
        <Route
          path="dashboard/reservation-list"
          element={<ReservationList />}
        />
        <Route path="dashboard/edit-undangan" element={<EditUndangan />} />
        <Route path="dashboard/aktivasi" element={<Aktivasi />} />
      </Routes>
    </>
  );
}

export default App;
