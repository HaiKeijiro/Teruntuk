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
import ListPengguna from "./Layouts/Table/ListPengguna";
import ListWebsite from "./Layouts/Table/ListWebsite";
import GuessTable from "./Layouts/Table/GuessTable";

import ROUTES from "../api/routes";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.TEMPLATE_UNDANGAN} element={<TemplateUndangan />} />
      <Route path={ROUTES.PREVIEW_UNDANGAN} element={<Preview />} />
      <Route path={ROUTES.BUAT_UNDANGAN} element={<BuatUndangan />} />
      <Route path={ROUTES.FAQ} element={<FaqPage />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.INVITATION_LIST} element={<InvitationList />} />
      <Route path={ROUTES.RESERVATION_LIST} element={<ReservationList />} />
      <Route path={ROUTES.EDIT_UNDANGAN} element={<EditUndangan />} />
      <Route path={ROUTES.AKTIVASI} element={<Aktivasi />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />

      {/* Admin page */}
      <Route path={ROUTES.ADMIN} element={<Admin />} />
      <Route path={ROUTES.LIST_WEBSITE} element={<ListWebsite />} />
      <Route path={ROUTES.LIST_PENGGUNA} element={<ListPengguna />} />
      <Route path={ROUTES.GUESS_TABLE} element={<GuessTable />} />
    </Routes>
  );
}

export default App;
