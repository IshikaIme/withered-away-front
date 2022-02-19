import React from "react";
import HomeImg from "../images/pp.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyStaffDash from "./BodyStaffDash";

import ScheduleStaff from "./ScheduleStaff";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundImage: `url(${HomeImg})`,
    backgroundColor: "	rgb(222,184,135)",
    backgroundAttachment: "fixed",
  },
  img: {
    height: "100vh",
    width: "50vh",
  },
}));
export default function CallScheduleStaff() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      <BodyStaffDash />

      <ScheduleStaff />
    </div>
  );
}
