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

	const classes = useStyles();
	const id = localStorage.getItem("id");
	const { handleSubmit, register, getValues } = useForm();
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

		// const values = getValues();
		// console.log(values);
		axios
			.post("http://localhost:8080/api/book_issue", {
				BOOK_ID: data.BOOK_ID,
				PEOPLE_ID: id,
				ISSUE_DATE: new Date(),
				RETURN_DATE: data.RETURN_DATE,
			})
			.then((response) => {
				if (response) {
					console.log(response);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const [selectedBookId, setSelectedBookId] = useState();

	const onError = (errors, e) => console.log(errors, e);
	const handleChangeBookId = (event) => {
		setSelectedBookId(event.target.value);
	};

	const [selectedReturnDate, setSelectedReturnDate] = useState();

	// const handleChangeReturnDate = (event) => {
	// 	setSelectedReturnDate(event.target.value);
	// };
	return (
		<div className={classes.root}>
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<CssBaseline />
				<div className={classes.input}>
					<div className={classes.wrap}>
						<h1 className={classes.Title1}>RETURN_DATE</h1>
						<div className={classes.content1}>
							<TextField
								{...register("RETURN_DATE", {})}
								// onChange={handleChangeReturnDate}
								type="datetime-local"
								className="RETURN_DATE"
								color="secondary"
								fullWidth
								required
							/>
						</div>
					</div>
					<div className={classes.wrap}>
						<h1 className={classes.Title2}>BOOK NAME</h1>
						<div className={classes.content2}>
							<RadioGroup onChange={handleChangeBookId}>
								{item.map((book) => (
									<FormControlLabel
										{...register("BOOK_ID")}
										value={book.ID}
										control={<Radio />}
										label={book.NAME}
									/>
								))}
							</RadioGroup>
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
