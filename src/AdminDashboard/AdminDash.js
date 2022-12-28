import axios from "axios";
import React, { useEffect } from "react";
import AuthHeader from "../Auth/AuthHeader";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CallAdminDash from "./CallAdminDash";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "92vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    fontFamily: "Courgette",
    backgroundAttachment: "fixed",
  },
}));
export default function AdminDash() {
  let result = "";

  useEffect(() => {
    axios
      .get("https://withered-away-back-postgres.onrender.com" + "/auth/check-admin", {
        headers: AuthHeader(),
      })
      .then(function (response) {
        // handle success
        result = response.data;
        console.log(result);

        return;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CallAdminDash />
      {/* <Button
        variant="outlined"
        href="/"
        onClick={() => {
          localStorage.removeItem("accessToken");
          console.log(localStorage.getItem("accessToken"));
        }}
      >
        Log Out
      </Button> */}
    </div>
  );
}
