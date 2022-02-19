import axios from "axios";
import React from "react";
import AuthHeader from "../Auth/AuthHeader";
import { useEffect } from "react";
import { Button } from "@material-ui/core";
import CallDoctorDash from "./CallDoctorDash";

export default function DoctorDash() {
  let result = "";

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/check-doctor", {
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
      {/* <p>{result}</p> */}

      <p>
        <CallDoctorDash />
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
