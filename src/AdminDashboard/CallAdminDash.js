import React from "react";
import bg from "../images/paint.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyAdminDash from "./BodyAdminDash";
import CardsAdmin from "./CardsAdmin";
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
export default function CallAdminDash() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <h1 className={classes.title}>
          Wel
          <span className={classes.colortext}>come </span>
          Ad
          <span className={classes.colortext}>min </span>
        </h1>
        <div className={classes.cards}></div>
      </div>
      <CssBaseline />
      <BodyAdminDash />
      <CardsAdmin />
    </div>
  );
}
