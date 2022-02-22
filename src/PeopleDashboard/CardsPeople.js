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
  },
  root: {
    maxWidth: 300,
    height: 130,
    marginTop: "310px",
    marginLeft: "65px",
    background: "rgba(0,0,0,0)",
    margin: "1px",
    backgroundAttachment: "fixed",
  },
  root2: {
    maxWidth: 195,
    height: 80,
    marginTop: "-360px",
    marginLeft: "570px",
    background: "rgba(0,0,0,0)",
    margin: "1px",
    backgroundAttachment: "fixed",
  },

  root3: {
    maxWidth: 250,
    height: 400,
    marginTop: "-490px",
    marginLeft: "1105px",
    background: "rgba(0,0,0,0)",
    backgroundAttachment: "fixed",
  },
  calen: {
    background: "rgba(255,255,255,0.5)",
  },
  root5: {
    maxWidth: 290,
    height: 100,
    marginTop: "90px",
    marginLeft: "770px",
    background: "rgba(255,255,255,0)",
  },
  root6: {
    maxWidth: 150,
    height: 100,
    marginTop: "-110px",
    marginLeft: "510px",
    background: "rgba(255,255,255,0)",
  },
  root7: {
    maxWidth: 150,
    height: 100,
    marginTop: "-310px",
    marginLeft: "880px",
    background: "rgba(255,255,255,0)",
  },
  root8: {
    maxWidth: 210,
    height: 80,
    marginTop: "-230px",
    marginLeft: "577px",
    background: "rgba(255,28,255,0)",
  },
  title: {
    fontFamily: "Permanent Marker",
    fontWeight: "bold",
    fontSize: "2.5rem",
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
  title5: {
    fontFamily: "Permanent Marker",

    fontSize: "1.8rem",
    color: "red",
    background: "black",
  },
  title6: {
    fontFamily: "Permanent Marker",

    fontSize: "1.8rem",
    color: "green",
    background: "black",
  },
  title7: {
    fontFamily: "Permanent Marker",

    fontSize: "2.5rem",
    color: "green",
    background: "black",
  },
  title8: {
    fontFamily: "Permanent Marker",

    fontSize: "1.2rem",
    color: "green",
    background: "black",
  },
});

export default function CardsPeople() {
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
        <a href="/CallProfilePeople">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                GO TO YOUR PROFILE
              </Typography>
            </CardContent>
          </Card>
        </a>
        <a href="/CallShowAppointment">
          <Card className={classes.root2}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title2}
              >
                {" "}
                APPOINTMENT{" "}
              </Typography>
            </CardContent>
          </Card>
        </a>
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
            {/* <Clock date={new Date()} /> */}
            <Calendar
              className={classes.calen}
              onChange={onChange}
              value={value}
            />
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
            <a href="/CallEntertainment"> ENTERTAINMENT</a>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root6}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title6}
          >
            <a href="/CallInventoryPeople">Inventory </a>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root7}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title7}
          >
            <a href="/CallBookIssuePeople">Books</a>
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root8}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title8}
          >
            <a href="/Transactions">Your Transactions</a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
