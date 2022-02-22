import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@mui/material/Paper";
import stabimg from "../images/bwall.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse, Zoom } from "@material-ui/core";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";

import staffimg from "../images/staff.jpg";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  allcards: {
    marginTop: "-10rem",
    display: "flex",
  },
  root: {
    width: 800,
    height: 350,
    background: "rgba(0,0,0,0.8)",
    margin: "20px",
    marginTop: "10rem",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  media: {
    height: 80,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: "Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
  small: {
    fontFamily: "Nunito",
    marginTop: "35rem",
    height: 80,
    background: "rgba(0,0,0,0.8)",
  },
});

export default function Services() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Zoom in={checked}>
    <div className={classes.allcards}></div>
  );
}
