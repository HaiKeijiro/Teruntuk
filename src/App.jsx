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
import ProfilePage from "./Pages/ProfilePage";
import Admin from "./Pages/Admin/index";
import ListPengguna from "./Layouts/Table/ListPengguna"
import ListWebsite from "./Layouts/Table/ListWebsite"
import GuessTable from "./Layouts/Table/GuessTable";

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
        <Route path="profile" element={<ProfilePage />} />

        {/* Admin page */}
        <Route path="admin" element={<Admin />}>
          <Route path="list-website" element={<ListWebsite />} />
          <Route path="list-pengguna" element={<ListPengguna />} />
          <Route path="list-pengguna/:id" element={<GuessTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
