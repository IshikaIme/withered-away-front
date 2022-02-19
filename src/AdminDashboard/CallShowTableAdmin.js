import React from "react";
import HomeImg from "../images/bwall.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyAdminDash from "./BodyAdminDash";
import ShowTableAdmin from "./ShowTableAdmin";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
    backgroundAttachment: "fixed",
  },
}));
export default function CallShowTableAdmin() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BodyAdminDash />
      <ShowTableAdmin />
    </div>
  );
}
