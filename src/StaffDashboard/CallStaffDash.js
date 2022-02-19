import React from "react";
import bg from "../images/paint.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyStaffDash from "./BodyStaffDash";
import CardsStaff from "./CardsStaff";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "92vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${bg})`,
    fontFamily: "Courgette",
    backgroundAttachment: "fixed",
  },
  colortext: {
    // color: "	#800000",
    color: "red",
  },
  title: {
    color: "#fff",
    fontSize: "5rem",
    marginBottom: "0 auto ",
  },

  container: {
    textAlign: "center",
  },
}));
export default function CallStaffDash() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Wel
          <span className={classes.colortext}>come </span>
          Ba
          <span className={classes.colortext}>ck </span>
        </h1>
        <div className={classes.cards}></div>
      </div>
      <CssBaseline />
      <BodyStaffDash />
      <CardsStaff />
    </div>
  );
}
