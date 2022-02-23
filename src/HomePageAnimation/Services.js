import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/styles";
import pic from "../images/old.gif";
const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Nunito",
    width: "52rem",
    height: "10rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    marginLeft: "20rem",
    fontSize: "1rem",
  },
  root2: {
    fontFamily: "Nunito",
    width: "15rem",
    height: "40rem",
    marginTop: "2rem",
    marginBottom: "1rem",
    marginLeft: "80rem",
    fontSize: "1rem",
  },
  root3: {
    fontFamily: "Nunito",

    marginTop: "2rem",
    marginBottom: "1rem",
    marginLeft: "20rem",
    fontSize: "1rem",
  },

  roothead: {
    fontFamily: "Nunito",
    width: "52rem",
    height: "3rem",
    marginTop: "1rem",
    marginBottom: "1rem",
    marginLeft: "20rem",
    fontSize: "1.5rem",
  },
  head: {
    fontSize: "1.2rem",
  },
  content: {
    textAlign: "center",
  },
  contenthead: {
    fontWeight: "800",
    textAlign: "center",
  },
  contentcard: {
    textAlign: "left",
  },
  btn: {
    fontWeight: "300",
    marginLeft: "62rem",
    height: "5rem",
    width: "10rem",
    fontSize: "1.5rem",
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.roothead} elevation={6}>
        {" "}
        <div className={classes.contenthead}>SERVICES WE PROVIDE</div>
      </Paper>
      <Paper className={classes.root} elevation={6}>
        {" "}
        <div className={classes.content}>
          <h1 className={classes.head}> Membership Plans: </h1>
          <p>
            We provide Three Types of Membership Plan:{" "}
            <ul type="none">
              <li>Basic</li>
              <li>Premium</li>
              <li>Gold</li>
            </ul>
          </p>
        </div>
      </Paper>

      <Box
        className={classes.root3}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 265,
            height: 250,
          },
        }}
      >
        <Paper className={classes.root4} elevation={6}>
          {" "}
          <div className={classes.content}>
            <h1 className={classes.head}> Basic </h1>
            <p className={classes.contentcard}>
              <ul type="radio">
                <li>Yearly Charge: 10000</li>
                <li>Doctors Fee range from 300 to 1000</li>
                <li>Room with all available facilities</li>
              </ul>
            </p>
          </div>
        </Paper>
        <Paper className={classes.root4} elevation={6}>
          {" "}
          <div className={classes.content}>
            <h1 className={classes.head}> Premium </h1>
            <p className={classes.contentcard}>
              <ul type="radio">
                <li>Yearly Charge: 30000</li>
                <li>Doctors Fee range from 1000 to 3000</li>
                <li>
                  Very comfortable room with all available facilities and a
                  veranda
                </li>
              </ul>
            </p>
          </div>
        </Paper>
        <Paper className={classes.root4} elevation={6}>
          {" "}
          <div className={classes.content}>
            <h1 className={classes.head}> Gold </h1>
            <p className={classes.contentcard}>
              <ul type="radio">
                <li>Yearly Charge: 50000</li>
                <li>Doctors Fee range from 3000 to 10000</li>
                <li>
                  A well gurnished room with new furniture and all available
                  facilities with a private balcony
                </li>
              </ul>
            </p>
          </div>
        </Paper>
      </Box>

      <Paper className={classes.root} elevation={6}>
        {" "}
        <div className={classes.content}>
          <h1 className={classes.head}>
            {" "}
            Doctor Appointment and Schedule Facility{" "}
          </h1>
          <p>
            Each and every member of our elderly home can request an Appointment
            to any of his preferrable doctors according to their balance
            transferred to the account connected to the website database. They
            can cancel their appointment anytime by accessing to their
            appointment table and the previously deducted money will be returned
            to their account.
          </p>
        </div>
      </Paper>

      <Paper className={classes.root} elevation={6}>
        {" "}
        <div className={classes.content}>
          <h1 className={classes.head}> Buying Staffs When Needed </h1>
          <p>
            Our members can buy staffs like food and medicine when needed, and
            the money will be deducted from their account. They will be provided
            a money receipt with everything they bought.
          </p>
        </div>
      </Paper>

      <Paper className={classes.root} elevation={6}>
        {" "}
        <div className={classes.content}>
          <h1 className={classes.head}> Issue A Book</h1>
          <p>
            Our members can issue books that are available on the library. A
            specific amount of money will be deducted daily till return date.
          </p>
        </div>
      </Paper>
      <Paper className={classes.root} elevation={6}>
        {" "}
        <div className={classes.content}>
          <h1 className={classes.head}> Transaction History</h1>
          <p>
            Our members can buy staffs , issue books, request appointment and
            after each and every transaction , it will be tracked and will be
            written on their transaction history.
          </p>
        </div>
      </Paper>
      <Paper className={classes.root} elevation={6}>
        {" "}
        <div className={classes.content}>
          <h1 className={classes.head}> Entertainment Facilities </h1>
          <p>
            For their mental refreshment , they can have their song, game, movie
            favorite lists that will be recorded. They can add or delete them
            from list anytime if they want.
          </p>
        </div>
      </Paper>
      <a href="./HomeAni">
        <button className={classes.btn}> Back</button>
      </a>
    </div>
  );
}
