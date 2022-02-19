import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import {
  CssBaseline,
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // // backgroundImage: `url(${loginImg})`,
    // backgroundPosition: "center center",
    // backgroundAttachment: "fixed",
    // alignContent: "center",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: "-17rem",
    marginLeft: "18rem",
    // height: "100vh",
    fontFamily: "Special Elite",
  },

  input: {
    height: "80vh",
    maxWidth: "100vh",
    alignContent: "center",

    // marginLeft: "500px",
    // marginBottom: "50px",
  },
  Title1: {
    marginTop: "32rem",
    marginBottom: "1rem",
    justifyContent: "center",
    alignItems: "center",

    fontSize: "3rem",
  },

  Title2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "-1rem",
    fontSize: "3rem",
  },
  wrap: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
  },

  content1: {
    // marginBottom: "20px",
  },
  btn: {
    marginTop: "2rem",
  },
}));

export default function ReqAppointment() {
  const classes = useStyles();
  const id = localStorage.getItem("id");
  const { handleSubmit, register, getValues } = useForm();
  // const [data, setData] = useState(null);
  let navigate = useNavigate();
  const [newvalue, setNewValue] = useState(null);
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, e);

    setNewValue(data.appointment_time, id, 1, "F", data.REASON);
    console.log(newvalue);
    // newvalue.ID = "100";
    // newvalue.APPOINTED_DATE = data.appointment_time;
    // newvalue.PEOPLE_ID = id;
    // newvalue.DOCTOR_ID = 1;
    // newvalue.ACCEPTED = "F";
    // newvalue.REASON = data.REASON;
    const tobesent = {
      APPOINTED_DATE: data.appointment_time,
      REASON: data.reason,
      PEOPLE_ID: id,
      DOCTOR_ID: "1",
      ACCEPTED: "F",
    };
    console.log(tobesent);
    axios
      .post("http://localhost:8080/api/appointment", tobesent)
      .then((response) => {
        if (response) {
          console.log(response);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <CssBaseline />
        <div className={classes.input}>
          <div className={classes.wrap}>
            <h1 className={classes.Title1}>Your Preferrable Schedule</h1>
            <div className={classes.content1}>
              <TextField
                {...register("appointment_time", {})}
                type="datetime-local"
                // placeholder="APPOINTED_DATE"
                // {...register("APPOINTED_DATE", {})}
                className="appointment_time"
                // label="appointment_time"
                color="secondary"
                fullWidth
                required
              />
            </div>
          </div>
          <div className={classes.wrap}>
            <h1 className={classes.Title2}>Reason</h1>
            <div className={classes.content2}>
              <TextField
                {...register("reason")}
                className="reason"
                label="reason"
                color="secondary"
                placeholder="Enter reason"
                type="reason"
                fullWidth
                required
              />
            </div>
          </div>
          <div className={classes.wrap}>
            <div className={classes.btn}>
              <Button
                className="btn"
                type="submit"
                color="inherit"
                variant="contained"
                fullWidth
              >
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
