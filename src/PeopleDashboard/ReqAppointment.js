import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/styles";
import { CssBaseline, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    marginTop: "3rem",
    marginBottom: "1rem",
    justifyContent: "center",
    alignItems: "center",

    fontSize: "3rem",
  },

  Title2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
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
    marginBottom: "5rem",
  },
}));

export default function ReqAppointment() {
  const [item, setItem] = useState([]);

  const [acc, setAcc] = useState([]);
  const classes = useStyles();
  const id = localStorage.getItem("id");
  const { handleSubmit, register, getValues } = useForm();
  // const [data, setData] = useState(null);
  let navigate = useNavigate();

  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");
  const [alertType, setAlertType] = React.useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/doctor`)
      .then((resp) => resp.json())
      .then((resp) => {
        setItem(resp.data);

        console.log(resp.data);
      });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, e);
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    // newvalue.ID = "100";
    // newvalue.APPOINTED_DATE = data.appointment_time;
    // newvalue.PEOPLE_ID = id;
    // newvalue.DOCTOR_ID = 1;
    // newvalue.ACCEPTED = "F";
    // newvalue.REASON = data.REASON;
    const tobesent = {
      APPOINTED_DATE: data.APPOINTED_DATE,
      REASON: data.reason,
      PEOPLE_ID: id,
      DOCTOR_ID: value,
      ACCEPTED: "F",
    };
    console.log(tobesent);
    try {
      axios
        .post("http://localhost:8080/api/appointment", tobesent)
        .then((response) => {
          if (response) {
            console.log(response);
            setAlertType("success");
            setAlertMsg("Appointment Requested Successfully");
            setAlertOpen(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setAlertType("error");
          setAlertMsg("Couldn't add this Appointment");
          setAlertOpen(true);
        });
    } catch (e) {
      console.log(e);
      setAlertType("error");
      setAlertMsg("Couldn't add this Appointment");
      setAlertOpen(true);
    }
  };
  useEffect(() => {
    fetch(`http://localhost:8080/api/account/people_id/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setAcc(resp.data[0]);
      });
  }, []);

  const onError = (errors, e) => console.log(errors, e);
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <CssBaseline />
        <div className={classes.input}>
          <div className={classes.wrap}>
            <h1 className={classes.Title1}>Your Preferrable Schedule</h1>
            <div className={classes.content1}>
              <TextField
                {...register("APPOINTED_DATE", {})}
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
            <h1 className={classes.Title2}>Preferrable Doctor</h1>
            <div className={classes.content1}>
              <RadioGroup
                aria-labelledby="DOCTOR_NAME"
                className="DOCTOR_NAME"
                onChange={handleChange}
              >
                {item.map((doctor) => (
                  <FormControlLabel
                    {...register("DOCTOR_ID")}
                    value={doctor.ID}
                    control={<Radio />}
                    label={doctor.NAME}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className={classes.wrap}>
            <h1 className={classes.Title2}>Reason</h1>
            <div className={classes.content1}>
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
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertMsg}
        </Alert>
      </Snackbar>
    </div>
  );
}
