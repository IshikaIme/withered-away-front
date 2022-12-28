import React, { useState, useEffect } from "react";
import { MenuItem, Select } from "@material-ui/core";
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

    marginLeft: "6rem",
    // height: "100vh",
    width: "120vh",
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

    fontSize: "2rem",
  },

  Title2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
    fontSize: "2rem",
  },
  Title3: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-1rem",
    fontSize: "2rem",
  },
  wrap: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "2rem",
  },
  wrap2: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-28rem",
    marginBottom: "1rem",
  },
  wrap3: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-30rem",
  },
  wrap4: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
  },
  wrap5: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
  },
  wrap6: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
  },
  wrap7: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
  },
  wrap8: {
    marginLeft: "15rem",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "3rem",
  },
  content1: {
    // marginBottom: "20px",
    fontSize: "1.3rem",
  },
}));

export default function Donations() {
  const [item, setItem] = useState([]);
  const classes = useStyles();
  const id = localStorage.getItem("id");
  const { handleSubmit, register, getValues } = useForm();
  // const [data, setData] = useState(null);
  let navigate = useNavigate();

  const [alertOpen, setAlertOpen] = React.useState(false);
  const [alertMsg, setAlertMsg] = React.useState("");
  const [alertType, setAlertType] = React.useState("");

  const handleClose = (event, amount) => {
    if (amount === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, e);

    // axios
    // .post("https://withered-away-back-postgres.onrender.com" + "/api/book_issue", {
    //   BOOK_ID: data.BOOK_ID,
    //   PEOPLE_ID: id,
    //   ISSUE_DATE: new Date(),
    //   RETURN_DATE: data.RETURN_DATE,
    // })
    // .then((response) => {

    const tobesent = {
      NAME: data.name,
      PHONE_NO: data.PHONE_NO,
      DONATING_DATE: new Date(),
      AMOUNT: data.amount,
      SOURCE: data.Source,
      TRX_ID: data.transaction_id,
      SUGGESTIONS: data.SUGGESTIONS,
    };
    console.log(tobesent);

    axios
      .post("https://withered-away-back-postgres.onrender.com" + "/api/donation", tobesent)
      .then((response) => {
        if (response) {
          console.log(response);
          setAlertType("success");
          setAlertMsg("Donation sent Successfully");
          setAlertOpen(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setAlertType("error");
        setAlertMsg("Server Error");
        setAlertOpen(true);
      });
  };

  const onError = (errors, e) => console.log(errors, e);
  const [value, setValue] = useState();
  const [bankName, setBankName] = useState();
  const handleChange = (event) => {
    setBankName(event.target.value);
    console.log(event.target);
  };
  //   const itemsList=[
  // {
  //     icon: bKash,
  //     text: "bKash"
  // },
  // {

  // }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <CssBaseline />
        <div className={classes.input}>
          <div className={classes.wrap}>
            <h1 className={classes.Title1}>Receipt To Be In The Name Of</h1>

            <div className={classes.content1}>
              <TextField
                {...register("name")}
                className="name"
                label="name"
                color="secondary"
                placeholder="Enter name"
                type="amount"
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className={classes.input}>
          <div className={classes.wrap2}>
            <h1 className={classes.Title2}>Phone No</h1>
            <div className={classes.content1}>
              <TextField
                {...register("PHONE_NO")}
                className="phone_no"
                label="phone_no"
                color="secondary"
                placeholder="Enter phone no"
                type="phone_no"
                fullWidth
              />
            </div>
          </div>
        </div>
        <div className={classes.wrap3}>
          <h1 className={classes.Title2}>Donate</h1>
          <div className={classes.content1}>
            <ol>
              <li>Adopt a Grandpa / Grandma for a month for 3000/=</li>
              <li>One time food expenses for 5000/=</li>
              <li>Food expenses of the Home for a day for 10000/=</li>
              <li>
                Medical Expenses for a Grandpa / Grandma for a year for 12000/=
              </li>
              <li>
                Corpus fund expenses (one-time) for one day every year for
                100000/=
              </li>
            </ol>
          </div>
        </div>

        <div className={classes.wrap4}>
          <h1 className={classes.Title2}>Choose A Way of Transaction</h1>
          <div className={classes.content1}>
            <Select {...register("Source")} fullWidth>
              <MenuItem value="bKash" onChange={handleChange}>
                bKash
              </MenuItem>
              <MenuItem value="Nagad" onChange={handleChange}>
                Nagad
              </MenuItem>
              <MenuItem value="Rocket" onChange={handleChange}>
                Rocket
              </MenuItem>
              <MenuItem value="City Bank" onChange={handleChange}>
                City Bank
              </MenuItem>
              <MenuItem value="Sonali Bank" onChange={handleChange}>
                Sonali Bank
              </MenuItem>
              <MenuItem value="Dutch Bangla Bank" onChange={handleChange}>
                Dutch Bangla Bank
              </MenuItem>
              <MenuItem value="Paypal" onChange={handleChange}>
                Paypal
              </MenuItem>
              <MenuItem value="Janata Bank" onChange={handleChange}>
                Janata Bank
              </MenuItem>

              {/* {itemsList.map((item, index) => {
                const { text, icon } = item;
                return (
                  <MenuItem key={text} value={text}>
                    {icon && <MenuItemIcon>{icon}</MenuItemIcon>}
                    <MenuItemText primary={text} />
                  </MenuItem>
                );
              })} */}
            </Select>
          </div>
        </div>
        <div className={classes.wrap5}>
          <h1 className={classes.Title2}>Enter Amount</h1>
          <div className={classes.content1}>
            <TextField
              {...register("amount")}
              className="amount"
              label="amount"
              color="secondary"
              placeholder="Enter amount"
              type="amount"
              fullWidth
            />
          </div>
        </div>
        <div className={classes.wrap6}>
          <h1 className={classes.Title2}>Transaction ID</h1>
          <div className={classes.content1}>
            <TextField
              {...register("transaction_id")}
              className="transaction_id"
              label="transaction_id"
              color="secondary"
              placeholder="Enter transaction id"
              type="transaction_id"
              fullWidth
            />
          </div>
        </div>
        <div className={classes.wrap6}>
          <h1 className={classes.Title2}>Write Your Suggestions</h1>
          <div className={classes.content1}>
            <TextField
              {...register("SUGGESTIONS")}
              className="suggestions"
              label="suggestions"
              color="secondary"
              placeholder="Enter your suggestions"
              type="suggestions"
              fullWidth
            />
          </div>
        </div>
        <div className={classes.wrap7}>
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
        <div className={classes.wrap8}>
          <div className={classes.btn}>
            <Button
              className="btn"
              type="submit"
              color="inherit"
              variant="contained"
              fullWidth
            >
              <a href="/homeAni"> Back</a>
            </Button>
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
