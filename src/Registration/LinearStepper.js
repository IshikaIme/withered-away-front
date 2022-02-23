import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, FormProvider } from "react-hook-form";
import PeopleInfoForm from "./PeopleInfoForm";
import ContactInfoForm from "./ContactInfoForm";
import HealthInfoForm from "./HealthInfoForm";
import EntertainmentInfoForm from "./EntertainmentInfoForm";
import MonetaryInfoForm from "./MonetaryInfoForm";
import CredentialsInfoForm from "./CredentialsInfoForm";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: theme.spacing(2),
	},
}));

function getSteps() {
	return [
		"Personal Information",
		"Contact Information",
		"Health Information",
		"Favorites",
		"Payment",
		"Credentials",
	];
}

function getStepContent(step, methods) {
	switch (step) {
		case 0:
			return <PeopleInfoForm />;
		case 1:
			return <ContactInfoForm />;
		case 2:
			return <HealthInfoForm methods={methods} />;
		case 3:
			return <EntertainmentInfoForm methods={methods} />;
		case 4:
			return <MonetaryInfoForm />;
		case 5:
			return <CredentialsInfoForm />;
		default:
			return "unknown step";
	}
}

const LinearStepper = () => {
	const classes = useStyles();
	const methods = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			gender: "",
			birthday: "",
			phoneNo: "",
			contactName: "",
			contactPhoneNo: "",
			contactRelationship: "",
			contactAddress: "",
			height: "",
			weight: "",
			bloodGroup: "",
			diseases: [],
			medicines: [],
			vaccines: [],
			dissabilities: [],
			allergies: [],
			healthCondition: "",
			songs: [],
			movies: [],
			games: [],
			bankAccountNo: "",
			bankName: "",
			balance: "",
			membershipId: "",
			username: "",
			password: "",
		},
	});
	const [activeStep, setActiveStep] = useState(0);
	const [skippedSteps, setSkippedSteps] = useState([]);
	const steps = getSteps();

	const isStepOptional = (step) => {
		return step === 1 || step === 3;
	};

	const isStepSkipped = (step) => {
		return skippedSteps.includes(step);
	};

	const handleNext = (data) => {
		console.log(data);
		if (activeStep === steps.length - 1) {
			axios
				.post("http://localhost:8080/api/reg", data)
				.then((resp) => resp.json())
				.catch((error) => console.log(error))
				.then((res) => {
					console.log(res);
					setActiveStep(activeStep + 1);
				});
		} else {
			setActiveStep(activeStep + 1);
			setSkippedSteps(
				skippedSteps.filter((skipItem) => skipItem !== activeStep)
			);
		}
	};
	const isStepFalied = () => {
		return Boolean(Object.keys(methods.formState.errors).length);
	};
	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const handleSkip = () => {
		if (!isStepSkipped(activeStep)) {
			setSkippedSteps([...skippedSteps, activeStep]);
		}
		setActiveStep(activeStep + 1);
	};

	// const onSubmit = (data) => {
	//   console.log(data);
	// };
	return (
		<div>
			<Stepper alternativeLabel activeStep={activeStep}>
				{steps.map((step, index) => {
					const labelProps = {};
					const stepProps = {};
					if (isStepOptional(index)) {
						labelProps.optional = (
							<Typography
								variant="caption"
								align="center"
								style={{ display: "block" }}
							>
								optional
							</Typography>
						);
					}
					if (isStepFalied() && activeStep == index) {
						labelProps.error = true;
					}
					if (isStepSkipped(index)) {
						stepProps.completed = false;
					}
					return (
						<Step {...stepProps} key={index}>
							<StepLabel {...labelProps}>{step}</StepLabel>
						</Step>
					);
				})}
			</Stepper>

			{activeStep === steps.length ? (
				<Typography variant="h3" align="center">
					Thanks For Joining With Us!
				</Typography>
			) : (
				<>
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(handleNext)}>
							{getStepContent(activeStep, methods)}
							<br />
							<br />
							<center>
								<Button
									className={classes.button}
									disabled={activeStep === 0}
									variant="outlined"
									onClick={handleBack}
								>
									back
								</Button>
								{isStepOptional(activeStep) && (
									<Button
										className={classes.button}
										variant="contained"
										color="primary"
										onClick={handleSkip}
									>
										skip
									</Button>
								)}
								<Button
									className={classes.button}
									variant="contained"
									color="primary"
									onClick={methods.handleSubmit(handleNext)}
									// type="submit"
								>
									{activeStep === steps.length - 1
										? "Finish"
										: "Next"}
								</Button>
							</center>
						</form>
					</FormProvider>
				</>
			)}
		</div>
	);
};

export default LinearStepper;
