import axios from "axios";
import React from "react";
import AuthHeader from "../Auth/AuthHeader";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import CallPeopleDash from "./CallPeopleDash";
export default function PeopleDash() {
  let result = "";

  useEffect(() => {
    axios
      .get("https://withered-away-back-postgres.onrender.com" + "/auth/check-people", {
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

  return (
    <div>
      <p>{result}</p>
      <p>
        <CallPeopleDash />
      </p>
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
