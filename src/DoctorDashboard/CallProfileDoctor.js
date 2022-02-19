import React from "react";
import HomeImg from "../images/pp.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyDoctorDash from "./BodyDoctorDash";

import ProfileDoctor from "./ProfileDoctor";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "130vh",
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
export default function CallProfileD() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      <BodyDoctorDash />

      <ProfileDoctor />
    </div>
  );
}
