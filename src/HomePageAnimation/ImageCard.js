import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@mui/material/Paper";
import JoinImg from "../images/0.jpg";
import LoginImg from "../images/flower.jpg";
import serviceimg from "../images/bulb.jpg";
import aboutusimg from "../images/lamp.jpg";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse, Zoom } from "@material-ui/core";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  allcards: {
    display: "flex",
    marginTop: "10rem",
  },
  root: {
    maxWidth: 300,
    height: 450,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
  media: {
    height: 100,
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
  paperhudai: {
    color: "brown",
  },
});

export default function ImageCard() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Zoom in={checked}>
    <div className={classes.allcards}>
      <a href="/Formcall">
        <CardActions>
          <Card className={classes.root}>
            <CardMedia
              style={{ height: 0, paddingTop: "90%" }}
              className={classes.media}
              // image={cardnumber.imageUrl}
              // image={`url(${cardnumber.imageUrl})`}
              image={JoinImg}
              title="Registration"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                {" "}
                Join With us
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.desc}
              >
                If you want to be a member today, fillup the form here.
              </Typography>
            </CardContent>
          </Card>
        </CardActions>
      </a>
      <a href="/LoginPage">
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "90%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={LoginImg}
            title="SignIn"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              Login
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              If you are already a member, sign in to view your dashboard.
            </Typography>
          </CardContent>
        </Card>
      </a>
      <Card className={classes.root}>
        <a href="CallServices">
          {" "}
          <CardMedia
            style={{ height: 0, paddingTop: "90%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={aboutusimg}
            title="aboutus"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              Services
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              We have different kind of services for the nourishment of the
              senior citizens.See Details.
            </Typography>
          </CardContent>
        </a>
      </Card>
      <a href="CallDonations">
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "90%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={serviceimg}
            title="donations"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              Donate Now
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.desc}
            >
              We request you help and donate online to charity generously for
              the nurture of the oldage persons.
            </Typography>
          </CardContent>
        </Card>
      </a>
    </div>
  );
}
