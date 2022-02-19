import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import "react-calendar/dist/Calendar.css";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse, Zoom } from "@material-ui/core";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";

import Calendar from "react-calendar";

const Clock = ({ date }) => {
  return <h1>{`${date.toLocaleTimeString()}`}</h1>;
};

const useStyles = makeStyles({
  allcards: {
    alignItems: "center",
    backgroundAttachment: "fixed",
    maxHeight: "100vh",
  },
  root: {
    maxWidth: 300,
    height: 100,
    marginTop: "310px",
    marginLeft: "65px",
    background: "rgba(0,0,0,0)",

    backgroundAttachment: "fixed",
  },
  root2: {
    maxWidth: 210,
    height: 80,
    marginTop: "-330px",
    marginLeft: "570px",
    background: "rgba(0,0,0,0)",
    margin: "1px",
    backgroundAttachment: "fixed",
  },

  root3: {
    maxWidth: 250,
    height: 400,
    marginTop: "-490px",
    marginLeft: "1095px",
    background: "rgba(0,0,0,0)",
    backgroundAttachment: "fixed",
  },

  calen: {
    background: "rgba(255,255,255,0.5)",
  },
  root4: {
    maxWidth: 150,
    height: 100,
    marginTop: "-140px",
    marginLeft: "880px",
    background: "rgba(255,255,255,0.2)",
  },
  root5: {
    maxWidth: 150,
    height: 100,
    marginTop: "120px",
    marginLeft: "500px",
    background: "rgba(255,255,255,0)",
  },
  title: {
    fontFamily: "Permanent Marker",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "red",
    background: "white",
  },
  title2: {
    fontFamily: "Permanent Marker",
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "white",
    background: "black",
  },
  title3: {
    fontFamily: "Permanent Marker",
    marginTop: "60px",

    fontSize: "1rem",
    color: "red",
    background: "black",
  },
  title4: {
    fontFamily: "Permanent Marker",

    fontSize: "1.5rem",
    color: "red",
    background: "black",
  },
  title5: {
    fontFamily: "Permanent Marker",

    fontSize: "2.3rem",
    color: "orange",
    background: "black",
  },
});

export default function CardsAdmin() {
  const classes = useStyles();
  const [value, onChange] = useState(new Date());
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Zoom in={checked}>
    <div>
      <div className={classes.allcards}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              <a href="/ProfileAdmin"> </a>
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.root2}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title2}
            >
              {" "}
              <a href="/CallShowTableAdmin"> SHOW TABLES</a>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Card className={classes.root3}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title3}
          >
            Calendar
            <Calendar
              className={classes.calen}
              onChange={onChange}
              value={value}
            />
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root4}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title4}
          >
            <a href="/CallInventory"> Inventory</a>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root5}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title5}
          >
            <a href="/HomeAni"> HOME</a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
