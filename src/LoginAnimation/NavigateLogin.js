import React from "react";
import AdminDash from "../AdminDashboard/AdminDash";
import PeopleDash from "../PeopleDashboard/PeopleDash";
import StaffDash from "../StaffDashboard/StaffDash";
import DoctorDash from "../DoctorDashboard/DoctorDash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

export class NavigateLogin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/NavigateLogin" element={<LoginPage />}></Route>
          <Route path="/AdminDash" element={<AdminDash />}></Route>
          <Route path="/PeopleDash" element={<PeopleDash />}></Route>
          <Route path="/StaffDash" element={<StaffDash />}></Route>
          <Route path="/DoctorDash" element={<DoctorDash />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
