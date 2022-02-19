import React from "react";
import HomeImg from "../images/wwall.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyDoctorDash from "./BodyDoctorDash";
import AppointmentDoctor from "./AppointmentDoctor";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
    backgroundAttachment: "fixed",
  },
}));
export default function CallShowAppointment() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BodyDoctorDash />
      <AppointmentDoctor />
    </div>
  );
}
