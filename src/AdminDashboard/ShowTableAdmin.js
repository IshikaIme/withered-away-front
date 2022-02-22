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
import womanimg from "../images/w.jpg";
import dimg from "../images/dd.jpg";
import don from "../images/don.jpg";
import staffimg from "../images/staff.jpg";
import CardContent from "@material-ui/core/CardContent";
import BodyAdminDash from "./BodyAdminDash";
const useStyles = makeStyles({
  allcards: {
    marginTop: "-10rem",
    display: "flex",
  },
  root: {
    maxWidth: 250,
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

export default function ShowTableAdmin() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Zoom in={checked}>
    <div className={classes.allcards}>
      <CardActions>
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "80%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={womanimg}
            title="PeopleTable"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/TablePeople">People Information</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      <CardActions>
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "80%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={dimg}
            title="DoctorTable"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/TableDoctor">Doctor Information</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      <CardActions>
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "80%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={staffimg}
            title="StaffTable"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/TableStaff">Staff Information</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      <CardActions>
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "80%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={don}
            title="TableDonations"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/TableDonation">Donation Information</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      <CardActions>
        <Card className={classes.small}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/CallAdminDash">Back</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>
    </div>
  );
}
