import React from "react";
import loginImg from "../images/redfloweryellow.jpg";
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
import CustomizedSnackbars from "../CustomizedSnackbars";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundImage: `url(${loginImg})`,
		backgroundPosition: "center center",
		backgroundAttachment: "fixed",
		alignContent: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		height: "100vh",
		fontFamily: "Special Elite",
	},

	input: {
		height: "100vh",
		maxWidth: "100vh",
		alignContent: "center",

		// marginLeft: "500px",
		// marginBottom: "50px",
	},
	Title1: {
		marginTop: "10rem",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "-1rem",
		fontSize: "3.5rem",
	},

	Title2: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "-1rem",
		fontSize: "3.5rem",
	},
	wrap: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: "20px",
	},

	content1: {
		marginBottom: "20px",
	},
	btn: {
		marginTop: "2rem",
	},
}));

export default function LoginPage() {
	const classes = useStyles();

	const { handleSubmit, register, getValues } = useForm();
	// const [data, setData] = useState(null);
	let navigate = useNavigate();

	const onSubmit = (data, e) => {
		e.preventDefault();
		console.log(data, e);
		const values = getValues();
		console.log(values);

		axios
			.post("http://localhost:8080/auth/users/login", values)
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem(
						"accessToken",
						response.data.accessToken
					);
					if (response.data.id)
						localStorage.setItem("id", response.data.id);
					console.log(localStorage.getItem("accessToken"));
					if (values.role === "admin") navigate("/AdminDash");
					else if (values.role === "people") navigate("/PeopleDash");
					else if (values.role === "doctor") navigate("/DoctorDash");
					else if (values.role === "staff") navigate("/StaffDash");

					window.location.reload(false);
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
						<RadioGroup defaultValue="people" row required>
							<FormControlLabel
								{...register("role")}
								value="admin"
								control={<Radio />}
								label="Admin"
							/>
							<FormControlLabel
								{...register("role")}
								value="people"
								control={<Radio />}
								label="Member"
							/>
							<FormControlLabel
								{...register("role")}
								value="doctor"
								control={<Radio />}
								label="Doctor"
							/>
							<FormControlLabel
								{...register("role")}
								value="staff"
								control={<Radio />}
								label="Staff"
							/>
						</RadioGroup>
					</div>
					<div className={classes.wrap}>
						<h1 className={classes.Title1}>Username</h1>
						<div className={classes.content1}>
							<TextField
								{...register("username")}
								className="username"
								label="Username"
								color="secondary"
								placeholder="Enter username"
								fullWidth
								required
							/>
						</div>
					</div>
					<div className={classes.wrap}>
						<h1 className={classes.Title2}>Password</h1>
						<div className={classes.content2}>
							<TextField
								{...register("password")}
								className="password"
								label="Password"
								color="secondary"
								placeholder="Enter password"
								type="password"
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
								Sign in
							</Button>
						</div>
					</div>
				</div>
			</form>
			{/* <DataValidation /> */}
			{/* <CustomizedSnackbars msg="Invalid Password or Role" /> */}
		</div>
	);
}
