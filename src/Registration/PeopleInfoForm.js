import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useState } from "react";

const PeopleInfoForm = () => {
	const { control } = useFormContext();

	return (
		<>
			<Controller
				control={control}
				name="firstName"
				render={({ field }) => (
					<TextField
						id="first-name"
						label="First Name"
						variant="outlined"
						placeholder="Enter Your First Name"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>

			<Controller
				control={control}
				name="lastName"
				render={({ field }) => (
					<TextField
						id="last-name"
						label="Last Name"
						variant="outlined"
						placeholder="Enter Your Last Name"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>

			<Controller
				control={control}
				name="gender"
				render={({ field }) => (
					<RadioGroup row {...field}>
						<FormControlLabel
							value="FEMALE"
							control={<Radio />}
							label="Female"
						/>
						<FormControlLabel
							value="MALE"
							control={<Radio />}
							label="Male"
						/>
						<FormControlLabel
							value="OTHER"
							control={<Radio />}
							label="Other"
						/>
					</RadioGroup>
				)}
			/>
			<Controller
				control={control}
				name="birthday"
				render={({ field: { ref, ...rest } }) => (
          <BasicDatePicker {...rest} />
				)}
			/>
			<Controller
				control={control}
				name="phoneNo"
				render={({ field }) => (
					<TextField
						id="phone-no"
						label="Phone No"
						variant="outlined"
						placeholder="Enter Your Phone No"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
		</>
	);
};

const BasicDatePicker = ({...rest}) => {
	const [value, setValue] = useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				label="Birthday"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
        {...rest}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
};

export default PeopleInfoForm;
