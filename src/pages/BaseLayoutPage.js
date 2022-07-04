import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "../components/Sidebar";
import JobsPage from "./JobsPage";
import ProfilePage from "./Profile/ProfilePage";
import AppliedPage from "./AppliedPage";
import "./BaseLayoutPage.scss";
import Header from "../components/Header";
function BaseLayoutPage() {
  return (
    <div className="baselayout-main-div">
      <Header></Header>
      <div className="baselayout-sidebar-pages">
        <div>{<SideBar />}</div>
        <div className="pages-div">
          <Routes>
            <Route path="/Profile" element={<ProfilePage />}></Route>
            <Route path="/Jobs" element={<JobsPage />}></Route>
            <Route path="/Applied" element={<AppliedPage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default BaseLayoutPage;
