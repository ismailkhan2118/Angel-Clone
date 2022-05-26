import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Button } from "primereact/button";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import ProfilePage from "./pages/ProfilePage";
import AppliedPage from "./pages/AppliedPage";

import JobsPage from "./pages/JobsPage";
import BaseLayoutPage from "./pages/BaseLayoutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BaseLayoutPage></BaseLayoutPage>
      </div>
    </BrowserRouter>
  );
}

export default App;
