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
    marginTop: "5rem",
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

export default function ReqABook() {
  const [item, setItem] = useState([]);
  const [newvalue, setNewValue] = useState(null);
  const classes = useStyles();
  const id = localStorage.getItem("id");
  const { handleSubmit, register, getValues } = useForm();
  // const [data, setData] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:8080/api/books`)
      .then((resp) => resp.json())
      .then((resp) => {
        setItem(resp.data);

        console.log(resp.data);
      });
  }, []);
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data, e);

    // setNewValue(100, data.ISSUE_DATE, id, 1, "F", data.REASON);
    // console.log(values);
    // newvalue.ID = "100";
    // newvalue.APPOINTED_DATE = data.ISSUE_DATE;
    // newvalue.PEOPLE_ID = id;
    // newvalue.DOCTOR_ID = 1;
    // newvalue.ACCEPTED = "F";
    // newvalue.REASON = data.REASON;

    // axios
    //   .post("http://localhost:8080/appointment", newvalue)
    //   .then((response) => {
    //     if (response) {
    //       console.log(newvalue);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
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
            <h1 className={classes.Title1}>ISSUE_DATE</h1>
            <div className={classes.content1}>
              <TextField
                {...register("ISSUE_DATE", {})}
                type="datetime-local"
                // placeholder="APPOINTED_DATE"
                // {...register("APPOINTED_DATE", {})}
                className="ISSUE_DATE"
                // label="ISSUE_DATE"
                color="secondary"
                fullWidth
                required
              />
            </div>
          </div>
          <div className={classes.wrap}>
            <h1 className={classes.Title2}>BOOK NAME</h1>
            <div className={classes.content2}>
              {/* <RadioGroup row {...register("book")}>
                <Radio
                  className="reason"
                  label="reason"
                  color="secondary"
                  fullWidth
                  required
                  value="A|B|C|D"
                />
              </RadioGroup> */}

              <FormControl>
                <RadioGroup
                  aria-labelledby="BOOK NAME"
                  name="BOOK_NAME"
                  value={value}
                  onChange={handleChange}
                >
                  {item.map((book) => (
                    <FormControlLabel
                      value={book.NAME}
                      control={<Radio />}
                      label={book.NAME}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
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
