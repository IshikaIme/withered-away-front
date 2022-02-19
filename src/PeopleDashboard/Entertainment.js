import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Paper from "@mui/material/Paper";
import stabimg from "../images/brickwall.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Collapse, Zoom } from "@material-ui/core";
import { useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";

import CardContent from "@material-ui/core/CardContent";
import BodyPeopleDash from "./BodyPeopleDash";
import song from "../images/song.jpg";
import movie from "../images/movie.jpg";
import game from "../images/game.jpg";

const useStyles = makeStyles({
  allcards: {
    marginTop: "-2rem",
    display: "flex",
    marginLeft: "10rem",
  },
  root: {
    width: 300,
    height: 400,
    background: "rgba(0,0,255,0.7)",
    margin: "20px",
    marginTop: "10rem",

    marginRight: "2rem",
  },
  root2: {
    width: 300,
    height: 400,
    background: "	rgba(139,0,0,0.7)",
    margin: "20px",
    marginTop: "10rem",

    marginRight: "2rem",
  },
  root3: {
    width: 300,
    height: 400,
    background: "rgba(0,0,0,0.7)",
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

export default function Entertainment() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    // <Zoom in={checked}>
    <div className={classes.allcards}>
      <a href="/Songs">
        <CardActions>
          <Card className={classes.root}>
            <CardMedia
              style={{ height: 0, paddingTop: "100%" }}
              className={classes.media}
              image={song}
              title="songs"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                {" "}
                Your Song Playlist
              </Typography>
            </CardContent>
          </Card>
        </CardActions>
      </a>
      <a href="/Movies">
        <CardActions>
          <Card className={classes.root2}>
            <CardMedia
              style={{ height: 0, paddingTop: "100%" }}
              className={classes.media}
              image={movie}
              title="movies"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                {" "}
                Your Movie Watchlist
              </Typography>
            </CardContent>
          </Card>
        </CardActions>
      </a>

      <a href="/Games">
        <CardActions>
          <Card className={classes.root3}>
            <CardMedia
              style={{ height: 0, paddingTop: "100%" }}
              className={classes.media}
              image={game}
              title="games"
            />

            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
                className={classes.title}
              >
                {" "}
                Your Game Favorites
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
