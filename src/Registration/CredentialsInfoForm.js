import { TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const CredentialsInfoForm = () => {
	const { control } = useFormContext();
	return (
		<>
			<Controller
				control={control}
				name="username"
				render={({ field }) => (
					<TextField
						id="username"
						label="User Name"
						variant="outlined"
						placeholder="Enter Your User Name"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
			<Controller
				control={control}
				name="password"
				render={({ field }) => (
					<TextField
						id="password"
						label="Password"
						variant="outlined"
						placeholder="Enter Your Password"
						fullWidth
						margin="normal"
						{...field}
					/>
				)}
			/>
		</>
	);
};

export default CredentialsInfoForm;