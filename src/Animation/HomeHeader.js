import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import SortIcon from "@mui/icons-material/Sort";

import { Collapse } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    height: "100vh",
    fontFamily: "Courgette",
  },
  AppBar: {
    background: "none",
    fontFamily: "Courgette",
  },
  AppbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  AppBarTitle: {
    flexGrow: "1",
    // fontSize: "100px",
    // margin: "2 auto",
  },

  colortext: {
    // color: "	#800000",
    color: "#800000",
  },
  title: {
    color: "#fff",
    fontSize: "6.5rem",
    marginBottom: "0 auto ",
  },
  Secondtitle: {
    color: "#fff",
    fontSize: "3rem",
    marginTop: "0 ",
    marginBottom: "0  ",
  },
  container: {
    textAlign: "center",
  },

  icon: {
    color: "#fff",
    fontSize: "1rem",
  },
  goDown: {
    color: "#8b0000",
    fontSize: "large",
    marginTop: "0 auto",
  },
}));
export default function HomeHeader() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} elevation={0}>
        <Toolbar className={classes.AppbarWrapper}>
          <h1 className={classes.AppBarTitle}>
            Withered
            <span className={classes.colortext}>Away</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Wel
            <span className={classes.colortext}>come </span>
            <br />
            <h1 className={classes.Secondtitle}>
              to Withered
              <span className={classes.colortext}>Away </span>
            </h1>
          </h1>
          <IconButton>
            <ExpandCircleDownRoundedIcon
              size="10rem"
              className={classes.goDown}
            />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}