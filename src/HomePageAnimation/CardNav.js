import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));
export default function CardNav() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root} id="Navigation card">
        <ImageCard />
      </div>
    </div>
  );
}
