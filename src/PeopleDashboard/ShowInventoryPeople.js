import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@mui/material/Paper";
import medicine from "../images/medicine.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse, Zoom } from "@material-ui/core";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import commonroom from "../images/commonroom.jpg";
import food from "../images/food.jpg";
import CardContent from "@material-ui/core/CardContent";
import BodyPeopleDash from "./BodyPeopleDash";
const useStyles = makeStyles({
  allcards: {
    marginTop: "-10rem",
    marginLeft: "20rem",
    display: "flex",
  },
  root: {
    width: 200,
    height: 300,
    background: "rgba(255,255,255,0.4)",
    margin: "20px",
    marginTop: "10rem",
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
  small: {
    fontFamily: "Nunito",
    marginTop: "35rem",
    height: 80,
    background: "rgba(0,0,0,0.8)",
  },
});

export default function ShowInventoryPeople() {
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
            style={{ height: 0, paddingTop: "100%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={food}
            title="Food"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/TableFoodPeople">Buy Food</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>

      <CardActions>
        <Card className={classes.root}>
          <CardMedia
            style={{ height: 0, paddingTop: "100%" }}
            className={classes.media}
            // image={cardnumber.imageUrl}
            // image={`url(${cardnumber.imageUrl})`}
            image={medicine}
            title="Medicine"
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h1"
              className={classes.title}
            >
              {" "}
              <a href="/TableMedicinePeople">Buy Medicine</a>
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
              <a href="/CallPeopleDash">Back</a>
            </Typography>
          </CardContent>
        </Card>
      </CardActions>
    </div>
  );
}
