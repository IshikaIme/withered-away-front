import List from "@mui/material/List";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { Component } from "react";
import bb from "../images/brown.jpg";

import HomeImg from "../images/pp.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { EditText, EditTextarea } from "react-edit-text";

const useStyles = makeStyles({
  root: {
    fontFamily: "Nunito",
    marginLeft: "20rem",
    textAlign: "center",
    marginTop: "-50rem",
  },
  header: {
    marginBottom: "10 rem",
    marginLeft: "9rem",
  },
  head: {
    fontSize: "1.5rem",
    marginRight: "0.7rem",
    marginLeft: "28rem",
  },
  btn: {
    height: "7vh",
    width: "7vh",
    marginLeft: "20rem",
    backgroundColor: "rgba(160,82,45,0.5)",
    marginBottom: "30px",
  },
  btns: {
    height: "7vh",
    width: "7vh",
    marginLeft: "15rem",
    backgroundColor: "rgba(160,82,45,0.5)",
    marginBottom: "30px",
  },
  btnc: {
    height: "7vh",
    width: "7vh",
    marginLeft: "1rem",
    backgroundColor: "rgba(160,82,45,0.5)",
    marginBottom: "30px",
  },
  cardimg: {
    marginTop: "15px",
    marginLeft: "270px",
    height: "120vh",
    width: "50vh",
  },

  img: {
    height: "130vh",
    width: "80vh",
  },
});

const ProfileDoctor = () => {
  const id = localStorage.getItem("id");
  const [itemBasic, setItemBasic] = useState([]);

  const [isEditingBasic, setIsEditingBasic] = useState(false);

  const classes = useStyles();
  useEffect(() => {
    fetch("https://withered-away-back-postgres.onrender.com" + `/api/doctor/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setItemBasic(resp.data[0]);
        console.log(resp.data[0]);
      });
  }, []);

  return (
    <div>
      <Card className={classes.cardimg}>
        <CardMedia
          className={classes.img}
          style={{ paddingTop: "200%" }}
          image={HomeImg}
        />
      </Card>

      <div className={classes.root}>
        <h1 className={classes.header}>PERSONAL INFORMATION</h1>
        <div className={classes.basic}>
          <List>
            <ListItem>
              <h1 className={classes.head}>ID:</h1>

              <ListItemText primary={itemBasic.ID} />
            </ListItem>
            <ListItem>
              <h1 className={classes.head}>Name:</h1>
              {isEditingBasic === true ? (
                <input
                  type="text"
                  defaultValue={itemBasic.NAME}
                  name="name"
                  placeholder="Enter name"
                  onChange={(e) => (itemBasic.NAME = e.target.value)}
                />
              ) : (
                <ListItemText primary={itemBasic.NAME} />
              )}
            </ListItem>

            <ListItem>
              {" "}
              <h1 className={classes.head}>Qualification:</h1>
              {isEditingBasic === true ? (
                <input
                  type="text"
                  defaultValue={itemBasic.QUALIFICATION}
                  name="Qualification"
                  placeholder="Enter Qualification"
                  onChange={(e) => (itemBasic.QUALIFICATION = e.target.value)}
                />
              ) : (
                <ListItemText primary={itemBasic.QUALIFICATION} />
              )}
            </ListItem>

            <ListItem>
              {" "}
              <h1 className={classes.head}>Hospital Name:</h1>
              {isEditingBasic === true ? (
                <input
                  type="text"
                  defaultValue={itemBasic.HOSPITAL_NAME}
                  name="Hospital name"
                  placeholder="Hospital Name"
                  onChange={(e) => (itemBasic.HOSPITAL_NAME = e.target.value)}
                />
              ) : (
                <ListItemText primary={itemBasic.HOSPITAL_NAME} />
              )}
            </ListItem>
            <ListItem>
              {" "}
              <h1 className={classes.head}>Phone No: </h1>
              {isEditingBasic === true ? (
                <input
                  type="text"
                  defaultValue={itemBasic.PHONE_NO}
                  name="phone no"
                  placeholder="Enter phone no:"
                  onChange={(e) => (itemBasic.PHONE_NO = e.target.value)}
                />
              ) : (
                <ListItemText primary={itemBasic.PHONE_NO} />
              )}
            </ListItem>
            <ListItem>
              {" "}
              <h1 className={classes.head}>Email: </h1>
              {isEditingBasic === true ? (
                <input
                  type="text"
                  defaultValue={itemBasic.EMAIL_ADDRESS}
                  name="email"
                  placeholder="Enter email:"
                  onChange={(e) => (itemBasic.EMAIL_ADDRESS = e.target.value)}
                />
              ) : (
                <ListItemText primary={itemBasic.EMAIL_ADDRESS} />
              )}
            </ListItem>
            <ListItem>
              <h1 className={classes.head}>Fee:</h1>

              <ListItemText primary={itemBasic.FEE} />
            </ListItem>
          </List>
          {isEditingBasic === true ? (
            <div>
              <button
                className={classes.btns}
                onClick={(e) => {
                  setIsEditingBasic(false);
                  axios
                    .patch(
                      "https://withered-away-back-postgres.onrender.com" + `/api/doctor/id/${id}`,
                      itemBasic
                    )
                    .then((res) => {
                      // window.location.reload(false);
                      console.log(itemBasic);
                    });
                }}
              >
                Save
              </button>
              <button
                className={classes.btnc}
                onClick={(e) => {
                  {
                    setIsEditingBasic(false);
                  }
                }}
              >
                cancel
              </button>
            </div>
          ) : (
            <button
              className={classes.btn}
              onClick={(e) => {
                {
                  setIsEditingBasic(true);
                }
              }}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileDoctor;
