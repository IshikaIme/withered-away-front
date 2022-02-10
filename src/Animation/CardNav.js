import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";
import Cardcontents from "./Cardcontents";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
}));
export default function CardNav() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="Navigation card">
      <ImageCard cardnumber={Cardcontents[0]} />
    </div>
  );
}
