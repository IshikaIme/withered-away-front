import React from "react";
import HomeImg from "../images/bigformaa.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyPeopleDash from "./BodyPeopleDash";

import ReqAppointment from "./ReqAppointment";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
    fontFamily: "Special Elite",
    backgroundAttachment: "fixed",
  },
  //   img: {
  //     height: "100vh",
  //     width: "50vh",
  //   },
}));
export default function CallReqAppointment() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      <BodyPeopleDash />

      <ReqAppointment />
    </div>
  );
}
