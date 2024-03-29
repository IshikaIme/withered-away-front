import List from "@mui/material/List";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import axios from "axios";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { Component } from "react";
import bb from "../images/brown.jpg";
import "react-edit-text/dist/index.css";
import HomeImg from "../images/pp.jpg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { EditText, EditTextarea } from "react-edit-text";

const dateformat = require("../formatDate");
const useStyles = makeStyles({
  root: {
    fontFamily: "Nunito",
    marginLeft: "50rem",
    //textAlign: "center",
    marginTop: "-172rem",
  },
  header: {
    marginBottom: "10 rem",
  },
  head: {
    fontSize: "1.5rem",

    marginRight: " 0.8rem",
    marginLeft: "-0.8rem",
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
    marginLeft: "300px",
    height: "190vh",
    width: "40vh",
  },
  cardimg2: {
    marginTop: "15px",
    marginLeft: "300px",
    height: "190vh",
    width: "40vh",
  },
  img: {
    height: "190vh",
    width: "80vh",
  },
});

const ProfilePeople = () => {
  const id = localStorage.getItem("id");
  const [itemBasic, setItemBasic] = useState([]);
  const [itemContact, setItemContact] = useState([]);
  const [itemHealth, setItemHealth] = useState([]);
  const [itemDisease, setItemDisease] = useState("");
  const [itemMedicine, setItemMedicine] = useState("");
  const [itemMis, setItemMis] = useState([]);
  const [itemRoom, setItemRoom] = useState([]);
  const [itemDoc, setItemDoc] = useState([]);
  const [isEditingBasic, setIsEditingBasic] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingHealth, setIsEditingHealth] = useState(false);
  const [isEditingMis, setIsEditingMis] = useState(false);
  const classes = useStyles();
  useEffect(() => {
		fetch("https://withered-away-back-postgres.onrender.com" + `/api/people/${id}`)
			.then((resp) => resp.json())
			.then((resp) => {
				if (resp.data[0].BIRTHDAY) {
					resp.data[0].BIRTHDAY = dateformat.formatDate(
						resp.data[0].BIRTHDAY.toString()
					);
				}
				setItemBasic(resp.data[0]);
				console.log(resp.data[0]);
			});
  }, []);

  useEffect(() => {
		fetch(
			"https://withered-away-back-postgres.onrender.com" + `/api/contact/id/connection/contact_id/people_id/${id}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				setItemContact(resp.data[0]);
				console.log(resp.data[0]);
			});
  }, []);

  useEffect(() => {
		fetch("https://withered-away-back-postgres.onrender.com" + `/api/health_record/people_id/${id}`)
			.then((resp) => resp.json())
			.then((resp) => {
				resp.data[0].DISABILITY = resp.data[0].DISABILITY.split(",")
					.filter((d) => d.trim() != "")
					.join(", ");

				resp.data[0].ALLERGY = resp.data[0].ALLERGY.split(",")
					.filter((d) => d.trim() != "")
					.join(", ");

				resp.data[0].VACCINE = resp.data[0].VACCINE.split(",")
					.filter((d) => d.trim() != "")
					.join(", ");
				setItemHealth(resp.data[0]);
				console.log(resp.data[0]);
			});
  }, []);

  useEffect(() => {
		fetch(
			"https://withered-away-back-postgres.onrender.com" + `/api/disease/id/suffer_from/disease_id/people_id/${id}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				setItemDisease(resp.data.map((d) => d.NAME).join(", "));
				console.log(resp.data.map((d) => d.NAME).join(", "));
			});
  }, []);

  useEffect(() => {
		fetch(
			"https://withered-away-back-postgres.onrender.com" + `/api/medicine/id/takes_medicine/medicine_id/people_id/${id}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				setItemMedicine(resp.data.map((d) => d.NAME).join(", "));
				console.log(resp.data.map((d) => d.NAME).join(", "));
			});
  }, []);

  useEffect(() => {
		fetch("https://withered-away-back-postgres.onrender.com" + `/api/account/people_id/${id}`)
			.then((resp) => resp.json())
			.then((resp) => {
				setItemMis(resp.data[0]);
				console.log(resp.data[0]);
			});
  }, []);

  useEffect(() => {
		fetch(
			"https://withered-away-back-postgres.onrender.com" + `/api/bed_room/room_id/room_allotment/room_id/people_id/${id}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				setItemRoom(resp.data[0]);
				console.log(resp.data[0]);
			});
  }, []);

  useEffect(() => {
		fetch(
			"https://withered-away-back-postgres.onrender.com" + `/api/doctor/id/diagnosed_by/doctor_id/people_id/${id}`
		)
			.then((resp) => resp.json())
			.then((resp) => {
				setItemDoc(resp.data[0]);
				console.log(resp.data[0]);
			});
  }, []);

  // const filtereditem = accountitem.filter((it) => it.PEOPLE_ID == id);
  // setItemMis(filtereditem);
  return (
		<div>
			<Card className={classes.cardimg}>
				<CardMedia
					className={classes.img}
					style={{ paddingTop: "200%" }}
					image={HomeImg}
				/>
			</Card>
			<Card className={classes.cardimg2}>
				<CardMedia
					className={classes.img}
					style={{ paddingTop: "200%" }}
					image={HomeImg}
				/>
			</Card>
			<div className={classes.root}>
				<h1 className={classes.header}>BASIC INFORMATION</h1>
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
									onChange={(e) =>
										(itemBasic.NAME = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemBasic.NAME} />
							)}
						</ListItem>
						<ListItem>
							{" "}
							<h1 className={classes.head}>Gender:</h1>
							{isEditingBasic === true ? (
								<input
									type="text"
									defaultValue={itemBasic.GENDER}
									name="gender"
									placeholder="Enter Gender"
									onChange={(e) =>
										(itemBasic.GENDER = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemBasic.GENDER} />
							)}
						</ListItem>
						<ListItem>
							{" "}
							<h1 className={classes.head}>Birthday: </h1>
							{isEditingBasic === true ? (
								<input
									type="text"
									defaultValue={itemBasic.BIRTHDAY}
									name="birthday"
									placeholder="Enter Birthday"
									onChange={(e) =>
										(itemBasic.BIRTHDAY = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemBasic.BIRTHDAY} />
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Phone No: </h1>
							{isEditingBasic === true ? (
								<input
									type="text"
									defaultValue={itemBasic.PHONE_NO}
									name="Phone No"
									placeholder="Enter Phone_no"
									onChange={(e) =>
										(itemBasic.PHONE_NO = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemBasic.PHONE_NO} />
							)}
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
											"https://withered-away-back-postgres.onrender.com" + `/api/people/id/${id}`,
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

				<h1 className={classes.header}>CONTACT INFORMATION</h1>
				<div className={classes.basic}>
					<List>
						{/* <ListItem>
              <h1 className={classes.head}>ID:</h1>
              <ListItemText primary={itemContact.ID} />
            </ListItem> */}
						<ListItem>
							<h1 className={classes.head}>Name:</h1>
							{isEditingContact === true ? (
								<input
									type="text"
									defaultValue={itemContact.NAME}
									name="name"
									onChange={(e) =>
										(itemContact.NAME = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemContact.NAME} />
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Phone No: </h1>

							{isEditingContact === true ? (
								<input
									type="text"
									defaultValue={itemContact.PHONE_NO}
									name="phone_no"
									onChange={(e) =>
										(itemContact.PHONE_NO = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemContact.PHONE_NO} />
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Address: </h1>
							{isEditingContact === true ? (
								<input
									type="text"
									defaultValue={itemContact.ADDRESS}
									name="Address"
									onChange={(e) =>
										(itemContact.ADDRESS = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemContact.ADDRESS} />
							)}
						</ListItem>
					</List>
					{isEditingContact === true ? (
						<div>
							<button
								className={classes.btns}
								onClick={(e) => {
									setIsEditingContact(false);
									axios
										.patch(
											"https://withered-away-back-postgres.onrender.com" + `/api/contact/id/${itemContact.ID}`,
											itemContact
										)
										.then((res) => {
											// window.location.reload(false);
											console.log(itemContact);
										});
								}}
							>
								Save
							</button>
							<button
								className={classes.btnc}
								onClick={(e) => {
									{
										setIsEditingContact(false);
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
									setIsEditingContact(true);
								}
							}}
						>
							Edit
						</button>
					)}
				</div>

				<h1 className={classes.header}>HEALTH INFORMATION</h1>
				<div className={classes.basic}>
					<List>
						{/* <ListItem>
              <h1 className={classes.head}>ID:</h1>
              <ListItemText primary={itemHealth.ID} />
            </ListItem> */}
						<ListItem>
							<h1 className={classes.head}>Diseases:</h1>
							<ListItemText primary={itemDisease} />
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Medicines:</h1>
							<ListItemText primary={itemMedicine} />
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Height:</h1>
							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.HEIGHT}
									name="height"
									onChange={(e) =>
										(itemHealth.HEIGHT = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemHealth.HEIGHT} />
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Weight: </h1>
							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.WEIGHT}
									name="Weight"
									onChange={(e) =>
										(itemHealth.WEIGHT = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemHealth.WEIGHT} />
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Blood Group: </h1>

							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.BLOOD_GROUP}
									name="Blood group"
									onChange={(e) =>
										(itemHealth.BLOOD_GROUP =
											e.target.value)
									}
								/>
							) : (
								<ListItemText
									primary={itemHealth.BLOOD_GROUP}
								/>
							)}
						</ListItem>

						<ListItem>
							<h1 className={classes.head}>Vaccine: </h1>
							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.VACCINE}
									name="Vaccine"
									onChange={(e) =>
										(itemHealth.VACCINE = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemHealth.VACCINE} />
							)}
						</ListItem>

						<ListItem>
							<h1 className={classes.head}>Disabilities: </h1>
							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.DISABILITY}
									name="Disabilities"
									onChange={(e) =>
										(itemHealth.DISABILITY = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemHealth.DISABILITY} />
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Health Condition: </h1>
							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.HEALTH_CONDITION}
									name="Health Condition"
									onChange={(e) =>
										(itemHealth.HEALTH_CONDITION =
											e.target.value)
									}
								/>
							) : (
								<ListItemText
									primary={itemHealth.HEALTH_CONDITION}
								/>
							)}
						</ListItem>
						<ListItem>
							<h1 className={classes.head}>Allergy: </h1>
							{isEditingHealth === true ? (
								<input
									type="text"
									defaultValue={itemHealth.ALLERGY}
									name="Allergy"
									onChange={(e) =>
										(itemHealth.ALLERGY = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemHealth.ALLERGY} />
							)}
						</ListItem>
					</List>

					{isEditingHealth === true ? (
						<div>
							<button
								className={classes.btns}
								onClick={(e) => {
									setIsEditingHealth(false);
									axios
										.patch(
											"https://withered-away-back-postgres.onrender.com" + `/api/health_record/people_id/${id}`,
											itemHealth
										)
										.then((res) => {
											// window.location.reload(false);
											console.log(itemHealth);
										});
								}}
							>
								Save
							</button>
							<button
								className={classes.btnc}
								onClick={(e) => {
									{
										setIsEditingHealth(false);
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
									setIsEditingHealth(true);
								}
							}}
						>
							Edit
						</button>
					)}
				</div>

				<h1 className={classes.header}>MISCELLANOUS</h1>
				<div className={classes.basic}>
					<List>
						<ListItem>
							<h1 className={classes.head}>Bank Name:</h1>
							{isEditingMis === true ? (
								<input
									type="text"
									defaultValue={itemMis.BANK_NAME}
									name="bank name"
									placeholder="Enter Bank Name"
									onChange={(e) =>
										(itemMis.BANK_NAME = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemMis.BANK_NAME} />
							)}
						</ListItem>
						<ListItem>
							{" "}
							<h1 className={classes.head}>Bank Account No:</h1>
							{isEditingMis === true ? (
								<input
									type="text"
									defaultValue={itemMis.BANK_ACCOUNT_NO}
									name="account no"
									placeholder="Bank Account No:"
									onChange={(e) =>
										(itemMis.BANK_ACCOUNT_NO =
											e.target.value)
									}
								/>
							) : (
								<ListItemText
									primary={itemMis.BANK_ACCOUNT_NO}
								/>
							)}
						</ListItem>

						<ListItem>
							{" "}
							<h1 className={classes.head}>Balance:</h1>
							{isEditingMis === true ? (
								<input
									type="text"
									defaultValue={itemMis.BALANCE}
									name="balance"
									placeholder="Balance"
									onChange={(e) =>
										(itemMis.BALANCE = e.target.value)
									}
								/>
							) : (
								<ListItemText primary={itemMis.BALANCE} />
							)}
						</ListItem>

						{/* <ListItem>
              {" "}
              <h1 className={classes.head}>Balance: </h1>
              <ListItemText primary={itemMis.BALANCE} />
            </ListItem> */}
						{/* <ListItem>
              {" "}
              <h1 className={classes.head}>Transaction History: </h1>
              <ListItemText primary={itemMis.TRANSACTION_HISTORY} />
            </ListItem> */}
					</List>
					{isEditingMis === true ? (
						<div>
							<button
								className={classes.btns}
								onClick={(e) => {
									setIsEditingMis(false);
									axios
										.patch(
											"https://withered-away-back-postgres.onrender.com" + `/api/account/people_id/${id}`,
											itemMis
										)
										.then((res) => {
											// window.location.reload(false);
											console.log(itemMis);
										});
								}}
							>
								Save
							</button>
							<button
								className={classes.btnc}
								onClick={(e) => {
									{
										setIsEditingMis(false);
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
									setIsEditingMis(true);
								}
							}}
						>
							Edit
						</button>
					)}
				</div>

				{itemRoom != null ? (
					<>
						<h1 className={classes.header}>ROOM</h1>
						<div className={classes.basic}>
							<List>
								<ListItem>
									<h1 className={classes.head}>Room No:</h1>
									<ListItemText primary={itemRoom.ROOM_ID} />
								</ListItem>
							</List>
						</div>
					</>
				) : (
					<></>
				)}

				{itemDoc != null ? (
					<>
						<h1 className={classes.header}>DOCTOR ASSIGNED</h1>
						<div className={classes.basic}>
							<List>
								<ListItem>
									<h1 className={classes.head}>
										Doctor Name:
									</h1>
									<ListItemText primary={itemDoc.NAME} />
								</ListItem>
							</List>
						</div>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
  );
};
export default ProfilePeople;
