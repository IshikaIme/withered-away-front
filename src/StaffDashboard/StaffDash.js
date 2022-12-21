import axios from "axios";
import React from "react";
import AuthHeader from "../Auth/AuthHeader";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import CallStaffDash from "./CallStaffDash";

export default function StaffDash() {
  let result = "";

  useEffect(() => {
    axios
      .get("http://localhost:8080" + "/auth/check-staff", {
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
        <CallStaffDash />
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
