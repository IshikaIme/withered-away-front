import React from "react";
import HomeImg from "../images/hh.jpg";
import { makeStyles } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import HomeHeader from "./HomeHeader";
import ImageCard from "./ImageCard";
import CardNav from "./CardNav";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "150vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: `url(${HomeImg})`,
  },
}));
export default function HomeAni() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HomeHeader />
      <CardNav />
    </div>
  );
}
