import React from "react";
import CallAdminDash from "./AdminDashboard/CallAdminDash";
import CallPeopleDash from "./PeopleDashboard/CallPeopleDash";
import CallStaffDash from "./StaffDashboard/CallStaffDash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAni from "./HomePageAnimation/HomeAni";
import Formcall from "./RegistrationAnimation/Formcall";
import TableRoom from "./TableAdmin/TableRoom";
import TableFood from "./TableAdmin/TableFood";
import TableMedicine from "./TableAdmin/TableMedicine";
import CallShowTableAdmin from "./AdminDashboard/CallShowTableAdmin";
import TablePeople from "./TableAdmin/TablePeople";
import TableDoctor from "./TableAdmin/TableDoctor";
import TableStaff from "./TableAdmin/TableStaff";
import CallInventory from "./AdminDashboard/CallInventory";
import AdminDash from "./AdminDashboard/AdminDash";
import PeopleDash from "./PeopleDashboard/PeopleDash";
import StaffDash from "./StaffDashboard/StaffDash";
import DoctorDash from "./DoctorDashboard/DoctorDash";
import LoginPage from "./LoginAnimation/LoginPage";
import CallProfilePeople from "./PeopleDashboard/CallProfilePeople";
import CallProfileStaff from "./StaffDashboard/CallProfileStaff";
import CallProfileDoctor from "./DoctorDashboard/CallProfileDoctor";
import CallScheduleStaff from "./StaffDashboard/CallScheduleStaff";
import AppointmentHistory from "./PeopleDashboard/AppointmentHistory";
import AppointmentHistoryDoctor from "./DoctorDashboard/AppointmentHistoryDoctor";
import AppointmentPeople from "./PeopleDashboard/AppointmentPeople";
import CallShowAppointment from "./PeopleDashboard/CallShowAppointment";
import CallShowAppointmentDoctor from "./DoctorDashboard/CallShowAppointmentDoctor";
import CallReqAppointment from "./PeopleDashboard/CallReqAppointment";
import CallReqABook from "./PeopleDashboard/CallReqABook";
import SeeRequestedAppointments from "./DoctorDashboard/SeeRequestedAppointments";
import CallDoctorDash from "./DoctorDashboard/CallDoctorDash";

import CallEntertainment from "./PeopleDashboard/CallEntertainment";
import CallBookIssuePeople from "./PeopleDashboard/CallBookIssuePeople";
import IssuedBooksPeople from "./PeopleDashboard/IssuedBooksPeople";
import Songs from "./PeopleDashboard/Songs";
import Movies from "./PeopleDashboard/Movies";
export class NavigateHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeAni />}></Route>
          <Route path="/HomeAni" element={<HomeAni />}></Route>
          <Route path="/Formcall" element={<Formcall />}></Route>
          <Route path="/CallAdminDash" element={<CallAdminDash />}></Route>
          <Route path="/CallPeopleDash" element={<CallPeopleDash />}></Route>
          <Route path="/CallStaffDash" element={<CallStaffDash />}></Route>
          <Route path="/CallDoctorDash" element={<CallDoctorDash />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route
            path="/CallShowTableAdmin"
            element={<CallShowTableAdmin />}
          ></Route>
          <Route
            path="/CallShowAppointment"
            element={<CallShowAppointment />}
          ></Route>
          <Route
            path="/CallShowAppointmentDoctor"
            element={<CallShowAppointmentDoctor />}
          ></Route>
          <Route path="/AdminDash" element={<AdminDash />}></Route>
          <Route path="/PeopleDash" element={<PeopleDash />}></Route>
          <Route path="/StaffDash" element={<StaffDash />}></Route>
          <Route path="/DoctorDash" element={<DoctorDash />}></Route>
          <Route path="/TablePeople" element={<TablePeople />}></Route>
          <Route path="/TableDoctor" element={<TableDoctor />}></Route>
          <Route path="/TableStaff" element={<TableStaff />}></Route>
          <Route path="/CallInventory" element={<CallInventory />}></Route>
          <Route
            path="/AppointmentPeople"
            element={<AppointmentPeople />}
          ></Route>
          <Route
            path="/AppointmentHistory"
            element={<AppointmentHistory />}
          ></Route>
          <Route
            path="/AppointmentHistoryDoctor"
            element={<AppointmentHistoryDoctor />}
          ></Route>

          <Route
            path="/SeeRequestedAppointments"
            element={<SeeRequestedAppointments />}
          ></Route>
          <Route
            path="/CallReqAppointment"
            element={<CallReqAppointment />}
          ></Route>

          <Route path="/CallReqABook" element={<CallReqABook />}></Route>
          <Route
            path="/CallProfilePeople"
            element={<CallProfilePeople />}
          ></Route>
          <Route
            path="/CallProfileStaff"
            element={<CallProfileStaff />}
          ></Route>
          <Route
            path="/CallEntertainment"
            element={<CallEntertainment />}
          ></Route>
          <Route
            path="/CallProfileDoctor"
            element={<CallProfileDoctor />}
          ></Route>
          <Route
            path="/CallScheduleStaff"
            element={<CallScheduleStaff />}
          ></Route>
          <Route
            path="/CallBookIssuePeople"
            element={<CallBookIssuePeople />}
          ></Route>

          <Route
            path="/IssuedBooksPeople"
            element={<IssuedBooksPeople />}
          ></Route>
          <Route path="/TableRoom" element={<TableRoom />}></Route>
          <Route path="/TableFood" element={<TableFood />}></Route>
          <Route path="/TableMedicine" element={<TableMedicine />}></Route>

          <Route path="/Songs" element={<Songs />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
