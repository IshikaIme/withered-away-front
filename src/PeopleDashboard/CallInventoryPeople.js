import React from "react";
import HomeImg from "../images/wleafedit.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import BodyPeopleDash from "./BodyPeopleDash";
import ShowInventoryPeople from "./ShowInventoryPeople";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
    backgroundAttachment: "fixed",
  },
}));
export default function CallInventoryPeople() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BodyPeopleDash />
      <ShowInventoryPeople />
    </div>
  );
}
