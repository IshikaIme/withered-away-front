import React from "react";
import HomeImg from "../images/bg.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Services from "./Services";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "150vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
    fontFamily: "Nunito",
    backgroundAttachment: "fixed",
    //marginTop: "-2rem",
  },
  //   img: {
  //     height: "100vh",
  //     width: "50vh",
  //   },
}));
export default function CallServices() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Services />
    </div>
  );
}
