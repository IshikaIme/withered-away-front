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
import ap from "../images/issue.jfif";
import reqap from "../images/bbrown.jfif";
import CardContent from "@material-ui/core/CardContent";
import BodyPeopleDash from "./BodyPeopleDash";

const useStyles = makeStyles({
  allcards: {
    marginTop: "-10rem",
    display: "flex",
    marginLeft: "25rem",
  },
  root: {
    width: 300,
    height: 400,
    background: "rgba(255,25,0,0.8)",
    margin: "20px",
    marginTop: "11.5rem",

    marginRight: "2rem",
  },
  root2: {
    width: 300,
    height: 400,
    background: "rgba(255,255,255,0.4)",
    margin: "20px",
    marginTop: "10rem",

    marginRight: "2rem",
  },
  root3: {
    width: 300,
    height: 400,
    background: "rgba(255,255,255,0.4)",
    margin: "20px",
    marginTop: "10rem",
    marginLeft: "1rem",
    marginRight: "2rem",
  },
  media: {
    height: 100,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "1.7rem",
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
    background: "rgba(0,0,0,0.2)",
  },
});

export default function BookIssuePeople() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Zoom in={checked}>
    <div className={classes.allcards}>
      <a href="/IssuedBooksPeople">
        <CardActions>
          <Card className={classes.root}>
            <CardMedia
              style={{ height: 0, paddingTop: "100%" }}
              className={classes.media}
              image={ap}
              title="Issued Books"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                {" "}
                Issued Books
              </Typography>
            </CardContent>
          </Card>
        </CardActions>
      </a>
      <CardActions>
        {/* <Card className={classes.root2}>
          <CardMedia
            style={{ height: 0, paddingTop: "100%" }}
            className={classes.media}
            // image={bedroom}
            title="Upcoming Appointments"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/UpcomingAppointments">Upcoming Appointments</a>
            </Typography>
          </CardContent>
        </Card> */}
      </CardActions>
      <a href="/CallReqABook">
        <CardActions>
          <Card className={classes.root3}>
            <CardMedia
              style={{ height: 0, paddingTop: "100%" }}
              className={classes.media}
              image={reqap}
              title="Request A Book"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                {" "}
                Request A Book
              </Typography>
            </CardContent>
          </Card>
        </CardActions>
      </a>
      <Card className={classes.small}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {" "}
            <a href="/CallPeopleDash">Back</a>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
