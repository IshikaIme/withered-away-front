import React from "react";
import HomeImg from "../images/wleafedit.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyAdminDash from "./BodyAdminDash";
import ShowRooms from "./ShowInventory";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
    backgroundAttachment: "fixed",
  },
}));
export default function CallInventory() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BodyAdminDash />
      <ShowRooms />
    </div>
  );
}
